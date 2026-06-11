'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

const images = [
  { src: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/c27de66e-4195-4176-3afe-1d569b926d00/public', alt: 'Laundromat facility' },
  { src: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/b92d83a9-fa75-4776-9962-ebc60c512300/public', alt: 'Laundromat facility' },
  { src: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/52ea6492-e615-4d58-3aec-32c86a771600/public', alt: 'Laundromat facility' },
  { src: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/385916c7-7adf-46fd-d266-abae21b40a00/public', alt: 'Laundromat facility' },
  { src: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/cca98090-9ae0-419a-615f-55819af69400/public', alt: 'Laundromat facility' },
  { src: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/3ba0f7a8-095c-4690-7436-90b2f7589800/public', alt: 'Laundromat facility' },
  { src: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/53cbdb89-ca5d-4355-f801-4b29e1c5c800/public', alt: 'Laundromat facility' },
  { src: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/37ab2cf5-a685-4876-8dcf-f4b4e747b200/public', alt: 'Laundromat facility' },
  { src: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/a120e316-d64b-4461-dd91-da5d354a2500/public', alt: 'Laundromat facility' },
  { src: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/19fa0568-ab7e-4114-d07d-6c2f3bc63800/public', alt: 'Laundromat facility' },
  { src: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/c7c90217-8ab0-440c-8d71-6da48d131c00/public', alt: 'Laundromat facility' },
  { src: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/19cac844-3c5a-42eb-4070-dd636e43a500/public', alt: 'Laundromat facility' },
  { src: 'https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/13861a23-9c2a-415e-5ed6-e929a9e79100/public', alt: 'Laundromat facility' },
];

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

interface CarouselProps {
  startIndex: number;
  onClose: () => void;
}

function Carousel({ startIndex, onClose }: CarouselProps) {
  const [current, setCurrent] = useState(startIndex);
  const [animDir, setAnimDir] = useState<'left' | 'right' | null>(null);
  const [animating, setAnimating] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const go = useCallback((dir: 'left' | 'right') => {
    if (animating) return;
    setAnimDir(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => dir === 'right' ? (c + 1) % images.length : (c - 1 + images.length) % images.length);
      setAnimating(false);
      setAnimDir(null);
    }, 260);
  }, [animating]);

  const goTo = useCallback((i: number) => {
    if (i === current || animating) return;
    setAnimDir(i > current ? 'right' : 'left');
    setAnimating(true);
    setTimeout(() => {
      setCurrent(i);
      setAnimating(false);
      setAnimDir(null);
    }, 260);
  }, [current, animating]);

  useEffect(() => {
    const el = thumbsRef.current?.children[current] as HTMLElement | undefined;
    el?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [current]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go('right');
      if (e.key === 'ArrowLeft') go('left');
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [go, onClose]);

  const slideStyle = animating
    ? {
        transform: animDir === 'right' ? 'translateX(-40px)' : 'translateX(40px)',
        opacity: 0,
        transition: 'transform 0.26s ease, opacity 0.26s ease',
      }
    : {
        transform: 'translateX(0)',
        opacity: 1,
        transition: 'transform 0.26s ease, opacity 0.26s ease',
      };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image carousel"
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(6px)',
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close carousel"
        style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: '50%',
          width: '2.5rem', height: '2.5rem', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', zIndex: 10,
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {/* Counter */}
      <div style={{ position: 'absolute', top: '1.1rem', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
        {current + 1} / {images.length}
      </div>

      {/* Main image area */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          width: '100%', maxWidth: '1000px', padding: '0 1rem',
          flex: 1, minHeight: 0,
        }}
      >
        {/* Prev */}
        <button
          onClick={(e) => { e.stopPropagation(); go('left'); }}
          aria-label="Previous image"
          style={{
            flexShrink: 0,
            background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: '50%',
            width: '3rem', height: '3rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
        >
          <ChevronLeft />
        </button>

        {/* Image */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 0 }}>
          <img
            key={current}
            src={images[current].src}
            alt={images[current].alt}
            style={{
              maxWidth: '100%',
              maxHeight: 'calc(100vh - 200px)',
              objectFit: 'contain',
              borderRadius: '12px',
              display: 'block',
              ...slideStyle,
            }}
          />
        </div>

        {/* Next */}
        <button
          onClick={(e) => { e.stopPropagation(); go('right'); }}
          aria-label="Next image"
          style={{
            flexShrink: 0,
            background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: '50%',
            width: '3rem', height: '3rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: '100%', maxWidth: '1000px', padding: '0.75rem 1rem 1.25rem' }}
      >
        <div
          ref={thumbsRef}
          style={{
            display: 'flex', gap: '0.5rem', overflowX: 'auto',
            scrollbarWidth: 'none', padding: '0.25rem 0',
          }}
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              style={{
                flexShrink: 0,
                width: '72px', height: '52px',
                border: i === current ? '2px solid #fff' : '2px solid transparent',
                borderRadius: '6px', overflow: 'hidden', cursor: 'pointer',
                opacity: i === current ? 1 : 0.5,
                transition: 'opacity 0.2s, border-color 0.2s',
                padding: 0, background: 'none',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section section--soft" id="gallery">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Take a Look</span>
          <h2 className="h2">Our Facility</h2>
          <p className="lead">A modern, clean facility equipped with the latest laundry technology.</p>
        </div>

        <div className="gal-grid">
          {images.map((img, i) => (
            <button
              key={img.src}
              className="gal-item reveal"
              onClick={() => setOpenIndex(i)}
              aria-label={`View image ${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--r-md)', display: 'block' }}
              />
              <span className="gal-item__zoom">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Carousel startIndex={openIndex} onClose={() => setOpenIndex(null)} />
      )}
    </section>
  );
}
