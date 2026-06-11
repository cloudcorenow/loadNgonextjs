export default function Services() {
  return (
    <section className="section section--soft" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">What We Offer</span>
          <h2 className="h2">Our Services</h2>
          <p className="lead">Modern equipment and amenities to make your laundry day easier.</p>
        </div>

        {/* Featured wash & fold */}
        <div className="svc-feature card reveal">
          <span className="ibadge ibadge--solid">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2.5" y="6" width="12" height="9" rx="1" />
              <path d="M14.5 9h3.5l3 3v3h-6.5" />
              <circle cx="7" cy="17.5" r="1.8" /><circle cx="17.5" cy="17.5" r="1.8" />
            </svg>
          </span>
          <div className="svc-feature__body">
            <div className="svc-feature__head">
              <h3 className="h3">Wash &amp; Fold Service</h3>
              <div className="chips"><span className="chip">Drop-Off</span><span className="chip">Full Service</span></div>
            </div>
            <p className="muted">Drop off your laundry and let us handle the washing, drying, and folding. Perfect for busy schedules — with same-day service available.</p>
          </div>
          <a href="https://app.trycents.com/new-order/Yzdr/home" target="_blank" rel="noopener noreferrer" className="btn btn--primary svc-feature__cta">
            Click to Order
            <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        {/* Service grid */}
        <div className="svc-grid">
          <article className="svc-card card reveal">
            <span className="ibadge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="3" width="16" height="18" rx="2.5" />
                <circle cx="12" cy="13" r="4.2" />
                <circle cx="8" cy="6.5" r="0.6" fill="currentColor" />
                <circle cx="11" cy="6.5" r="0.6" fill="currentColor" />
              </svg>
            </span>
            <div className="svc-card__head">
              <h3 className="h3">Touchscreen Washers</h3>
              <div className="chips"><span className="chip">2 Loads</span><span className="chip">4 Loads</span><span className="chip">6 Loads</span><span className="chip">8 Loads</span></div>
            </div>
            <p className="muted">Modern washers with intuitive touchscreen controls. Multiple sizes handle any load — from everyday laundry to bulky comforters.</p>
          </article>
          <article className="svc-card card reveal">
            <span className="ibadge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h11a2.5 2.5 0 1 0-2.5-2.5" />
                <path d="M3 12h15a2.5 2.5 0 1 1-2.5 2.5" />
                <path d="M3 16h8a2.5 2.5 0 1 1-2.5 2.5" />
              </svg>
            </span>
            <div className="svc-card__head">
              <h3 className="h3">High-Efficiency Dryers</h3>
              <div className="chips"><span className="chip">39 Units</span><span className="chip">30 lb Capacity</span></div>
            </div>
            <p className="muted">39 powerful 30-pound capacity dryers that get your laundry dry quickly while staying gentle on fabrics.</p>
          </article>
          <article className="svc-card card reveal">
            <span className="ibadge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="9" cy="7" rx="6" ry="3" />
                <path d="M3 7v5c0 1.7 2.7 3 6 3" />
                <ellipse cx="15" cy="14" rx="6" ry="3" />
                <path d="M9 14.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
              </svg>
            </span>
            <div className="svc-card__head">
              <h3 className="h3">Flexible Payment</h3>
              <div className="chips"><span className="chip">Card</span><span className="chip">Coin</span></div>
            </div>
            <p className="muted">Pay your way with our convenient reloadable card system or traditional coin payment.</p>
          </article>
          <article className="svc-card card reveal">
            <span className="ibadge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3s6 6.3 6 10.5A6 6 0 0 1 6 13.5C6 9.3 12 3 12 3z" />
              </svg>
            </span>
            <div className="svc-card__head">
              <h3 className="h3">Detergent Available</h3>
              <div className="chips"><span className="chip">For Purchase</span></div>
            </div>
            <p className="muted">Forgot your detergent? We stock quality detergent and fabric softener on-site.</p>
          </article>
          <article className="svc-card card reveal">
            <span className="ibadge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="12" rx="2" />
                <path d="M8 20h8M12 16v4" />
              </svg>
            </span>
            <div className="svc-card__head">
              <h3 className="h3">Touchscreen Technology</h3>
              <div className="chips"><span className="chip">Easy to Use</span></div>
            </div>
            <p className="muted">Modern touchscreen interfaces on every washer make selecting cycles simple and straightforward.</p>
          </article>
          <article className="svc-card card reveal">
            <span className="ibadge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3L12 3zM18.5 14l.9 2.3 2.1.7-2.1.8-.9 2.2-.9-2.2-2.1-.8 2.1-.7.9-2.3z" />
              </svg>
            </span>
            <div className="svc-card__head">
              <h3 className="h3">Clean Facility</h3>
              <div className="chips"><span className="chip">Always Maintained</span></div>
            </div>
            <p className="muted">Our facility is cleaned and maintained throughout the day to ensure a pleasant experience.</p>
          </article>
        </div>

        {/* Stats */}
        <div className="stat-row">
          <div className="stat-card reveal">
            <span className="stat-card__label">Washer Sizes</span>
            <span className="stat-card__value">4</span>
            <span className="stat-card__note">2, 4, 6, and 8 loads</span>
          </div>
          <div className="stat-card reveal">
            <span className="stat-card__label">Dryers</span>
            <span className="stat-card__value">39</span>
            <span className="stat-card__note">30 lb capacity units</span>
          </div>
          <div className="stat-card reveal">
            <span className="stat-card__label">Open Daily</span>
            <span className="stat-card__value">6AM–10PM</span>
            <span className="stat-card__note">Last wash at 8:30 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
