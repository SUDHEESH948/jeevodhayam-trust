"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About Us" },
  { href: "#initiatives", label: "Areas of Work" },
  { href: "#vision", label: "Vision & Mission" },
  { href: "#contact", label: "Contact Us" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const closeMenu = () => setOpen(false);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 701px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", onResize);
    return () => desktop.removeEventListener("change", onResize);
  }, []);
  useEffect(() => { const updateScrollState = () => setScrolled(window.scrollY > window.innerHeight * 0.72); updateScrollState(); window.addEventListener("scroll", updateScrollState, { passive: true }); return () => window.removeEventListener("scroll", updateScrollState); }, []);
  useEffect(() => { if (!open) return; const previousOverflow = document.body.style.overflow; document.body.style.overflow = "hidden"; firstLinkRef.current?.focus(); const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") { event.preventDefault(); setOpen(false); toggleRef.current?.focus(); return; } if (event.key !== "Tab") return; const focusable = panelRef.current?.querySelectorAll<HTMLElement>('a[href]'); if (!focusable?.length) return; const first = focusable[0], last = focusable[focusable.length - 1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } }; const handleOutsidePointer = (event: PointerEvent) => { if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setOpen(false); }; document.addEventListener("keydown", handleKeyDown); document.addEventListener("pointerdown", handleOutsidePointer); return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", handleKeyDown); document.removeEventListener("pointerdown", handleOutsidePointer); }; }, [open]);
  return (
    <header ref={headerRef} id="top" className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " menu-is-open" : ""}`}>
      <nav className="nav-shell page-gutter" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Jeevodhayam Charitable Trust, home">
          <img className="brand-logo" src="/images/jeevodhayam-logo.png" alt="Jeevodhayam logo" />
          <span className="brand-name">Jeevodhayam<small>Charitable Trust</small></span>
        </a>
        <button ref={toggleRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-links" aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen(value => !value)}>
          <span className="menu-toggle-label">{open ? "Close" : "Menu"}</span>
          {open ? <X size={21} strokeWidth={1.5} /> : <Menu size={21} strokeWidth={1.5} />}
        </button>
        <div ref={panelRef} id="primary-links" className={`nav-links${open ? " is-open" : ""}`}>
          <p className="mobile-menu-kicker">A little care. A lasting difference.</p>
          {links.map((link, index) => (
            <a ref={index === 0 ? firstLinkRef : undefined} href={link.href} key={link.href} onClick={closeMenu} style={{ "--menu-order": index } as CSSProperties}>
              <span className="mobile-link-number">0{index + 1}</span>
              <span>{link.label}</span>
              <ArrowUpRight className="mobile-link-arrow" size={22} strokeWidth={1.2} aria-hidden="true" />
            </a>
          ))}
          <div className="mobile-menu-footer">
            <span>Compassion in action.<br /><em>Rooted in Kerala.</em></span>
            <a href="mailto:jeevodayam@gmail.com" onClick={closeMenu}>jeevodayam@gmail.com <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
      </nav>
    </header>
  );
}
