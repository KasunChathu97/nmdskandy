// src/pages/Projects.js
import React, { useEffect } from 'react';
import { projectsData, companiesAdvised } from '../utils/servicesData';

const Projects = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Our Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Real solutions delivering real impact across industries.</p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projectsData.map((project, idx) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover-lift fade-up opacity-0" style={{ animationDelay: `${idx * 0.08}s` }}>
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-6xl">
                {project.name.charAt(0)}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <p className="text-sm text-primary-600 font-medium">Client: {project.client}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Companies We Advise */}
        <div className="fade-up opacity-0">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8">Companies We Advise & Partner With</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {companiesAdvised.map((company, i) => (
                <span key={i} className="bg-white px-5 py-2 rounded-full shadow-sm text-gray-700 font-medium border border-gray-200">{company}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;