import Image from "next/image";

type PhotoCollageProps = {
  image: string;
  inset: string;
  alt: string;
  className?: string;
};

// Main photo with an overlapping inset photo, gold corner brackets and a dot pattern.
export default function PhotoCollage({ image, inset, alt, className = "" }: PhotoCollageProps) {
  return (
    <div className={`relative pb-10 pl-4 pr-10 pt-4 sm:pr-16 ${className}`}>
      <span className="absolute right-4 top-0 h-36 w-40 border-r-2 border-t-2 border-gold sm:right-10" />
      <span className="absolute bottom-6 left-0 h-28 w-28 border-b-2 border-l-2 border-gold" />
      <span
        aria-hidden="true"
        className="absolute -bottom-2 left-24 h-10 w-20 bg-[radial-gradient(var(--color-gold)_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-70"
      />
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
        <Image src={image} alt={alt} fill sizes="(min-width:1024px) 45vw, 90vw" className="object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 aspect-[4/3] w-[42%] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
        <Image src={inset} alt={`${alt} detail`} fill sizes="(min-width:1024px) 20vw, 40vw" className="object-cover" />
      </div>
    </div>
  );
}
