// Gold scalloped seal reading "Limited Period Offers".
export default function OfferBadge() {
  const points = 24;
  const path = Array.from({ length: points * 2 }, (_, i) => {
    const angle = (Math.PI * i) / points;
    const r = i % 2 === 0 ? 50 : 46;
    return `${50 + r * Math.cos(angle)},${50 + r * Math.sin(angle)}`;
  }).join(" ");

  return (
    <div className="relative grid h-28 w-28 place-items-center drop-shadow-xl sm:h-36 sm:w-36">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="offer-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e2b867" />
            <stop offset="1" stopColor="#a87a2c" />
          </linearGradient>
        </defs>
        <polygon points={path} fill="url(#offer-gold)" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth=".8" />
      </svg>
      <p className="relative text-center font-serif text-base leading-tight text-white sm:text-xl">
        Limited
        <br />
        Period
        <br />
        Offers
      </p>
    </div>
  );
}
