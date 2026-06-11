export default function WhyChooseUs() {
  return (
    <section className="section section--soft" id="about">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Why Load N-GO</span>
          <h2 className="h2">Why Choose Load N-GO?</h2>
          <p className="lead">We&apos;ve reimagined the laundromat with modern technology and customer-first service.</p>
        </div>
        <div className="why-grid">
          <article className="why-card reveal">
            <span className="ibadge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" />
              </svg>
            </span>
            <h3 className="h3">Secure &amp; Reliable</h3>
            <p className="muted">Your reloadable card is protected and easily replaced if lost. Treat it like cash.</p>
          </article>
          <article className="why-card reveal">
            <span className="ibadge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />
              </svg>
            </span>
            <h3 className="h3">Convenient Hours</h3>
            <p className="muted">Open 6 AM to 10 PM daily. Do your laundry on your schedule, every day of the week.</p>
          </article>
          <article className="why-card reveal">
            <span className="ibadge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
              </svg>
            </span>
            <h3 className="h3">Fast &amp; Efficient</h3>
            <p className="muted">Modern high-speed washers and dryers that save you time and get your clothes spotless.</p>
          </article>
          <article className="why-card reveal">
            <span className="ibadge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18V6l11-2v12" /><circle cx="6" cy="18" r="3" /><circle cx="17" cy="16" r="3" />
              </svg>
            </span>
            <h3 className="h3">Relaxing Atmosphere</h3>
            <p className="muted">Enjoy music while you wait in our clean, well-maintained facility with comfortable seating.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
