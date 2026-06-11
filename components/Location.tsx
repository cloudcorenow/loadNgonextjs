export default function Location() {
  return (
    <section className="section" id="location">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Find Us</span>
          <h2 className="h2">Visit Load N-GO</h2>
          <p className="lead">Free parking, open every day. Come do laundry the easy way.</p>
        </div>

        <div className="loc-grid">
          <div className="loc-info reveal">
            <div className="loc-row">
              <span className="ibadge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s7-6.4 7-12a7 7 0 0 0-14 0c0 5.6 7 12 7 12z" /><circle cx="12" cy="9" r="2.6" />
                </svg>
              </span>
              <div>
                <strong>Address</strong>
                <p className="muted">4621 Rosemead Blvd<br />Pico Rivera, CA 90660</p>
              </div>
            </div>
            <div className="loc-row">
              <span className="ibadge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />
                </svg>
              </span>
              <div>
                <strong>Hours</strong>
                <p className="muted">6AM–10PM every day<br />Last wash 8:30 PM</p>
              </div>
            </div>
            <div className="loc-row">
              <span className="ibadge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5L15.5 11l4 1.5v3a2 2 0 0 1-2 2A14.5 14.5 0 0 1 4.5 5a2 2 0 0 1 2-2z" />
                </svg>
              </span>
              <div>
                <strong>Call Us</strong>
                <p className="muted"><a href="tel:5624540101" className="loc-link">562-454-0101</a></p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=4621+Rosemead+Blvd+Pico+Rivera+CA+90660"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Get Directions
              <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          <div className="loc-map reveal">
            <iframe
              title="Load N-GO Laundry location"
              src="https://maps.google.com/maps?q=4621+Rosemead+Blvd,+Pico+Rivera,+CA+90660&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 'var(--r-lg)', minHeight: '340px', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
