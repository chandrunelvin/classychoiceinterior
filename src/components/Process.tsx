"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Cog, FileCheck, Ruler, Users } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Consultation",
    text: "Understand your needs, style and budget",
  },
  {
    icon: Ruler,
    title: "Design & 3D Visualisation",
    text: "Get customised designs and realistic 3D views",
  },
  {
    icon: Cog,
    title: "Production & Installation",
    text: "Precision manufacturing and expert installation",
  },
  {
    icon: FileCheck,
    title: "Final Handover",
    text: "On-time delivery of your beautiful space",
  },
];

export default function Process() {
  const progressRef = useRef<HTMLOListElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const progress = progressRef.current;
    if (!progress) return;

    if (!("IntersectionObserver" in window)) {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(progress);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-b border-line bg-white py-20">
      <div className="container-x">
        <p className="eyebrow">How It Works</p>
        <h2 className="mt-3 font-serif text-2xl text-ink sm:text-3xl">
          A Simple Process to Your Dream Home
        </h2>

        <ol
          ref={progressRef}
          className="process-progress mt-12"
          data-started={started}
        >
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="process-step"
              style={{ "--process-step": i } as CSSProperties}
            >
              {i < steps.length - 1 && (
                <span className="process-connector" aria-hidden="true" />
              )}
              <span className="process-icon" aria-hidden="true">
                <Icon className="relative h-6 w-6" strokeWidth={1.5} />
              </span>
              <div className="process-copy">
                <p className="font-serif text-xl text-ink" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-2 max-w-[240px] text-xs leading-relaxed text-muted lg:mx-auto lg:max-w-[200px]">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
