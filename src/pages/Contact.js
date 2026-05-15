// src/pages/Contact.js
import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // frontend-only demo: just show success
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

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
        <div className="text-center mb-12 fade-up opacity-0">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Let's Talk</h1>
          <p className="text-gray-600 max-w-xl mx-auto">Have a project in mind? Reach out and we’ll get back to you within 24 hours.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 fade-up opacity-0">
            <h2 className="text-2xl font-bold text-dark mb-6">Send us a message</h2>
            {submitted && (
              <div className="mb-4 bg-green-100 text-green-700 p-3 rounded-lg text-center">Thank you! We'll contact you soon.</div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Full name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Your message</label>
                <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-xl transition">Send Message</button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-8 fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center gap-3">📞 <a href="tel:+1234567890" className="hover:text-primary-600">+1 (234) 567-890</a></p>
                <p className="flex items-center gap-3">✉️ <a href="mailto:hello@nmdskandy.com" className="hover:text-primary-600">hello@nmdskandy.com</a></p>
                <p className="flex items-center gap-3">📍 123 Digital Avenue, Suite 400, San Francisco, CA 94107</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Find Us</h3>
              <div className="w-full h-64 bg-gray-300 rounded-xl overflow-hidden">
                {/* Google Maps Placeholder - replace with actual embed */}
                <iframe
                  title="Office location"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0193953260545!2d-122.419415584681!3d37.774929779759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;