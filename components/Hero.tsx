'use client';

export default function Hero() {
  const handleLink = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="hero" id="top">
      {/* Decorative background bubbles */}
      <div className="hero__bg" aria-hidden="true">
        <span className="bubble b1" />
        <span className="bubble b2" />
        <span className="bubble b3" />
        <span className="bubble b4" />
        <span className="bubble b5" />
      </div>

      <div className="wrap hero__grid">
        {/* ── Copy ── */}
        <div className="hero__copy">
          <span className="hero__eyebrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3L12 3zM18.5 14l.9 2.3 2.1.7-2.1.8-.9 2.2-.9-2.2-2.1-.8 2.1-.7.9-2.3z" />
            </svg>
            Reusable &amp; Reloadable Laundry Card
          </span>

          <h1 className="h-display h1 hero__title">
            Modern Laundry<br />Made Simple
          </h1>

          <p className="hero__lead">
            Hassle-free laundry with flexible payment. Tap our reloadable card or drop
            in coins — wash, dry, and fold in a clean, modern facility built for your day.
          </p>

          <div className="hero__cta">
            <a href="https://app.trycents.com/new-order/Yzdr/home" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
              Order Wash &amp; Fold
              <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#location"
              className="btn btn--ghost btn--lg"
              onClick={(e) => { e.preventDefault(); handleLink('#location'); }}
            >
              Visit Us Today
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s7-6.4 7-12a7 7 0 0 0-14 0c0 5.6 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.6" />
              </svg>
            </a>
          </div>

          <div className="hero__stats">
            <div><strong>6AM–10PM</strong><span>Open Daily</span></div>
            <div><strong>Modern</strong><span>Equipment</span></div>
            <div><strong>Card &amp; Coin</strong><span>Payment Options</span></div>
          </div>
        </div>

        {/* ── Visual ── */}
        <div className="hero__visual">
          {/* Reloadable card */}
          <div className="lcard">
            <div className="lcard__top">
              <span>Reusable + Reloadable Laundry Card</span>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M5 12a4 4 0 0 1 7 0M2.5 9a8 8 0 0 1 12 0M8 15h.01" />
              </svg>
            </div>

            <div className="lcard__logo">
              <span className="lcard__mark">
                <svg viewBox="0 0 40 40" fill="none">
                  <rect x="2" y="2" width="36" height="36" rx="11" fill="var(--primary)" />
                  <circle cx="20" cy="22" r="9.5" fill="none" stroke="#fff" strokeWidth="2.4" />
                  <circle cx="20" cy="22" r="4" fill="#fff" />
                </svg>
              </span>
              <span className="lcard__type">
                <em>Load</em>
                <b>N-GO</b>
              </span>
            </div>

            <div className="lcard__addr">4621 Rosemead Blvd, Pico Rivera, CA 90660</div>
            <div className="lcard__note">TREAT THIS CARD AS CASH — DO NOT THROW AWAY</div>
          </div>

          {/* Location pill */}
          <div className="hero__locpill">
            <span className="hero__locpill-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s7-6.4 7-12a7 7 0 0 0-14 0c0 5.6 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.6" />
              </svg>
            </span>
            <div>
              <strong>Location</strong>
              <span>4621 Rosemead Blvd<br />Pico Rivera, CA 90660</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
