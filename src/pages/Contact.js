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
                <p className="flex items-center gap-3">📞 <a href="tel:+94711378550" className="hover:text-primary-600">+94 71-1378550</a></p>
                <p className="flex items-center gap-3">✉️ <a href="mailto:info@nmdskandy.lk" className="hover:text-primary-600">info@nmdskandy.lk</a></p>
                <p className="flex items-center gap-3">📍 No 126, D.S Senanayake Street, Kandy, Sri Lanka</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Find Us</h3>
              <div className="w-full h-64 bg-gray-300 rounded-xl overflow-hidden">
                <iframe
                  title="Office location"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps?q=No%20126,%20D.S%20Senanayake%20Street,%20Kandy,%20Sri%20Lanka&output=embed"
                ></iframe>
              </div>
              <a
                href="https://maps.app.goo.gl/mq433AtrQVRPVSoTA?g_st=aw"
                target="_blank"
                rel="noreferrer"
                className="inline-flex mt-3 text-primary-600 font-semibold hover:text-primary-700 transition"
              >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;