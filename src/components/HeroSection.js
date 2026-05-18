// src/components/HeroSection.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [rightSideOpacity, setRightSideOpacity] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rightSideRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle mouse move on the right side
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const width = rect.width;
    
    // Calculate opacity based on mouse X position
    // Mouse closer to left edge = more transparent, closer to right edge = more opaque
    let newOpacity = 0.2 + (mouseX / width) * 0.8;
    newOpacity = Math.min(0.95, Math.max(0.2, newOpacity));
    
    setRightSideOpacity(newOpacity);
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    setRightSideOpacity(1);
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Side - Image */}
        <div className="hero-left">
          <div className={`hero-image-wrapper ${imageLoaded ? 'fade-in' : ''}`}>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c2236a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Digital Innovation and Technology"
              className="hero-image"
              onLoad={() => setImageLoaded(true)}
            />
            <div className="image-overlay"></div>
          </div>
        </div>

        {/* Right Side - Content with dynamic background opacity */}
        <div
          ref={rightSideRef}
          className="hero-right"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            '--mouse-x': `${mousePosition.x}px`,
            '--mouse-y': `${mousePosition.y}px`,
            '--opacity': rightSideOpacity,
          }}
        >
          <div className="hero-content">
            {/* Badge */}
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Digital Innovation Partner
            </div>

            {/* Heading - "Transform" word starts here, image won't overlap */}
            <h1 className="hero-title">
              Transform Your Business with{' '}
              <span className="hero-title-gradient">Future-Ready</span> Tech
            </h1>

            {/* Description */}
            <p className="hero-description">
              nmdskandy delivers cutting-edge IT solutions — from web platforms and VR experiences 
              to smart hotel integrations.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">
              <Link to="/contact" className="btn-primary">
                Start Your Project
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link to="/projects" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          width: 100%;
        }

        /* Left Side - Image */
        .hero-left {
          position: relative;
          overflow: hidden;
        }

        .hero-image-wrapper {
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.8s ease-out;
        }

        .hero-image-wrapper.fade-in {
          opacity: 1;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1);
          transition: transform 0.5s ease-out;
        }

        .hero-image-wrapper:hover .hero-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.3) 100%);
          pointer-events: none;
        }

        /* Right Side - Content */
        .hero-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, var(--opacity, 1)) 0%,
            rgba(248, 250, 252, var(--opacity, 0.95)) 100%
          );
          transition: background 0.3s ease-out;
          position: relative;
          overflow: hidden;
        }

        /* Animated gradient overlay for mouse effect */
        .hero-right::before {
          content: '';
          position: absolute;
          top: var(--mouse-y, 50%);
          left: var(--mouse-x, 50%);
          width: 150%;
          height: 150%;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.5) 0%,
            rgba(255, 255, 255, 0) 70%
          );
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.10s ease-out;
          pointer-events: none;
        }

        .hero-right:hover::before {
          opacity: 1;
        }

        .hero-content {
          max-width: 550px;
          width: 100%;
          animation: fadeInUp 0.8s ease-out;
        }

        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(102, 126, 234, 0.1);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1rem;
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #4f46e5;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(102, 126, 234, 0.2);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #4f46e5;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        /* Title */
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          color: #1e293b;
          margin-bottom: 1.5rem;
        }

        .hero-title-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          display: inline-block;
        }

        /* Description */
        .hero-description {
          font-size: 1.125rem;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 2rem;
        }

        /* Buttons */
        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.875rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px -5px rgba(102, 126, 234, 0.4);
          border: none;
          cursor: pointer;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px -5px rgba(102, 126, 234, 0.5);
          gap: 1rem;
        }

        .btn-icon {
          width: 1.25rem;
          height: 1.25rem;
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-icon {
          transform: translateX(4px);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: #475569;
          padding: 0.875rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          border: 2px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          border-color: #667eea;
          color: #667eea;
          transform: translateY(-2px);
          background: rgba(102, 126, 234, 0.05);
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
          }

          .hero-left {
            min-height: 50vh;
            order: 1;
          }

          .hero-right {
            min-height: auto;
            padding: 3rem 1.5rem;
            order: 2;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .btn-primary,
          .btn-secondary {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.75rem;
          }
          
          .hero-right {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;