// src/pages/Home.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../utils/servicesData';

const Home = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // First 6 services for highlights
  const highlightServices = services.slice(0, 6);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-up opacity-0">
            <div className="inline-block bg-primary-100 text-primary-700 rounded-full px-4 py-1 text-sm font-semibold mb-6">
              Digital Innovation Partner
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6 leading-tight">
              Transform Your Business with <span className="text-primary-600">Future-Ready</span> Tech
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              nmdskandy delivers cutting-edge IT solutions — from web platforms and VR experiences to smart hotel integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition shadow-lg hover:shadow-xl">
                Start Your Project
              </Link>
              <Link to="/projects" className="border border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 px-8 py-3 rounded-xl font-semibold transition">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 fade-up opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What We Deliver</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive digital services tailored to elevate your brand and operations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlightServices.map((service, idx) => (
              <div key={service.id} className="bg-gray-50 rounded-2xl p-6 hover-lift transition-all duration-300 border border-gray-100 fade-up opacity-0" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition">
              See all 10+ services
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Brief Intro + CTA */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to elevate your digital presence?</h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">Let's build something remarkable together. From concept to launch, we're with you every step.</p>
          <Link to="/contact" className="inline-block bg-white text-primary-600 px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition">Get in touch →</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;