// src/pages/Projects.js
import React, { useEffect } from 'react';
import { projectsData, companiesAdvised } from '../utils/servicesData';

import heroImg from '../assets/hero.jpg';
import abstractImg from '../assets/hero-abstract.svg';

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

  const getProjectImageSrc = (project) => {
    if (project?.imageSrc) return project.imageSrc;

    switch (project.imageKey) {
      case 'hero':
        return heroImg;
      case 'abstract':
        return abstractImg;
      case 'jucontra':
        return '/Jucontravels.png';
      default:
        return abstractImg;
    }
  };

  const getDomainLabel = (url) => {
    if (!url) return '';
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch {
      return '';
    }
  };

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
            <article
              key={project.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover-lift fade-up opacity-0 flex flex-col"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {/* Media */}
              <div className="relative w-full overflow-hidden bg-gray-100" style={{ paddingTop: '56.25%' }}>
                <img
                  src={getProjectImageSrc(project)}
                  alt={project.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-dark mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-5">{project.description}</p>

                <div className="mt-auto flex items-center justify-between gap-3">
                  <div className="text-sm text-gray-500">{project.client}</div>

                  {project.visitUrl ? (
                    <a
                      href={project.visitUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-xl font-semibold transition shadow-sm"
                      aria-label={`Visit ${project.name}`}
                    >
                      Visit
                      {getDomainLabel(project.visitUrl) ? (
                        <span className="text-white/85 text-xs font-medium">{getDomainLabel(project.visitUrl)}</span>
                      ) : null}
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center bg-gray-200 text-gray-500 px-4 py-2 rounded-xl font-semibold cursor-not-allowed"
                      aria-disabled="true"
                      title="Add visitUrl in src/utils/servicesData.js"
                    >
                      Visit
                    </span>
                  )}
                </div>
              </div>
            </article>
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