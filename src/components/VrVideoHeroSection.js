import React, { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import heroBg from '../assets/hero.jpg';
import './VrVideoHeroSection.css';

const VrVideoHeroSection = () => {
  const heroRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  const youtubeUrl = 'https://youtu.be/ZZyBG6UsvoQ?si=pLATQgaJTeEbmsTA';

  const youtubeEmbedSrc = useMemo(() => {
    const videoId = 'ZZyBG6UsvoQ';
    const params = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      loop: '1',
      playlist: videoId,
      controls: '1',
      rel: '0',
      modestbranding: '1',
      playsinline: '1',
    });
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }, []);

  const scrollToHero = () => {
    if (!heroRef.current) return;
    heroRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="vrHeroWrapper">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-white py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none animate-reveal-ltr"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-white/90 via-white/60 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-up opacity-0">
            <div className="inline-block bg-primary-100 text-primary-700 rounded-full px-4 py-1 text-sm font-semibold mb-6">
              Digital Innovation Partner
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6 leading-tight">
              Transform Your Business with <span className="text-primary-600">Future-Ready</span> Tech
            </h1>
            <p className="text-lg md:text-xl text-black-600 mb-8">
              NM Digital solutions Kandy delivers cutting-edge IT solutions — from web platforms and VR experiences to smart hotel integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </Link>
              <Link
                to="/projects"
                className="border border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 px-8 py-3 rounded-xl font-semibold transition"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 360° VR Video Section (below hero) */}
      <section className="vrSection">
        <div className="vrSectionInner">
          <div className="vrFrame" style={{ opacity: isReady ? 1 : 0, transition: 'opacity 600ms ease' }}>
            <iframe
              className="vrIframe"
              src={youtubeEmbedSrc}
              title="Explore Kandy in 360°"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              onLoad={() => setIsReady(true)}
            />

            {/* Overlay */}
            <div className={`vrOverlay ${isReady ? 'isReady' : ''}`}>
              <div className="vrOverlayContent">
                <div className="vrOverlayInner">
                  <h2 className="vrTitle">Explore Kandy in 360°</h2>
                  <p className="vrSubtitle">Drag to look around. On mobile, swipe to explore.</p>
                  <div className="vrActions">
                    <a
                      href={youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white/90 hover:bg-white text-dark px-6 py-3 rounded-xl font-semibold transition"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VrVideoHeroSection;
