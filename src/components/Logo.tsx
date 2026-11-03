import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  light?: boolean;
  className?: string;
};

// logo.webp has a navy wordmark; logo-light.webp is the same logo with a white wordmark for dark backgrounds.
export default function Logo({ light = false, className = "h-14" }: LogoProps) {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label="Classy Choice Interiors home">
      <Image
        src={light ? "/images/logo-light.webp" : "/images/logo.webp"}
        alt="Classy Choice Interiors"
        width={850}
        height={300}
        priority
        className={`w-auto ${className}`}
      />
    </Link>
  );
}
