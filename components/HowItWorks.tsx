export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Getting Started</span>
          <h2 className="h2">How It Works</h2>
          <p className="lead">Four simple steps to a seamless laundry experience.</p>
        </div>

        <ol className="steps">
          <li className="step reveal">
            <span className="step__num">01</span>
            <span className="ibadge ibadge--solid">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="5" width="19" height="14" rx="2.5" /><path d="M2.5 9.5h19" />
              </svg>
            </span>
            <h3 className="step__title">Get Your Card</h3>
            <p className="muted step__text">Purchase a Load N-GO card at our Value Add Center. It&apos;s reusable and reloadable.</p>
          </li>
          <li className="step reveal">
            <span className="step__num">02</span>
            <span className="ibadge ibadge--solid">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="2.5" width="12" height="19" rx="2.5" /><path d="M11 18.5h2" />
              </svg>
            </span>
            <h3 className="step__title">Load Value</h3>
            <p className="muted step__text">Add funds to your card at the Value Add Center using cash or card payment.</p>
          </li>
          <li className="step reveal">
            <span className="step__num">03</span>
            <span className="ibadge ibadge--solid">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3L12 3zM18.5 14l.9 2.3 2.1.7-2.1.8-.9 2.2-.9-2.2-2.1-.8 2.1-.7.9-2.3z" />
              </svg>
            </span>
            <h3 className="step__title">Start Your Wash</h3>
            <p className="muted step__text">Tap your card on the reader of any washer or dryer to start your cycle.</p>
          </li>
          <li className="step reveal">
            <span className="step__num">04</span>
            <span className="ibadge ibadge--solid">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 11a8 8 0 0 0-14-4.5L4 8" /><path d="M4 4v4h4" />
                <path d="M4 13a8 8 0 0 0 14 4.5L20 16" /><path d="M20 20v-4h-4" />
              </svg>
            </span>
            <h3 className="step__title">Reload Anytime</h3>
            <p className="muted step__text">When your balance runs low, simply reload your card and keep going.</p>
          </li>
        </ol>

        <div className="callouts">
          <div className="callout callout--green reveal">
            <span className="callout__ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3.5" y="9" width="17" height="12" rx="1.5" /><path d="M3.5 13h17M12 9v12" />
                <path d="M12 9S10.5 4 8 5s1 4 4 4zM12 9s1.5-5 4-4-1 4-4 4z" />
              </svg>
            </span>
            <div>
              <h3 className="callout__title">Special Bonus</h3>
              <p className="callout__big">Load $20 and get <strong>$3 FREE</strong></p>
              <p className="callout__sub">Automatically added when you load $20 or more through the card system.</p>
            </div>
          </div>
          <div className="callout callout--blue reveal">
            <span className="callout__ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="5" width="19" height="14" rx="2.5" /><path d="M2.5 9.5h19" />
              </svg>
            </span>
            <div>
              <h3 className="callout__title">Important Reminder</h3>
              <p className="callout__big">Treat your card as cash</p>
              <p className="callout__sub">Load N-GO is not responsible for lost or stolen cards — don&apos;t throw it away!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
