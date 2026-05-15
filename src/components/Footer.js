// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { name: 'LinkedIn', icon: '🔗', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'Facebook', icon: '📘', url: '#' },
  ];

  return (
    <footer className="bg-dark text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="nmdskandy" className="h-8 w-auto brightness-0 invert" />
              <span className="text-white font-bold text-lg">kandy</span>
            </div>
            <p className="text-sm leading-relaxed">Digital innovation that transforms ideas into reality. Your trusted IT partner.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Web & Software Dev</li>
              <li>Mobile Apps & VR</li>
              <li>Hotel Integrations</li>
              <li>Marketing & Printing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.url} className="text-gray-400 hover:text-white transition text-2xl" aria-label={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} nmdskandy. All rights reserved. Innovating digital futures.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;