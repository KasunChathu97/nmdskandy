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
        <div className="max-w-4xl mx-auto text-left md:text-center mb-16 fade-up opacity-0">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">About</h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <h2 className="text-xl md:text-2xl font-semibold text-dark mb-5">Company Background</h2>
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              Welcome to NM Digital Solutions — a creative and technology-driven digital solutions company based in Kandy. We specialize in delivering innovative digital services that help businesses grow, build their online presence, and connect with customers effectively in the modern digital world.
            </p>
            <p>
              At NM Digital Solutions, we provide a wide range of professional services including website development, web application development, mobile app development, graphic design, social media marketing, digital branding, Google Business Profile management, and IT business consultation. Our goal is to provide smart, reliable, and affordable digital solutions tailored to each client’s unique needs.</p>
            <p>
              We believe every business deserves a strong digital identity. With creativity, technology, and strategic thinking, our team works closely with clients to transform ideas into powerful digital experiences. Whether you are a startup, small business, hotel, or corporate organization, NM Digital Solutions is committed to helping you achieve success through innovation and quality service.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 p-8 rounded-2xl fade-up opacity-0">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-dark mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">To deliver high-quality digital solutions that help businesses grow and succeed.
              To provide innovative, reliable, and customer-focused services with professionalism and creativity.
              To build strong long-term relationships with clients through trust, transparency, and excellent support.</p>
            <p className="text-gray-600 leading-relaxed">
              To continuously improve and adapt to the latest technologies and digital trends.
              To help businesses establish a powerful and lasting digital presence in the global market.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold text-dark mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">To become one of Sri Lanka’s leading digital solutions providers by empowering businesses with innovative technology, creative digital strategies, and world-class online experiences.</p>
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