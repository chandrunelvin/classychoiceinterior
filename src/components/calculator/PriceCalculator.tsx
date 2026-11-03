"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  Check,
  CookingPot,
  DoorClosed,
  Gem,
  House,
  Info,
  MessagesSquare,
  Minus,
  MousePointerClick,
  Phone,
  Plus,
  RotateCcw,
  Sparkles,
  Star,
} from "lucide-react";
import {
  MAX_WALL_FT,
  MIN_WALL_FT,
  RANGE,
  extras,
  formatINR,
  formatLakh,
  homeTypes,
  MAX_WARDROBES,
  kitchenExtras,
  kitchenRatePerFt,
  kitchenShapes,
  packages,
  rooms,
  wardrobeExtras,
  wardrobeHeight,
  wardrobeRatePerSqft,
  wardrobeTypes,
  wardrobeWidth,
  type PackageId,
  type PriceItem,
} from "@/lib/pricing";
import { contact } from "@/lib/site";

type Mode = "kitchen" | "wardrobe" | "home";

const steps: Record<Mode, string[]> = {
  kitchen: ["Shape", "Measurements", "Package", "Add-ons", "Estimate"],
  wardrobe: ["Type", "Size", "Package", "Add-ons", "Estimate"],
  home: ["Home Type", "Spaces", "Package", "Extras", "Estimate"],
};

const packageIcons = { essential: Star, premium: Sparkles, luxury: Gem };

const modeTitles: Record<Mode, { icon: typeof House; title: string }> = {
  kitchen: { icon: CookingPot, title: "Modular Kitchen Estimate" },
  wardrobe: { icon: DoorClosed, title: "Wardrobe Estimate" },
  home: { icon: House, title: "Full Home Estimate" },
};

// Counter positions for each kitchen shape, drawn inside a 120×100 room plan.
const shapeCounters: Record<string, [number, number, number, number][]> = {
  straight: [[10, 10, 100, 16]],
  "l-shaped": [
    [10, 10, 100, 16],
    [10, 26, 16, 64],
  ],
  "u-shaped": [
    [10, 26, 16, 64],
    [10, 10, 100, 16],
    [94, 26, 16, 64],
  ],
  parallel: [
    [10, 10, 100, 16],
    [10, 74, 100, 16],
  ],
};

const wallName = (i: number) => String.fromCharCode(65 + i);

function ShapeDiagram({ shape, className = "" }: { shape: string; className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <rect x="4" y="4" width="112" height="92" rx="3" fill="var(--color-cream)" stroke="var(--color-line)" strokeWidth="2" />
      {shapeCounters[shape].map(([x, y, w, h], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} rx="1.5" fill="var(--color-gold)" />
          <text
            x={x + w / 2}
            y={y + h / 2}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="9"
            fontWeight="600"
            fill="white"
          >
            {wallName(i)}
          </text>
        </g>
      ))}
    </svg>
  );
}

// Front view of each wardrobe type, drawn inside a 120×100 frame.
function WardrobeDiagram({ type, className = "" }: { type: string; className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <rect x="10" y="6" width="100" height="88" rx="3" fill="var(--color-cream)" stroke="var(--color-gold)" strokeWidth="2.5" />
      {type === "hinged" &&
        [0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={14 + i * 31.3} y="10" width="29.3" height="80" rx="1.5" fill="white" stroke="var(--color-line)" strokeWidth="1.5" />
            <rect x={i === 1 ? 17 + i * 31.3 : 37 + i * 31.3} y="42" width="3" height="16" rx="1.5" fill="var(--color-gold)" />
          </g>
        ))}
      {type === "sliding" && (
        <>
          <rect x="14" y="10" width="50" height="80" rx="1.5" fill="var(--color-gold-light)" stroke="var(--color-line)" strokeWidth="1.5" />
          <rect x="56" y="10" width="50" height="80" rx="1.5" fill="white" stroke="var(--color-line)" strokeWidth="1.5" />
          <path d="M30 50h-10m0 0 4-4m-4 4 4 4M90 50h10m0 0-4-4m4 4-4 4" stroke="var(--color-gold-dark)" strokeWidth="2" fill="none" strokeLinecap="round" />
        </>
      )}
      {type === "walk-in" && (
        <>
          <line x1="14" y1="22" x2="66" y2="22" stroke="var(--color-gold-dark)" strokeWidth="2.5" strokeLinecap="round" />
          {[22, 32, 42, 52].map((x) => (
            <path key={x} d={`M${x} 22v4l-6 8h12l-6-8`} stroke="var(--color-navy)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
          ))}
          <line x1="70" y1="10" x2="70" y2="90" stroke="var(--color-line)" strokeWidth="2" />
          {[30, 50, 70].map((y) => (
            <line key={y} x1="70" y1={y} x2="106" y2={y} stroke="var(--color-gold)" strokeWidth="2.5" />
          ))}
          <rect x="16" y="72" width="48" height="16" rx="1.5" fill="white" stroke="var(--color-line)" strokeWidth="1.5" />
          <rect x="36" y="78" width="8" height="2.5" rx="1.25" fill="var(--color-gold)" />
        </>
      )}
    </svg>
  );
}

