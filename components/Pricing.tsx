export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Special Offer</span>
          <h2 className="h2">Simple, Honest Pricing</h2>
          <p className="lead">Wash &amp; fold by the pound — washed, dried, and neatly folded for you.</p>
        </div>

        <div className="price-layout">
          <div className="price-cards">
            {/* Standard */}
            <div className="price-card reveal">
              <h3 className="h3">Wash &amp; Fold</h3>
              <p className="price-card__amt">
                <span className="price-card__cur">$</span>1.99<span className="price-card__unit">/lb</span>
              </p>
              <p className="muted">Clothes washed, dried, and neatly folded.</p>
              <ul className="price-card__list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 6.5" /></svg>
                  Washed, dried &amp; folded
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 6.5" /></svg>
                  Sorted by color &amp; fabric
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 6.5" /></svg>
                  20 lb minimum
                </li>
              </ul>
              <a href="https://app.trycents.com/new-order/Yzdr/home" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                Order this
                <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>

            {/* Same-day */}
            <div className="price-card price-card--pop reveal">
              <span className="price-card__flag">Most Popular</span>
              <h3 className="h3">Same-Day Service</h3>
              <p className="price-card__amt">
                <span className="price-card__cur">$</span>2.50<span className="price-card__unit">/lb</span>
              </p>
              <p className="muted">Drop off in the morning, pick up the same day.</p>
              <ul className="price-card__list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 6.5" /></svg>
                  Washed, dried &amp; folded
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 6.5" /></svg>
                  Sorted by color &amp; fabric
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 6.5" /></svg>
                  20 lb minimum
                </li>
              </ul>
              <a href="https://app.trycents.com/new-order/Yzdr/home" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                Order this
                <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>
          </div>

          {/* Offer */}
          <aside className="offer reveal">
            <span className="offer__badge">50% OFF</span>
            <h3 className="offer__title">First Order, On Us</h3>
            <p className="offer__sub">New customers get <strong>50% off</strong> their very first wash &amp; fold order. We apply it automatically.</p>
            <div className="offer__fine">*Minimum 20 lbs required for wash &amp; fold service.</div>
            <a href="https://app.trycents.com/new-order/Yzdr/home" target="_blank" rel="noopener noreferrer" className="btn btn--ink btn--lg">
              Claim My 50%
              <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
