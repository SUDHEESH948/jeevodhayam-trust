"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const lenis = new Lenis({ autoRaf: true, lerp: 0.09, anchors: true });
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    return () => {
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
      lenis.destroy();
    };
  }, [reduceMotion]);

  return children;
}

export function scrollToTop() {
  if (typeof window === "undefined") return;
  const win = window as unknown as { __lenis?: Lenis };
  if (win.__lenis) {
    win.__lenis.scrollTo(0, { duration: 1.1 });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export function BackToTop({
  className = "back-top",
  children,
  ariaLabel = "Back to top",
}: {
  className?: string;
  children?: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      className={className}
      href="#top"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
        if (window.location.hash) {
          window.history.replaceState(null, "", window.location.pathname + window.location.search);
        }
      }}
      aria-label={ariaLabel}
    >
      {children || <>Back to top</>}
    </a>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function VisionReveal() {
  const reduceMotion = useReducedMotion();
  let letterIndex = 0;
  const revealWords = (phrase: string, prefix: string) => phrase.split(" ").map((word, wordIndex, words) => <span className="statement-word-group" key={`${prefix}-${wordIndex}`}>{Array.from(word).map((letter, index) => {
    const delay = letterIndex++ * 0.01;
    return <motion.span className="statement-letter" key={`${prefix}-${wordIndex}-${index}`} initial={reduceMotion ? false : { opacity: 0, y: "0.8em", rotate: 2 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }} viewport={{ once: false, amount: 0.32 }} transition={{ duration: 0.34, delay, ease: [0.22, 1, 0.36, 1] }}>{letter}</motion.span>;
  })}{wordIndex < words.length - 1 ? " " : ""}</span>);

  return <p id="vision-title" className="statement page-gutter">{revealWords("A compassionate society, where everyone lives with", "primary")}<em>{revealWords("dignity and hope.", "emphasis")}</em></p>;
}

export function ParallaxFrame({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [18, -18]);

  return (
    <div ref={ref} className={`photo-frame ${className}`}>
      <motion.div className="photo-parallax" style={{ y: reduceMotion ? 0 : y }}>
        <Image src={src} alt={alt} fill unoptimized sizes="(max-width: 700px) 92vw, 55vw" className="cover-image" />
      </motion.div>
      <span className="photo-grain" aria-hidden="true" />
    </div>
  );
}