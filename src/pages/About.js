// src/pages/About.js
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('animate-fade-up');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Company Background */}
        <div className="max-w-4xl mx-auto text-center mb-16 fade-up opacity-0">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">About</h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded with a vision to bridge creativity and technology, nmdskandy has become a trusted IT and digital services partner for businesses worldwide. 
            We don't just write code — we craft experiences that drive growth, efficiency, and engagement.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 p-8 rounded-2xl fade-up opacity-0">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-dark mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">Empower businesses with accessible, innovative technology that simplifies complexity and unlocks new opportunities. We deliver measurable results through tailored digital solutions.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold text-dark mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">To be the global standard for digital transformation — where every interaction is seamless, every system intelligent, and every client successful in the connected world.</p>
          </div>
        </div>

        {/* Values or stats */}
        <div className="bg-primary-50 rounded-3xl p-10 fade-up opacity-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600">50+</div>
              <p className="text-gray-700 mt-2">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">8+</div>
              <p className="text-gray-700 mt-2">Industry Verticals</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">100%</div>
              <p className="text-gray-700 mt-2">Client Focus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;