"use client";
import { useState } from 'react';
import Image from 'next/image';

const dummyProjects = [
  {
    id: 1,
    title: 'Rahul’s Portfolio Website',
    image: '/projects/portfolio.png',
    description:
      'A personal portfolio built with Next.js featuring animated sections, responsive design, and a markdown-based blog system for managing technical notes. It supports tag filtering, a dashboard layout, and serves as a centralized hub to document and share knowledge in an easy, searchable way.',
    tags: ['Next.js', 'Tailwind CSS', 'Markdown', 'Blog System'],
    github: 'https://github.com/rahulydw/portfolio',
    webapp: 'https://rahulydw.vercel.app',
  },
  {
    id: 2,
    title: 'Online Student Attendance Management System (OSAMS)',
    image: '/projects/osams-banner.png',
    description:
      'A MERN-based attendance system with role-based access, real-time tracking, timetable management, and notification systems. Integrated with Gemini AI to provide real-time insights via chat, enhancing communication and analytics for educational institutions.',
    tags: ['MERN Stack', 'MongoDB', 'JWT Auth', 'Tailwind CSS', 'Gemini AI'],
    github: 'https://github.com/rahulydw/osams',
    webapp: '#',
  },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-70px)] w-full overflow-hidden py-10 px-4 sm:px-8 bg-gradient-to-b from-gray-400 via-slate-300 to-slate-200 dark:from-gray-800 dark:via-gray-900 dark:to-black"
      role="region"
      aria-label="Projects section"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Projects by Rahul Yadav",
            description: "A collection of full-stack development projects showcasing expertise in modern web technologies.",
            itemListElement: dummyProjects.map((project, index) => ({
              "@type": "CreativeWork",
              position: index + 1,
              name: project.title,
              description: project.description,
              url: project.webapp !== '#' ? project.webapp : project.github,
              image: project.image,
              keywords: project.tags.join(', '),
            })),
          }),
        }}
      />
      <h2 className="text-3xl font-bold text-center dark:text-white mt-5 mb-5 md:mt-10 md:mb-5">
        My <span className="dark:text-cyan-400 text-blue-500">Projects</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center text-base sm:text-lg font-code mb-10" lang="en">
        Showcasing my expertise in full-stack development and modern tools.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {dummyProjects.map((project) => (
          <article
            key={project.id}
            className="bg-white dark:bg-slate-900 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-blue-500/40 dark:hover:shadow-cyan-400/30 transition-all duration-300 cursor-pointer overflow-hidden group"
            role="button"
            tabIndex={0}
            onClick={() => setSelected(project)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelected(project)}
            aria-label={`View details for ${project.title}`}
          >
            <div className="h-48 w-full relative">
              <Image
                src={project.image}
                alt={`Preview of ${project.title} project`}
                fill={true}
                style={{ objectFit: "cover"}}
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white" lang="en">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3" lang="en">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-xs px-2 py-1 bg-blue-100 text-blue-600 dark:bg-cyan-900 dark:text-cyan-300 rounded-full" lang="en">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
        >
          <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden max-w-3xl w-full relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-3xl text-gray-700 dark:text-white hover:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Close project details modal"
            >
              ×
            </button>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-64 lg:h-auto relative">
                <Image
                  src={selected.image}
                  alt={`Preview of ${selected.title} project`}
                  fill={true}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover"}}
                  className="rounded-l-xl object-cover"
                />
              </div>
              <div className="p-6 lg:w-1/2" tabIndex={0}>
                <h3 id="modal-title" className="text-2xl font-bold text-gray-800 dark:text-white mb-2" lang="en">{selected.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4" lang="en">{selected.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selected.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-blue-100 text-blue-600 dark:bg-cyan-900 dark:text-cyan-300 rounded-full" lang="en">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-sm font-semibold py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    aria-label={`View source code for ${selected.title}`}
                  >
                    View Code
                  </a>
                  <a
                    href={selected.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 dark:bg-cyan-600 hover:bg-blue-700 dark:hover:bg-cyan-700 text-white text-sm font-semibold py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    aria-label={`View live demo of ${selected.title}`}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}