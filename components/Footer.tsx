'use client';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap footer__grid">
        {/* Brand */}
        <div className="footer__brand">
          <a href="#top" className="logo logo--light" aria-label="Load N-GO home"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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
          <p>Modern laundry made simple in Pico Rivera. Reloadable card &amp; coin, wash &amp; fold, open every day.</p>
          <div className="footer__social">
            <a href="https://www.instagram.com/load_n_go_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="3.6" />
                <circle cx="17" cy="7" r="0.8" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@load_n_go" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 3c.4 2.6 2 4.2 4.6 4.5v3c-1.7 0-3.3-.5-4.6-1.4v6.1A5.6 5.6 0 1 1 8.4 9.6v3.1a2.6 2.6 0 1 0 2.6 2.6V3H14z" />
              </svg>
            </a>
            <a href="https://x.com/GoLoad95927" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l16 16M4 20L20 4" />
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCRjLI4Q_pne7__Wlq3HQwXQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5.5" width="20" height="13" rx="4" />
                <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://share.google/FxqLWCuyUujr25M4p" target="_blank" rel="noopener noreferrer" aria-label="Google Business">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.24c0-.67-.06-1.32-.17-1.94H12v3.67h5.04a4.3 4.3 0 0 1-1.87 2.82v2.34h3.02C20.12 17.55 21 15.08 21 12.24z" />
                <path d="M12 21c2.54 0 4.67-.84 6.23-2.27l-3.02-2.34c-.84.56-1.92.9-3.21.9-2.46 0-4.55-1.66-5.29-3.9H3.6v2.41A9 9 0 0 0 12 21z" />
                <path d="M6.71 13.39A5.4 5.4 0 0 1 6.43 12c0-.48.08-.94.28-1.39V8.2H3.6A9 9 0 0 0 3 12c0 1.45.35 2.82.96 4.03l3.75-2.64z" />
                <path d="M12 6.58c1.39 0 2.63.48 3.61 1.42l2.7-2.7C16.66 3.74 14.53 3 12 3A9 9 0 0 0 3.6 8.2l3.11 2.41C7.45 8.24 9.54 6.58 12 6.58z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Visit */}
        <div className="footer__col">
          <h4>Visit</h4>
          <p>4621 Rosemead Blvd<br />Pico Rivera, CA 90660</p>
          <a href="tel:5624540101">562-454-0101</a>
        </div>

        {/* Hours */}
        <div className="footer__col">
          <h4>Hours</h4>
          <p>Open every day<br />6AM–10PM<br />Last wash 8:30 PM</p>
        </div>

        {/* Explore */}
        <div className="footer__col">
          <h4>Explore</h4>
          <a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}>How It Works</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}>Services</a>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' }); }}>Pricing</a>
          <a href="https://app.trycents.com/new-order/Yzdr/home" target="_blank" rel="noopener noreferrer">Order Wash &amp; Fold</a>
        </div>
      </div>

      <div className="wrap footer__base">
        <span>© {new Date().getFullYear()} Load N-GO · 4621 Rosemead Blvd, Pico Rivera, CA 90660</span>
        <span>
          <a href="/privacy" className="footer__legal-link">Privacy Notice</a>
          &nbsp;·&nbsp;@load_n_go_ · load-n-go.biz
        </span>
      </div>
    </footer>
  );
}
