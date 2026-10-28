type LogoProps = {
  light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
  return (
    <a href="#" className="flex items-center gap-3">
      <span className="relative grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-dark p-[3px] shadow-md">
        <span className="grid h-full w-full place-items-center rounded-full bg-navy">
          <span className="font-serif text-2xl leading-none text-gold">C</span>
        </span>
      </span>
      <span className="leading-tight">
        <span
          className={`block font-serif text-[15px] tracking-wide ${light ? "text-white" : "text-navy"}`}
        >
          CLASSY CHOICE
        </span>
        <span
          className={`block text-[9px] tracking-[0.35em] ${light ? "text-white/70" : "text-muted"}`}
        >
          INTERIORS
        </span>
      </span>
    </a>
  );
}
