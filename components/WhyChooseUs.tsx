const serviceCards = [
  {
    title: 'SELF-SERVICE LAUNDRY',
    image: 'https://images.pexels.com/photos/10344208/pexels-photo-10344208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Wash at your own pace with our modern, high-capacity machines. Enjoy a clean space, large folding areas, and free Wi-Fi while you do your laundry.',
  },
  {
    title: 'WASH & FOLD',
    image: 'https://images.pexels.com/photos/4959878/pexels-photo-4959878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Let our team handle your laundry from start to finish. Drop off your clothes and pick them up professionally washed, dried, and neatly folded.',
  },
  {
    title: 'COMMERCIAL LAUNDRY',
    image: 'https://images.pexels.com/photos/12932367/pexels-photo-12932367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Reliable laundry services for local businesses. We keep your towels, tablecloths, sheets, and uniforms clean and ready for everyday use, so your business runs smoothly.',
  },
  {
    title: 'WASH, DRY AND GO',
    image: 'https://images.pexels.com/photos/8774371/pexels-photo-8774371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
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
