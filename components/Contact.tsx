'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: 'wash-fold', notes: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-gray-900 mb-3">Order Received!</h2>
          <p className="font-body text-gray-500 mb-6">
            Thanks {form.name}! We received your wash &amp; fold request. Our team will follow up shortly.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: 'wash-fold', notes: '' }); }}
            className="font-body bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Place Another Order
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-heading text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Order Online</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Order Wash &amp; Fold</h2>
          <p className="font-body text-gray-500 text-lg">
            Fill out the form and we&apos;ll get in touch to confirm your drop-off.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-50 rounded-3xl p-8 border border-gray-100 shadow-sm space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="font-body block text-sm font-semibold text-gray-700 mb-1.5">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Smith"
                className="font-body w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
            </div>
            <div>
              <label htmlFor="phone" className="font-body block text-sm font-semibold text-gray-700 mb-1.5">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="(562) 000-0000"
                className="font-body w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="font-body block text-sm font-semibold text-gray-700 mb-1.5">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="jane@example.com"
              className="font-body w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            />
          </div>

          <div>
            <label htmlFor="service" className="font-body block text-sm font-semibold text-gray-700 mb-1.5">
              Service
            </label>
            <select
              id="service"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="font-body w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="wash-fold">Wash &amp; Fold — $1.99/lb</option>
              <option value="same-day">Same-Day Service — $2.50/lb</option>
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="font-body block text-sm font-semibold text-gray-700 mb-1.5">
              Notes (optional)
            </label>
            <textarea
              id="notes"
              rows={3}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Any special instructions or requests..."
              className="font-body w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="font-body w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-200"
          >
            Submit Order <Send className="w-4 h-4" />
          </button>

          <p className="font-body text-center text-gray-400 text-xs">
            Minimum 20 lbs. First-time customers receive 50% off automatically.
          </p>
        </form>
      </div>
    </section>
  );
}
