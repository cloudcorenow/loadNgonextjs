'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setSheetOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ' nav--top'}`}>
      <div className="wrap nav__inner">
        {/* Logo */}
        <a
          href={isHome ? '#top' : '/'}
          className={`logo${scrolled ? '' : ' logo--light'}`}
          aria-label="Load N-GO home"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <span className="logo__mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none">
              <rect className="lm-bg" x="2" y="2" width="36" height="36" rx="11" />
              <circle className="lm-ring" cx="20" cy="22" r="9.5" />
              <circle className="lm-dot" cx="20" cy="22" r="4" />
              <circle className="lm-bub" cx="13" cy="11" r="1.5" />
              <circle className="lm-bub" cx="18" cy="9.5" r="1.1" />
            </svg>
          </span>
          <span className="logo__type">
            <span className="logo__load">Load</span>
            <span className="logo__go">N-GO</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="nav__links">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav__link"
              onClick={(e) => { e.preventDefault(); handleLink(l.href); }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a href="https://app.trycents.com/new-order/Yzdr/home" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm nav__cta">
          Order Wash &amp; Fold
        </a>

        {/* Mobile burger */}
        <button
          className="nav__burger"
          aria-label={sheetOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setSheetOpen(!sheetOpen)}
        >
          {sheetOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile sheet */}
      <div className={`nav__sheet${sheetOpen ? ' show' : ''}`}>
        {navLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="nav__sheet-link"
            onClick={(e) => { e.preventDefault(); handleLink(l.href); }}
          >
            {l.label}
          </a>
        ))}
        <a href="https://app.trycents.com/new-order/Yzdr/home" target="_blank" rel="noopener noreferrer" className="btn btn--primary nav__sheet-cta">
          Order Wash &amp; Fold
        </a>
      </div>
    </nav>
  );
}
