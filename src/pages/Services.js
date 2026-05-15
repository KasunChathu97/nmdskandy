// src/pages/Services.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiCode, 
  FiBox, 
  FiSmartphone, 
  FiShoppingCart, 
  FiHome, 
  FiCamera, 
  FiFacebook, 
  FiGrid,      // QR Code වෙනුවට FiGrid
  FiPrinter, 
  FiBarChart2,
  FiArrowRight,
  FiStar,
  FiCheckCircle
} from 'react-icons/fi';

const Services = () => {
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

  const services = [
    {
      id: 1,
      title: "Website Development",
      description: "Responsive, high-performance websites with modern UX/UI and SEO optimization.",
      icon: FiCode,
      color: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      id: 2,
      title: "Software Development",
      description: "Custom enterprise software, CRMs, and automation solutions tailored to your needs.",
      icon: FiBox,
      color: "from-purple-500 to-indigo-500",
      delay: 0.05
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Native and cross-platform iOS & Android apps with seamless user experiences.",
      icon: FiSmartphone,
      color: "from-green-500 to-emerald-500",
      delay: 0.1
    },
    {
      id: 4,
      title: "POS Systems",
      description: "Modern point-of-sale solutions for retail, restaurants, and hospitality businesses.",
      icon: FiShoppingCart,
      color: "from-orange-500 to-red-500",
      delay: 0.15
    },
    {
      id: 5,
      title: "Hotel Services Integration",
      description: "Seamless integration with GetYourGuide, Booking.com, Airbnb, Agoda & TripAdvisor.",
      icon: FiHome,
      color: "from-teal-500 to-green-500",
      delay: 0.2
    },
    {
      id: 6,
      title: "VR Creation & 360° Photography",
      description: "Immersive virtual tours and 360° media for real estate, hotels, and tourism.",
      icon: FiCamera,
      color: "from-pink-500 to-rose-500",
      delay: 0.25
    },
    {
      id: 7,
      title: "Facebook Ad Campaigns",
      description: "Targeted social media advertising, audience analytics, and conversion optimization.",
      icon: FiFacebook,
      color: "from-blue-600 to-blue-800",
      delay: 0.3
    },
    {
      id: 8,
      title: "QR Code Creation",
      description: "Dynamic and static QR codes for marketing, payments, and contactless solutions.",
      icon: FiGrid,  // Changed from FiQrCode to FiGrid
      color: "from-gray-600 to-gray-800",
      delay: 0.35
    },
    {
      id: 9,
      title: "Leaflet & V-Card Printing",
      description: "Professional digital and print marketing materials including leaflets and digital business cards.",
      icon: FiPrinter,
      color: "from-yellow-500 to-amber-600",
      delay: 0.4
    },
    {
      id: 10,
      title: "Project Reports",
      description: "Data-driven reporting, analytics dashboards, and business intelligence solutions.",
      icon: FiBarChart2,
      color: "from-indigo-500 to-purple-600",
      delay: 0.45
    }
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-dark py-20 md:py-28">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 opacity-10 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-up opacity-0">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm font-semibold mb-6">
              <FiStar className="w-4 h-4" />
              <span>What We Offer</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Comprehensive digital solutions to transform your business and drive growth in the modern era.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 fade-up opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              What Can We Do For You?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We provide end-to-end technology solutions tailored to your unique business needs.
            </p>
            <div className="w-20 h-1 bg-primary-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 fade-up opacity-0 hover:-translate-y-2"
                  style={{ animationDelay: `${service.delay}s` }}
                >
                  <div className={`h-1 w-full bg-gradient-to-r ${service.color}`}></div>
                  
                  <div className="p-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link to="/contact" className="inline-flex items-center text-primary-600 font-medium text-sm hover:gap-2 transition-all">
                        Learn More <FiArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up opacity-0">
              <h2 className="text-3xl font-bold text-dark mb-4">Why Choose nmdskandy?</h2>
              <div className="w-16 h-1 bg-primary-600 mb-6 rounded-full"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We combine technical excellence with creative innovation to deliver solutions that 
                exceed expectations. Our client-centric approach ensures your success is our priority.
              </p>
              <ul className="space-y-3">
                {[
                  "10+ Years of Industry Experience",
                  "100+ Successful Projects Delivered",
                  "24/7 Dedicated Support Team",
                  "Cutting-edge Technology Stack",
                  "Agile Development Methodology"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <FiCheckCircle className="w-5 h-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
              <div className="bg-gradient-to-br from-primary-50 to-indigo-50 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-dark mb-3">Ready to scale your business?</h3>
                <p className="text-gray-600 mb-6">
                  Let's discuss how our services can help you achieve your goals.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
                  Start a Conversation <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">
            Get in touch with our experts and let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
              Contact Us <FiArrowRight />
            </Link>
            <Link to="/projects" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all inline-flex items-center gap-2">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
        }
        .fade-up {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Services;