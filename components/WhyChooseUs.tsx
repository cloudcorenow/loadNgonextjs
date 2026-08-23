const serviceCards = [
  {
    title: 'SELF-SERVICE LAUNDRY',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=900&q=85',
    description: 'Wash at your own pace with our modern, high-capacity machines. Enjoy a clean space, large folding areas, and free Wi-Fi while you do your laundry.',
  },
  {
    title: 'WASH & FOLD',
    image: 'https://images.unsplash.com/photo-1610557892470-a9f7d2a8c2a4?auto=format&fit=crop&w=900&q=85',
    description: 'Let our team handle your laundry from start to finish. Drop off your clothes and pick them up professionally washed, dried, and neatly folded.',
  },
  {
    title: 'COMMERCIAL LAUNDRY',
    image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=900&q=85',
    description: 'Reliable laundry services for local businesses. We keep your towels, tablecloths, sheets, and uniforms clean and ready for everyday use, so your business runs smoothly.',
  },
  {
    title: 'WASH, DRY AND GO',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=900&q=85',
    description: 'Short on time? Drop off your laundry and we’ll take care of the rest. We wash, dry, and notify you when your order is ready for quick and easy pickup.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section section--services" id="about">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Laundry Made Simple</span>
          <h2 className="h2">Find the service that fits your day.</h2>
          <p className="lead">From a quick self-service wash to full-service care, Load N-GO makes laundry feel effortless.</p>
        </div>
        <div className="service-choice-grid">
          {serviceCards.map((service) => (
            <article className="service-choice-card reveal" key={service.title}>
              <div className="service-choice-card__image-wrap">
                <img src={service.image} alt={service.title.toLowerCase()} className="service-choice-card__image" loading="lazy" />
              </div>
              <div className="service-choice-card__content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#services" className="service-choice-card__link">
                  Learn more
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
