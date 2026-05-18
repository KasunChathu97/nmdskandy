// src/components/Footer.js
import React from 'react';

const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fill="currentColor"
      d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H16.8V4.8c-.3 0-1.3-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V11H7v3h2.8v8h3.7z"
    />
  </svg>
);

const IconLinkedIn = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fill="currentColor"
      d="M6.94 6.5a2.22 2.22 0 1 1 0-4.44 2.22 2.22 0 0 1 0 4.44ZM4.75 21.5h4.38V8.5H4.75v13Zm6.88-13h4.2v1.77h.06c.58-1.1 2-2.27 4.13-2.27 4.42 0 5.24 2.91 5.24 6.7v6.8h-4.38v-6.03c0-1.44-.03-3.29-2-3.29-2.01 0-2.32 1.57-2.32 3.19v6.13h-4.38v-13Z"
    />
  </svg>
);

const IconWhatsApp = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fill="currentColor"
      d="M12.04 2C6.53 2 2.08 6.38 2.08 11.8c0 1.74.5 3.44 1.43 4.91L2 22l5.44-1.41a10.16 10.16 0 0 0 4.6 1.11h.01c5.5 0 9.96-4.38 9.96-9.8C22 6.38 17.54 2 12.04 2Zm0 18.02h-.01a8.4 8.4 0 0 1-4.28-1.16l-.3-.18-3.22.84.86-3.12-.2-.31a8.04 8.04 0 0 1-1.29-4.29c0-4.45 3.67-8.07 8.44-8.07 4.66 0 8.44 3.62 8.44 8.07 0 4.45-3.78 8.22-8.44 8.22Zm4.9-6.06c-.27-.13-1.6-.78-1.85-.87-.25-.09-.44-.13-.62.13-.18.26-.72.87-.88 1.05-.16.18-.32.2-.59.07-.27-.13-1.15-.41-2.18-1.31-.8-.68-1.34-1.52-1.5-1.78-.16-.26-.02-.4.12-.53.13-.13.27-.32.41-.48.14-.16.18-.26.27-.43.09-.18.05-.33-.02-.46-.07-.13-.62-1.48-.85-2.02-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.53-.01-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.3.95 2.56 1.08 2.74.13.18 1.86 2.95 4.6 4.02.63.24 1.12.38 1.5.49.63.2 1.2.17 1.65.1.5-.07 1.6-.64 1.83-1.26.23-.62.23-1.15.16-1.26-.06-.11-.25-.18-.52-.31Z"
    />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const toWhatsAppUrl = (value) => {
    if (!value) return '#';
    const trimmed = String(value).trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;

    const digits = trimmed.replace(/[^0-9]/g, '');
    return digits ? `https://wa.me/${digits}` : '#';
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: IconFacebook,
      url: 'https://www.facebook.com/profile.php?id=100090760810668',
    },
    {
      name: 'LinkedIn',
      icon: IconLinkedIn,
      url: 'https://www.linkedin.com/in/kasun-chathuranga-43a743321/?skipRedirect=true',
    },
    {
      name: 'WhatsApp',
      icon: IconWhatsApp,
      url: toWhatsAppUrl('+94711378550'),
    },
  ];

  return (
    <footer className="bg-dark text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="NM Digital solutions Kandy" className="h-10 w-auto" />
              <span className="text-white font-bold text-lg">NM Digital solutions Kandy</span>
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
                (() => {
                  const Icon = social.icon;
                  return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition"
                  aria-label={social.name}
                >
                  <Icon className="w-7 h-7" />
                </a>
                  );
                })()
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