function Stepper({
  value,
  onChange,
  min,
  max,
  label,
  unit = "",
}: {
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  label: string;
  unit?: string;
}) {
  const btn =
    "grid h-9 w-9 place-items-center rounded-full border border-gold/50 bg-white text-gold transition hover:bg-gold hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gold";
  return (
    <div className="flex items-center gap-3">
      <button type="button" onClick={() => onChange(value - 1)} disabled={value <= min} aria-label={`Decrease ${label}`} className={btn}>
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-12 text-center text-lg font-medium text-ink" aria-live="polite">
        {value}
        {unit && <span className="ml-0.5 text-sm text-muted">{unit}</span>}
      </span>
      <button type="button" onClick={() => onChange(value + 1)} disabled={value >= max} aria-label={`Increase ${label}`} className={btn}>
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

function ItemToggle({
  item,
  checked,
  price,
  onToggle,
}: {
  item: PriceItem;
  checked: boolean;
  price: number;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onToggle}
      className={`flex items-start gap-3 rounded-lg border p-4 text-left transition ${
        checked ? "border-gold bg-gold-light/40" : "border-line bg-white hover:border-gold/60"
      }`}
    >
      <span
        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border transition ${
          checked ? "border-gold bg-gold text-white" : "border-line bg-white"
        }`}
      >
        {checked && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
      </span>
      <span className="flex-1">
        <span className="block text-sm font-medium text-ink">{item.label}</span>
        <span className="mt-0.5 block text-xs text-muted">{item.note}</span>
      </span>
      <span className="shrink-0 text-xs font-medium text-gold-dark">
        {formatINR(price)}
        {item.perBedroom && <span className="block text-right font-normal text-muted">/ room</span>}
      </span>
    </button>
  );
}

function PackagePicker({ pkg, onPick }: { pkg: PackageId; onPick: (p: PackageId) => void }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {packages.map((p) => {
        const Icon = packageIcons[p.id];
        const active = pkg === p.id;
        return (
          <button
            key={p.id}
            type="button"
            aria-pressed={active}
            onClick={() => onPick(p.id)}
            className={`relative rounded-lg border p-6 text-left transition ${
              active ? "border-gold bg-navy text-white shadow-lg" : "border-line bg-white text-ink hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
            }`}
          >
            {p.id === "premium" && (
              <span className="absolute right-3 top-3 rounded bg-gold px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">
                Popular
              </span>
            )}
            <Icon className="h-8 w-8 text-gold" strokeWidth={1.4} />
            <span className="mt-4 block font-serif text-xl">{p.label}</span>
            <span className={`mt-2 block text-xs leading-relaxed ${active ? "text-white/75" : "text-muted"}`}>{p.text}</span>
            <span
              className={`mt-4 inline-flex h-6 w-6 items-center justify-center rounded-full border ${
                active ? "border-gold bg-gold text-white" : "border-line"
              }`}
            >
              {active && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function Progress({ labels, current }: { labels: string[]; current: number }) {
  const pct = (current / (labels.length - 1)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between text-xs sm:hidden">
        <span className="font-medium text-ink">{labels[current]}</span>
        <span className="text-muted">
          Step {current + 1} of {labels.length}
        </span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line sm:hidden">
        <div className="h-full rounded-full bg-gold transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>

      <ol className="relative hidden sm:flex sm:justify-between">
        <span className="absolute left-5 right-5 top-5 h-0.5 bg-line" aria-hidden="true" />
        <span
          className="absolute left-5 top-5 h-0.5 bg-gold transition-all duration-500"
          style={{ width: `calc((100% - 2.5rem) * ${pct / 100})` }}
          aria-hidden="true"
        />
        {labels.map((label, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <li key={label} className="relative flex w-20 flex-col items-center text-center" aria-current={active ? "step" : undefined}>
              <span
                className={`grid h-10 w-10 place-items-center rounded-full border-2 text-sm font-medium transition ${
                  done
                    ? "border-gold bg-gold text-white"
                    : active
                      ? "border-gold bg-navy text-white shadow-md"
                      : "border-line bg-white text-muted"
                }`}
              >
                {done ? <Check className="h-4 w-4" strokeWidth={3} /> : i + 1}
              </span>
              <span className={`mt-2 text-xs ${active ? "font-medium text-ink" : done ? "text-gold-dark" : "text-muted"}`}>
                {label}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function StepTitle({ title, text }: { title: string; text: string }) {
  return (
    <div className="mb-8 text-center">
      <h3 className="font-serif text-2xl text-ink sm:text-3xl">{title}</h3>
      <p className="mt-2 text-sm text-muted">{text}</p>
    </div>
  );
}

const startOptions = [
  {
    mode: "kitchen" as Mode,
    icon: CookingPot,
    img: "/images/project-kitchen.jpg",
    title: "Modular Kitchen",
    text: "Pick your kitchen layout, enter the wall sizes and choose a finish to estimate your kitchen cost.",
  },
  {
    mode: "wardrobe" as Mode,
    icon: DoorClosed,
    img: "/images/wardrobe.jpg",
    title: "Wardrobe",
    text: "Choose a door type, enter your wardrobe size and pick a finish to estimate your wardrobe cost.",
  },
  {
    mode: "home" as Mode,
    icon: House,
    img: "/images/fullhome.jpg",
    title: "Full Home Interiors",
    text: "Choose your home type, the rooms you want designed and a package to estimate your complete home.",
  },
];

const howItWorks = [
  { icon: MousePointerClick, title: "Choose Your Options", text: "Answer a few quick questions about your space." },
  { icon: Calculator, title: "Get an Instant Estimate", text: "See your price range and cost breakdown." },
  { icon: MessagesSquare, title: "Talk to a Designer", text: "Book a free consultation for an exact quote." },
];

export default function PriceCalculator() {
  const top = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<Mode | null>(null);
  const [step, setStep] = useState(0);
  const [pkg, setPkg] = useState<PackageId>("premium");

  // Kitchen
  const [shape, setShape] = useState("l-shaped");
  const [walls, setWalls] = useState<number[]>([10, 8]);
  const [kitchenAdds, setKitchenAdds] = useState<string[]>([]);

  // Wardrobe
  const [wType, setWType] = useState("sliding");
  const [wWidth, setWWidth] = useState(wardrobeWidth[1]);
  const [wHeight, setWHeight] = useState(wardrobeHeight[1]);
  const [wQty, setWQty] = useState(1);
  const [wardrobeAdds, setWardrobeAdds] = useState<string[]>([]);

  // Full home
  const [home, setHome] = useState("2bhk");
  const [bedrooms, setBedrooms] = useState(2);
  const [selected, setSelected] = useState<string[]>(["kitchen", "living", "wardrobes"]);

  const scrollTop = () => top.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const go = (n: number) => {
    setStep(n);
    scrollTop();
  };

  const start = (m: Mode) => {
    setMode(m);
    go(0);
  };

  const restart = () => {
    setMode(null);
    setStep(0);
    setPkg("premium");
    setShape("l-shaped");
    setWalls([10, 8]);
    setKitchenAdds([]);
    setWType("sliding");
    setWWidth(wardrobeWidth[1]);
    setWHeight(wardrobeHeight[1]);
    setWQty(1);
    setWardrobeAdds([]);
    setHome("2bhk");
    setBedrooms(2);
    setSelected(["kitchen", "living", "wardrobes"]);
    scrollTop();
  };

  const chooseShape = (id: string) => {
    setShape(id);
    setWalls(kitchenShapes.find((s) => s.id === id)?.walls ?? [10]);
  };

  const chooseHome = (id: string) => {
    setHome(id);
    setBedrooms(homeTypes.find((h) => h.id === id)?.bedrooms ?? 1);
  };

  const toggleIn = (list: string[], id: string) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);

  // Line items for the estimate.
  const runningFt = walls.reduce((a, b) => a + b, 0);
  const shapeLabel = kitchenShapes.find((s) => s.id === shape)?.label;
  const wardrobeType = wardrobeTypes.find((t) => t.id === wType) ?? wardrobeTypes[0];
  const wArea = wWidth * wHeight;
  const wRate = Math.round(wardrobeRatePerSqft[pkg] * wardrobeType.factor);
  const lines =
    mode === "wardrobe"
      ? [
          {
            label: `${wardrobeType.label} Wardrobe${wQty > 1 ? "s" : ""}`,
            detail: `${wArea} sq ft × ${formatINR(wRate)}${wQty > 1 ? ` × ${wQty}` : ""}`,
            cost: wArea * wRate * wQty,
          },
          ...wardrobeExtras
            .filter((e) => wardrobeAdds.includes(e.id))
            .map((e) => ({ label: e.label, detail: wQty > 1 ? `× ${wQty}` : "", cost: e.rates[pkg] * wQty })),
        ]
      : mode === "kitchen"
      ? [
          {
            label: `${shapeLabel} Kitchen Cabinets`,
            detail: `${runningFt} ft × ${formatINR(kitchenRatePerFt[pkg])}`,
            cost: runningFt * kitchenRatePerFt[pkg],
          },
          ...kitchenExtras
            .filter((e) => kitchenAdds.includes(e.id))
            .map((e) => ({ label: e.label, detail: "", cost: e.rates[pkg] })),
        ]
      : [...rooms, ...extras]
          .filter((item) => selected.includes(item.id))
          .map((item) => ({
            label: item.label,
            detail: item.perBedroom ? `× ${bedrooms} rooms` : "",
            cost: item.rates[pkg] * (item.perBedroom ? bedrooms : 1),
          }));
  const total = lines.reduce((sum, l) => sum + l.cost, 0);
  const pkgLabel = packages.find((p) => p.id === pkg)?.label;
  const summary =
    mode === "wardrobe"
      ? `${wardrobeType.label} · ${wWidth} × ${wHeight} ft · ${wQty} ${wQty === 1 ? "wardrobe" : "wardrobes"} · ${pkgLabel}`
      : mode === "kitchen"
      ? `${shapeLabel} · ${runningFt} running ft · ${pkgLabel}`
      : `${homeTypes.find((h) => h.id === home)?.label} · ${bedrooms} ${bedrooms === 1 ? "Bedroom" : "Bedrooms"} · ${pkgLabel}`;

  const labels = mode ? steps[mode] : [];
  const last = labels.length - 1;
  const canContinue = !(mode === "home" && step === 1 && selected.length === 0);

  return (
    <section id="calculator" className="relative overflow-hidden bg-cream/60 py-20">
      <svg
        aria-hidden="true"
        viewBox="0 0 300 300"
        fill="none"
        className="pointer-events-none absolute -right-24 -top-10 h-80 w-80 text-gold/25"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <circle key={i} cx="300" cy="0" r={120 + i * 28} stroke="currentColor" strokeWidth="0.8" />
        ))}
      </svg>

      <div ref={top} className="container-x relative scroll-mt-28">
        {!mode ? (
          <>
            <div className="text-center">
              <p className="eyebrow">Plan Your Budget</p>
              <h2 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">Estimate Your Interior Cost</h2>
              <span className="mx-auto mt-5 block h-0.5 w-20 bg-gold" />
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-[15px]">
                Get an instant price estimate in a few simple steps. Choose what you would like to design to get started.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {startOptions.map(({ mode: m, icon: Icon, img, title, text }) => (
                <div key={m} className="group overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:shadow-xl">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                    <span className="absolute bottom-4 left-5 grid h-12 w-12 place-items-center rounded-full bg-gold text-white shadow-lg">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="font-serif text-2xl text-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                    <button type="button" onClick={() => start(m)} className="btn-gold mt-6">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
              {howItWorks.map(({ icon: Icon, title, text }, i) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold-light bg-white text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gold">Step {i + 1}</p>
                    <p className="mt-1 font-medium text-ink">{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-line bg-white shadow-lg">
            <div className="border-b border-line bg-white px-5 py-6 sm:px-10">
              <div className="mb-6 flex items-center justify-between gap-4">
                <p className="flex items-center gap-2 font-serif text-lg text-ink">
                  {(() => {
                    const { icon: Icon, title } = modeTitles[mode];
                    return (
                      <>
                        <Icon className="h-5 w-5 text-gold" /> {title}
                      </>
                    );
                  })()}
                </p>
                <button type="button" onClick={restart} className="flex items-center gap-1.5 text-xs text-muted hover:text-gold">
                  <RotateCcw className="h-3.5 w-3.5" /> Start over
                </button>
              </div>
              <Progress labels={labels} current={step} />
            </div>

            <div className="px-5 py-10 sm:px-10">
              {mode === "kitchen" && step === 0 && (
                <>
                  <StepTitle title="Select the Shape of Your Kitchen" text="Pick the layout closest to your kitchen." />
                  <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {kitchenShapes.map((s) => {
                      const active = shape === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          aria-pressed={active}
                          onClick={() => chooseShape(s.id)}
                          className={`relative rounded-lg border p-4 text-center transition ${
                            active ? "border-gold bg-gold-light/40 shadow-md" : "border-line bg-white hover:border-gold/60 hover:shadow-md"
                          }`}
                        >
                          {active && (
                            <span className="absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-gold text-white">
                              <Check className="h-3.5 w-3.5" strokeWidth={3} />
                            </span>
                          )}
                          <ShapeDiagram shape={s.id} className="mx-auto h-24 w-28" />
                          <span className="mt-3 block font-serif text-lg text-ink">{s.label}</span>
                          <span className="mt-1 block text-xs leading-relaxed text-muted">{s.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}

              {mode === "kitchen" && step === 1 && (
                <>
                  <StepTitle
                    title="Enter Your Measurements"
                    text="We have filled in standard sizes. Adjust them to match your kitchen walls."
                  />
                  <div className="grid items-center gap-8 md:grid-cols-[1fr_1.2fr]">
                    <div className="rounded-lg bg-cream p-6">
                      <ShapeDiagram shape={shape} className="mx-auto w-full max-w-xs" />
                      <p className="mt-3 text-center text-xs text-muted">{shapeLabel} layout · top view</p>
                    </div>
                    <div className="space-y-3">
                      {walls.map((len, i) => (
                        <div key={i} className="flex items-center justify-between gap-4 rounded-lg border border-line px-5 py-4">
                          <div className="flex items-center gap-3">
                            <span className="grid h-9 w-9 place-items-center rounded bg-gold font-medium text-white">{wallName(i)}</span>
                            <div>
                              <p className="text-sm font-medium text-ink">Wall {wallName(i)}</p>
                              <p className="text-xs text-muted">Length in feet</p>
                            </div>
                          </div>
                          <Stepper
                            value={len}
                            min={MIN_WALL_FT}
                            max={MAX_WALL_FT}
                            unit="ft"
                            label={`wall ${wallName(i)} length`}
                            onChange={(n) => setWalls((w) => w.map((x, j) => (j === i ? n : x)))}
                          />
                        </div>
                      ))}
                      <p className="flex items-center justify-between rounded-lg bg-navy px-5 py-3 text-sm text-white">
                        <span>Total running length</span>
                        <span className="font-medium text-gold">{runningFt} ft</span>
                      </p>
                    </div>
                  </div>
                </>
              )}

              {mode === "wardrobe" && step === 0 && (
                <>
                  <StepTitle title="Select Your Wardrobe Type" text="Pick the style of wardrobe you would like." />
                  <div className="grid gap-4 sm:grid-cols-3">
                    {wardrobeTypes.map((t) => {
                      const active = wType === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setWType(t.id)}
                          className={`relative rounded-lg border p-5 text-center transition ${
                            active ? "border-gold bg-gold-light/40 shadow-md" : "border-line bg-white hover:border-gold/60 hover:shadow-md"
                          }`}
                        >
                          {active && (
                            <span className="absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-gold text-white">
                              <Check className="h-3.5 w-3.5" strokeWidth={3} />
                            </span>
                          )}
                          <WardrobeDiagram type={t.id} className="mx-auto h-24 w-28" />
                          <span className="mt-3 block font-serif text-lg text-ink">{t.label}</span>
                          <span className="mt-1 block text-xs leading-relaxed text-muted">{t.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}

              {mode === "wardrobe" && step === 1 && (
                <>
                  <StepTitle
                    title="Enter Your Wardrobe Size"
                    text="We have filled in a standard size. Adjust it to fit your wall."
                  />
                  <div className="grid items-center gap-8 md:grid-cols-[1fr_1.2fr]">
                    <div className="rounded-lg bg-cream p-6">
                      <WardrobeDiagram type={wType} className="mx-auto w-full max-w-xs" />
                      <p className="mt-3 text-center text-xs text-muted">{wardrobeType.label} wardrobe · front view</p>
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: "Width", text: "Wall space for the wardrobe", value: wWidth, set: setWWidth, range: wardrobeWidth, unit: "ft" },
                        { label: "Height", text: "Floor to top of wardrobe", value: wHeight, set: setWHeight, range: wardrobeHeight, unit: "ft" },
                        { label: "Quantity", text: "Number of wardrobes", value: wQty, set: setWQty, range: [1, 1, MAX_WARDROBES], unit: "" },
                      ].map((f) => (
                        <div key={f.label} className="flex items-center justify-between gap-4 rounded-lg border border-line px-5 py-4">
                          <div>
                            <p className="text-sm font-medium text-ink">{f.label}</p>
                            <p className="text-xs text-muted">{f.text}</p>
                          </div>
                          <Stepper
                            value={f.value}
                            min={f.range[0]}
                            max={f.range[2]}
                            unit={f.unit}
                            label={f.label.toLowerCase()}
                            onChange={f.set}
                          />
                        </div>
                      ))}
                      <p className="flex items-center justify-between rounded-lg bg-navy px-5 py-3 text-sm text-white">
                        <span>Wardrobe area{wQty > 1 ? " (each)" : ""}</span>
                        <span className="font-medium text-gold">{wArea} sq ft</span>
                      </p>
                    </div>
                  </div>
                </>
              )}

              {mode === "wardrobe" && step === 3 && (
                <>
                  <StepTitle title="Add Extras to Your Wardrobe" text="Optional. Prices shown are per wardrobe." />
                  <div className="grid gap-3 sm:grid-cols-2">
                    {wardrobeExtras.map((item) => (
                      <ItemToggle
                        key={item.id}
                        item={item}
                        checked={wardrobeAdds.includes(item.id)}
                        price={item.rates[pkg]}
                        onToggle={() => setWardrobeAdds((a) => toggleIn(a, item.id))}
                      />
                    ))}
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <StepTitle
                    title="Pick Your Package"
                    text="Your package decides the materials, finishes and hardware we use."
                  />
                  <PackagePicker pkg={pkg} onPick={setPkg} />
                </>
              )}

              {mode === "kitchen" && step === 3 && (
                <>
                  <StepTitle title="Add Extras to Your Kitchen" text="Optional. Choose any extras you would like included." />
                  <div className="grid gap-3 sm:grid-cols-2">
                    {kitchenExtras.map((item) => (
                      <ItemToggle
                        key={item.id}
                        item={item}
                        checked={kitchenAdds.includes(item.id)}
                        price={item.rates[pkg]}
                        onToggle={() => setKitchenAdds((a) => toggleIn(a, item.id))}
                      />
                    ))}
                  </div>
                </>
              )}

              {mode === "home" && step === 0 && (
                <>
                  <StepTitle title="Select Your Home Type" text="Tell us the size of your home." />
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                    {homeTypes.map((h) => (
                      <button
                        key={h.id}
                        type="button"
                        aria-pressed={home === h.id}
                        onClick={() => chooseHome(h.id)}
                        className={`rounded-lg px-3 py-6 text-base font-medium shadow-sm transition ${
                          home === h.id ? "bg-navy text-white shadow-md" : "border border-line bg-white text-ink hover:border-gold"
                        }`}
                      >
                        <House className="mx-auto mb-2 h-6 w-6 text-gold" strokeWidth={1.4} />
                        {h.label}
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-cream px-5 py-4">
                    <div>
                      <p className="text-sm font-medium text-ink">Number of bedrooms</p>
                      <p className="text-xs text-muted">Used for wardrobes and bedroom furniture</p>
                    </div>
                    <Stepper value={bedrooms} min={1} max={8} label="bedrooms" onChange={setBedrooms} />
                  </div>
                </>
              )}

              {mode === "home" && step === 1 && (
                <>
                  <StepTitle title="Pick the Spaces to Design" text="Select every space you want us to design." />
                  <div className="grid gap-3 sm:grid-cols-2">
                    {rooms.map((item) => (
                      <ItemToggle
                        key={item.id}
                        item={item}
                        checked={selected.includes(item.id)}
                        price={item.rates[pkg]}
                        onToggle={() => setSelected((s) => toggleIn(s, item.id))}
                      />
                    ))}
                  </div>
                  {!canContinue && <p className="mt-4 text-center text-sm text-gold-dark">Select at least one space to continue.</p>}
                </>
              )}

              {mode === "home" && step === 3 && (
                <>
                  <StepTitle title="Add Extras" text="Optional. Choose any extras you would like included." />
                  <div className="grid gap-3 sm:grid-cols-2">
                    {extras.map((item) => (
                      <ItemToggle
                        key={item.id}
                        item={item}
                        checked={selected.includes(item.id)}
                        price={item.rates[pkg]}
                        onToggle={() => setSelected((s) => toggleIn(s, item.id))}
                      />
                    ))}
                  </div>
                </>
              )}

              {step === last && (
                <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
                  <div className="self-start overflow-hidden rounded-lg bg-navy text-white shadow-xl">
                    <div className="relative p-7 sm:p-8">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 300 300"
                        fill="none"
                        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 text-gold/30"
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <circle key={i} cx="300" cy="0" r={110 + i * 30} stroke="currentColor" strokeWidth="0.8" />
                        ))}
                      </svg>
                      <p className="relative text-[11px] uppercase tracking-[0.3em] text-gold">Your Estimated Cost</p>
                      <p className="relative mt-4 font-serif text-4xl sm:text-5xl">
                        {formatLakh(total * (1 - RANGE))} – {formatLakh(total * (1 + RANGE))}
                      </p>
                      <p className="relative mt-3 text-sm text-white/75">{summary}</p>
                    </div>
                    <ul className="space-y-3 border-t border-white/10 bg-navy-dark/60 px-7 py-6 text-sm sm:px-8">
                      {lines.map((l) => (
                        <li key={l.label} className="flex items-start justify-between gap-4">
                          <span className="text-white/85">
                            {l.label}
                            {l.detail && <span className="block text-xs text-white/50">{l.detail}</span>}
                          </span>
                          <span className="shrink-0">{formatINR(l.cost)}</span>
                        </li>
                      ))}
                      <li className="flex justify-between gap-4 border-t border-white/10 pt-3 font-medium">
                        <span>Total</span>
                        <span className="text-gold">{formatINR(total)}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="eyebrow">What Happens Next?</p>
                    <h3 className="mt-3 font-serif text-2xl text-ink sm:text-3xl">Turn Your Estimate into a Design</h3>
                    <ul className="mt-6 space-y-4">
                      {[
                        "A designer visits your home for free site measurements.",
                        "You get 3D designs and an exact, itemised quote.",
                        "We build and install everything, on time and to plan.",
                      ].map((t) => (
                        <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold text-white">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link href="/contact#enquiry" className="btn-gold">
                        Book a Free Consultation <ArrowRight className="h-4 w-4" />
                      </Link>
                      <a
                        href={contact.phoneHref}
                        className="inline-flex items-center gap-2 rounded-md border border-gold px-6 py-3 text-sm font-medium text-gold transition hover:bg-gold hover:text-white"
                      >
                        <Phone className="h-4 w-4" /> {contact.phone}
                      </a>
                    </div>
                    <p className="mt-6 flex gap-2 text-xs leading-relaxed text-muted">
                      <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      This is an indicative estimate. Final pricing depends on site measurements, materials and
                      design details, and is confirmed after your free consultation.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-line bg-cream/60 px-5 py-5 sm:px-10">
              <button
                type="button"
                onClick={() => (step === 0 ? restart() : go(step - 1))}
                className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:border-gold hover:text-gold"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              {step < last ? (
                <button
                  type="button"
                  onClick={() => go(step + 1)}
                  disabled={!canContinue}
                  className="btn-gold disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {step === last - 1 ? "See My Estimate" : "Next"} <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button type="button" onClick={restart} className="btn-gold">
                  <RotateCcw className="h-4 w-4" /> Start a New Estimate
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
