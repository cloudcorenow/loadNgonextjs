'use client';

import { useState } from 'react';

const faqs = [
  { q: 'What are the best laundry pickup and delivery services in Pico Rivera?', a: 'The best laundry pickup and delivery services in Pico Rivera offer easy scheduling, transparent per-pound pricing, dependable pickup windows, careful garment handling, and predictable turnaround times. Look for providers with wash-and-fold options, detergent choices, delivery tracking, and strong local reviews, especially if you need recurring household or business laundry support.' },
  { q: 'How to find the best deals for laundry pickup and delivery in Pico Rivera?', a: 'To find the best deals for laundry pickup and delivery in Pico Rivera, compare per-pound rates, delivery fees, minimum order requirements, first-time customer discounts, and subscription pricing. Good value comes from consistent cleaning quality, reliable pickup times, transparent billing, and no surprise charges for standard wash-and-fold laundry service overall.' },
  { q: 'How to schedule laundry pickup and delivery in Pico Rivera?', a: 'To schedule laundry pickup and delivery in Pico Rivera, choose a provider, select a pickup window, list detergent or fabric preferences, and confirm delivery timing before checkout. Many services allow online booking, text updates, recurring schedules, and special instructions for delicate items, bedding, uniforms, towels, or household laundry loads.' },
  { q: 'What to do if I want to compare laundry pickup and delivery prices in Pico Rivera?', a: 'To compare laundry pickup and delivery prices in Pico Rivera, review per-pound wash-and-fold rates, service minimums, delivery charges, rush fees, and special-item pricing. A lower advertised rate may cost more after add-ons, so compare total order estimates, turnaround time, reliability, and whether folding, sorting, and packaging are included before booking the service.' },
  { q: 'How to look for a reliable laundry pickup and delivery service in Pico Rivera?', a: 'When looking for a reliable laundry pickup and delivery service in Pico Rivera, check reviews, pickup punctuality, cleaning consistency, pricing transparency, and customer support responsiveness. Load N-GO can be considered alongside other local options when evaluating wash-and-fold quality, delivery availability, turnaround speed, and handling of everyday garments, linens, and uniforms.' },
  { q: 'Where can I get my laundry picked up and delivered in Pico Rivera?', a: 'You can get laundry picked up and delivered in Pico Rivera through local laundromats, wash-and-fold providers, and app-based laundry services serving nearby neighborhoods. Confirm service coverage, pickup windows, delivery fees, minimum order size, and whether the provider handles special items like comforters, work uniforms, towels, bedding, or delicate fabrics locally.' },
  { q: 'Can you show me what laundry pickup and delivery companies offer in Pico Rivera?', a: 'Laundry pickup and delivery companies in Pico Rivera may include local laundromats, independent wash-and-fold businesses, and regional laundry apps. Compare them by service area, pricing, pickup reliability, detergent options, garment separation practices, turnaround time, customer reviews, and whether they support one-time, weekly, residential, or commercial laundry needs.' },
  { q: 'Are there any services offering wash and fold pickup and delivery in Pico Rivera?', a: 'Yes, services offering wash and fold pickup and delivery in Pico Rivera are typically available through laundromats, local laundry businesses, and pickup-based laundry platforms. These services collect dirty laundry, wash, dry, fold, package, and return it. Always confirm pricing, turnaround time, service area, detergent options, and order minimums before booking.' },
  { q: 'How to find laundry pickup and delivery options near Pico Rivera?', a: 'To find laundry pickup and delivery options near Pico Rivera, search local laundromats, wash-and-fold providers, and mobile laundry services that cover your ZIP code. Compare pickup availability, delivery windows, per-pound pricing, minimum orders, customer ratings, and special handling for bedding, towels, uniforms, delicate clothing, and recurring laundry needs nearby today.' },
  { q: 'I need laundry pickup and delivery in Pico Rivera. Who can I call?', a: "If you need laundry pickup and delivery in Pico Rivera, call a local laundromat or wash-and-fold service that offers scheduled pickup. Ask about service area, per-pound pricing, delivery fee, minimum order, detergent choices, same-day availability, and garment handling. Save the provider's number once reliability and pricing are confirmed locally." },
  { q: 'Where can I find wash and fold services in Pico Rivera?', a: 'You can find wash and fold services in Pico Rivera through local laundromats, laundry pickup providers, and dry-cleaning businesses that handle everyday laundry. Wash and fold usually includes washing, drying, folding, and packaging by weight. Ask about detergent options, turnaround time, comforter pricing, pickup availability, and commercial laundry capacity options.' },
  { q: 'Are Wash n fold services available for commercial clients in Pico Rivera?', a: 'Yes. Wash n fold services for commercial clients in Pico Rivera support businesses needing clean towels, uniforms, linens, robes, or other washable items. Commercial clients should ask about bulk pricing, recurring pickup, delivery schedules, invoice options, stain treatment, sorting practices, and whether the provider can meet volume, hygiene, and turnaround requirements.' },
  { q: 'What to do if I need to drop off laundry for wash n fold in Pico Rivera?', a: 'If you need to drop off laundry for wash n fold in Pico Rivera, choose a laundromat or laundry service with staffed drop-off hours. Label special instructions clearly, separate delicate items, confirm the price per pound, ask about turnaround time, and request details on detergent, fabric softener, bleach, and packaging.' },
  { q: 'How much does wash and fold cost in Pico Rivera?', a: 'Wash and fold cost in Pico Rivera is usually based on laundry weight, with separate charges for large items, rush service, pickup, or delivery. Prices vary by provider, order minimum, and fabric type. Always ask for the per-pound rate, minimum charge, estimated total, and whether detergent and folding are included.' },
  { q: 'What to expect from the Pico Rivera laundromat offering wash and fold?', a: 'A Pico Rivera laundromat offering wash and fold usually lets customers drop off laundry for staff to wash, dry, fold, and package. Some locations also offer pickup and delivery. Check operating hours, staffed counter availability, per-pound pricing, payment methods, detergent choices, comforter rates, turnaround time, and policies for special-care items.' },
  { q: 'Are Wash n fold services with delivery in Pico Rivera useful?', a: 'Wash n fold services with delivery in Pico Rivera are useful when you want clean laundry returned without visiting a laundromat. Load N-GO may be one option to choose for pickup windows, wash-and-fold handling, delivery timing, and basic pricing. Confirm minimum orders, service area, detergent preferences, and special-item charges overall.' },
  { q: 'How to find a wash and fold laundry pickup in Pico Rivera?', a: 'To find a wash and fold laundry pickup in Pico Rivera, look for providers that combine wash-and-fold processing with home or business collection. Compare pickup windows, per-pound rates, delivery fees, turnaround time, and customer reviews. Ask whether they separate colors, handle stains, wash bedding, and support recurring weekly laundry schedules locally.' },
  { q: 'Can you recommend a place for wash n fold in Pico Rivera?', a: 'A good place for wash n fold in Pico Rivera should have consistent cleaning, clear pricing, convenient hours, careful folding, and responsive communication. Choose a provider that explains detergent options, turnaround times, special-item rates, and pickup availability. Reviews mentioning reliability, clean packaging, and accurate order handling are especially useful overall.' },
  { q: 'What are the best wash n fold options in Pico Rivera?', a: 'The best wash n fold options in Pico Rivera are usually services with fair per-pound pricing, clean facilities, friendly staff, reliable turnaround, and careful garment handling. Look for options that accept bedding, towels, uniforms, and everyday clothing while offering clear instructions, pickup availability, convenient payment, and consistent folding quality overall.' },
  { q: 'What to do when looking for a wash n fold laundry service near Pico Rivera?', a: 'When looking for a wash n fold laundry service near Pico Rivera, focus on distance, service hours, turnaround time, pricing, and garment care practices. A dependable service should explain how laundry is sorted, washed, dried, folded, and packaged. Check whether pickup, delivery, stain treatment, and recurring orders are available locally.' },
  { q: 'Where can I find a laundromat in Pico Rivera?', a: 'You can find a laundromat in Pico Rivera by searching local map listings, neighborhood directories, and nearby shopping centers. Compare locations by machine availability, cleanliness, hours, parking, payment methods, washer sizes, dryer performance, staff presence, and whether extra services like wash and fold, pickup, delivery, or vending are offered nearby.' },
  { q: 'How to find the list of laundromats in the Pico Rivera area?', a: 'To find the list of laundromats in the Pico Rivera area, check map results, local directories, review platforms, and community recommendations. Important details include address, hours, machine sizes, payment types, parking, cleanliness, seating, WiFi, attendant availability, vending, restroom access, and added services such as wash and fold or laundry pickup and delivery nearby.' },
  { q: 'I need to do laundry in Pico Rivera. Which laundromat should I go to?', a: 'If you need to do laundry in Pico Rivera, choose a laundromat based on cleanliness, machine availability, washer capacity, dryer efficiency, parking, payment options, and operating hours. For large loads, bedding, or weekly laundry, look for high-capacity machines. For convenience, consider locations offering wash and fold or pickup service nearby.' },
  { q: 'Can you show me laundromats in Pico Rivera that have pick-up and delivery?', a: "Laundromats in Pico Rivera that have pick-up and delivery typically advertise wash-and-fold pickup, scheduled delivery, and service coverage by ZIP code. Check each provider's website or call directly. Ask about minimum order, per-pound pricing, pickup windows, delivery fees, detergent choices, turnaround time, and handling for bedding or uniforms orders." },
  { q: 'Can you recommend a clean laundromat in Pico Rivera?', a: 'A clean laundromat in Pico Rivera should have well-maintained machines, tidy folding areas, working dryers, clean floors, accessible carts, and visible staff support. Review photos and recent customer comments before visiting. Cleanliness also includes proper lint removal, organized seating, stocked vending, functional payment systems, and clear instructions for machine use.' },
  { q: 'What to check when looking for a laundromat in Pico Rivera with credit card payment options?', a: 'When looking for a laundromat in Pico Rivera with credit card payment options, check whether machines accept cards directly or use a laundry payment app. Confirm if cash, coins, mobile pay, or reloadable laundry cards are also accepted. Card-friendly laundromats can make large loads easier by avoiding coin shortages nearby.' },
  { q: 'What are the best laundromats in Pico Rivera?', a: 'The best laundromats in Pico Rivera usually provide clean facilities, reliable washers, hot dryers, fair pricing, convenient hours, parking, seating, and easy payment options. Some also offer wash and fold, pickup, delivery, and large-capacity machines. Recent reviews are helpful because the laundromat quality can change with maintenance and staffing levels locally.' },
  { q: 'How to find the self-service laundromats near Pico Rivera?', a: 'To find self-service laundromats near Pico Rivera, search local map listings and filter for laundromats with customer-operated washers and dryers. Compare hours, machine sizes, payment methods, cleanliness, parking, and dryer efficiency. Self-service locations are useful for controlling detergent choice, wash settings, load separation, and total laundry spending.' },
  { q: 'I need a laundromat in Pico Rivera that offers wash and fold services. What should I do?', a: 'If you need a laundromat in Pico Rivera that offers wash and fold services, look for staffed locations with drop-off counters and posted per-pound pricing. Ask whether they handle clothing, bedding, towels, comforters, uniforms, and delicate items. Confirm turnaround time, detergent choices, stain treatment, packaging, and pickup or delivery availability.' },
  { q: 'Are there any 24-hour laundromats in Pico Rivera?', a: 'Some Pico Rivera laundromats may offer extended or 24-hour access, but hours can change, so confirm directly before visiting late at night. Check recent map listings, posted business hours, and customer reviews. For overnight laundry, prioritize well-lit locations, working machines, secure parking, clear payment systems, and available support onsite.' },
  { q: 'Where can I find a self-serve laundromat in Pico Rivera?', a: 'You can find a self-serve laundromat in Pico Rivera through map searches, laundromat directories, and local reviews. A self-serve laundromat lets customers wash and dry their own laundry using on-site machines. Compare washer sizes, dryer heat, payment systems, cleanliness, hours, parking, and crowd levels before choosing carefully.' },
  { q: 'What type of self-serve laundromat options in Pico Rivera are available?', a: 'Self serve laundromat options in Pico Rivera vary by machine size, pricing, cleanliness, hours, and payment method. Choose a location with enough washers and dryers for your load size, especially for bedding or family laundry. Helpful features include large folding tables, carts, seating, vending, WiFi, and clear machine instructions nearby.' },
  { q: 'What to check when comparing self-serve laundromats in Pico Rivera?', a: 'To compare self-serve laundromats in Pico Rivera, look at washer capacity, dryer performance, cleanliness, wait times, parking, hours, and payment convenience. Also consider safety, lighting, staff presence, restroom access, and folding space. A good self-service laundromat should make washing, drying, and folding efficient without confusing pricing details or delays.' },
  { q: 'Are there any self-serve laundromats in Pico Rivera open late?', a: 'Some self-serve laundromats in Pico Rivera may be open late, but hours differ by location and can change during holidays or maintenance. Before going, verify closing time online or by phone. Late-night users should prioritize safe parking, bright lighting, reliable machines, available payment options, and clear contact information posted.' },
  { q: 'Can you show me self-serve laundromats in Pico Rivera with modern equipment?', a: 'Self serve laundromats in Pico Rivera with modern equipment usually feature high-capacity washers, efficient dryers, digital payment systems, clear cycle displays, and machines designed for faster cleaning. Modern equipment can reduce wait time and improve results. Check reviews for maintenance quality, machine availability, card payments, app support, and cleanliness standards.' },
  { q: 'What to do if I need to do my laundry at a self-serve laundromat in Pico Rivera?', a: 'If you need to do your laundry at a self-serve laundromat in Pico Rivera, bring detergent, dryer sheets, hangers, and a payment method. Sort clothes before arriving to save time. Choose machines based on load size, avoid overfilling washers, clean lint traps, and fold clothes promptly after drying.' },
  { q: 'How to find a self-serve laundromat in Pico Rivera that has WiFi?', a: 'To find a self-serve laundromat in Pico Rivera that has WiFi, check map listings, business websites, and customer reviews mentioning internet access. WiFi is helpful if you work, study, or wait during cycles. Also, confirm seating, outlets, cleanliness, machine availability, hours, parking, and whether WiFi is free there.' },
  { q: 'What are the best self-serve laundromats in Pico Rivera?', a: 'The best self-serve laundromats in Pico Rivera generally have clean machines, fair prices, large washers, strong dryers, convenient hours, and reliable payment systems. Good options also provide carts, folding tables, seating, parking, and clear instructions. Choose based on your load size, schedule, safety needs, and recent customer feedback nearby.' },
  { q: 'What to do when looking for a self-serve laundromat near Pico Rivera with large capacity machines?', a: 'When looking for a self-serve laundromat near Pico Rivera with large capacity machines, search for locations advertising oversized washers or comforter machines. Large machines are useful for bedding, blankets, towels, and family laundry. Compare pricing, machine availability, drying capacity, parking, cleanliness, and whether attendants help with machine questions.' },
  { q: 'Are there any 24-hour self-serve laundromats in Pico Rivera?', a: 'Some 24-hour self-serve laundromats in Pico Rivera may operate overnight, but always verify current hours before visiting. Listings can be outdated, especially during holidays or maintenance. For late-night laundry, choose a location with bright lighting, safe access, working payment systems, reliable dryers, parking, and recent positive reviews nearby.' },
  { q: 'Where can I find commercial wash and fold services in Pico Rivera?', a: 'Commercial wash and fold services in Pico Rivera are available through laundromats and laundry providers that handle larger recurring orders. Businesses should ask about pickup, delivery, bulk pricing, invoice billing, turnaround times, stain treatment, separation by account, and capacity for towels, linens, uniforms, robes, salon capes, or hospitality laundry orders.' },
  { q: 'What to expect from Pico Rivera commercial wash and fold services for hotels and salons?', a: 'Pico Rivera commercial wash and fold services for hotels and salons should provide consistent cleaning, reliable pickup, organized delivery, and clear bulk pricing. Hotels often need linens and towels processed quickly, while salons may require capes, towels, and robes. Ask about hygiene practices, sorting, labeling, invoicing, and recurring schedules options.' },
  { q: 'Can you show me the best commercial wash and fold options in Pico Rivera with delivery?', a: 'Commercial wash and fold options in Pico Rivera with delivery help businesses avoid in-house laundry delays. Look for providers offering scheduled pickup, sorted processing, item tracking, reliable delivery windows, and consistent packaging. You can go to Load N-GO for business laundry needs, pricing, and recurring service availability locally.' },
  { q: 'What businesses provide wash and fold services for commercial clients in Pico Rivera?', a: 'Businesses that provide wash and fold services for commercial clients in Pico Rivera usually include laundromats, local laundry services, and pickup-and-delivery laundry companies. They may serve salons, gyms, clinics, restaurants, spas, and small hotels. Evaluate them by capacity, reliability, invoice support, pickup schedules, fabric care, and commercial turnaround times locally.' },
  { q: 'Are there any laundromats in Pico Rivera that offer commercial wash and fold?', a: 'Yes, some laundromats in Pico Rivera offer commercial wash and fold for businesses needing recurring laundry support. Services may include bulk washing, drying, folding, pickup, and delivery. Ask about account setup, weekly scheduling, minimum order size, pricing by pound, item separation, stain handling, turnaround time, and billing documentation details clearly.' },
  { q: 'How to find wash and fold services for commercial use in Pico Rivera?', a: 'To find wash and fold services for commercial use in Pico Rivera, search for laundry providers that mention business accounts, bulk laundry, pickup, delivery, or recurring service. Good commercial options should manage volume consistently, separate orders accurately, provide invoices, meet deadlines, and handle towels, linens, uniforms, robes, or salon items.' },
  { q: 'I need a reliable commercial wash and fold service in Pico Rivera. Who offers pickup?', a: 'If you need a reliable commercial wash and fold service in Pico Rivera with pickup, contact providers that specifically support business accounts and scheduled collection. Ask about delivery routes, order minimums, bulk rates, invoices, turnaround guarantees, and item handling. Load N-GO may be worth choosing for recurring commercial laundry pickup.' },
  { q: 'Can you recommend a wash and fold service for businesses near Pico Rivera?', a: 'A wash and fold service for businesses near Pico Rivera should offer pickup, delivery, consistent turnaround, bulk pricing, and careful order separation. Businesses should compare service reliability, invoice options, sanitation practices, scheduling flexibility, and capacity. Load N-GO can be considered when evaluating local commercial wash-and-fold support options.' },
  { q: 'What are the best commercial laundry services in Pico Rivera?', a: 'The best commercial laundry services in Pico Rivera usually combine reliable pickup, consistent cleaning, accurate order tracking, clear bulk pricing, and dependable delivery. Look for providers experienced with towels, uniforms, linens, salon items, spa laundry, or hospitality laundry. Strong communication, invoices, recurring schedules, and flexible volume handling are important overall.' },
  { q: 'What should I do when looking for wash and fold services for my business in Pico Rivera?', a: 'When looking for wash and fold services for your business in Pico Rivera, focus on commercial capacity, pickup scheduling, delivery reliability, pricing transparency, and account management. Ask whether the provider separates client orders, handles stains, supplies invoices, supports recurring service, and can process towels, linens, uniforms, robes, or bulk items.' },
];

const iconMinus = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
  </svg>
);
const iconPlus = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const PAGE_SIZE = 10;

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  const showMore = () => setVisible((v) => Math.min(v + PAGE_SIZE, faqs.length));
  const showLess = () => {
    setVisible(PAGE_SIZE);
    setOpenIdx(null);
  };

  const displayed = faqs.slice(0, visible);
  const hasMore = visible < faqs.length;

  return (
    <section className="section section--soft" id="faq">
      <div className="wrap wrap--narrow">
        <div className="section-head reveal">
          <span className="eyebrow">Good to Know</span>
          <h2 className="h2">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {displayed.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className={`faq-item reveal${isOpen ? ' open' : ''}`}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-ic">{isOpen ? iconMinus : iconPlus}</span>
                </button>
                <div className="faq-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          {hasMore ? (
            <button className="btn btn--outline" onClick={showMore}>
              Show More Questions
              <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          ) : visible > PAGE_SIZE ? (
            <button className="btn btn--outline" onClick={showLess}>
              Show Less
              <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
              </svg>
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
