"use client";
import React, { useState } from 'react';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const tabContent = {
    education: (
      <article className="space-y-6 font-mono" lang="en">
        <div>
          <h3 className="text-cyan-400 font-bold uppercase text-sm sm:text-base">BSC in IT</h3>
          <p className="text-xs sm:text-sm">Institute: University of Mumbai</p>
          <p className="text-xs sm:text-sm">Session: 2022–25</p>
          <p className="text-xs sm:text-sm">Result: Awaited (Final year)</p>
        </div>
        <div>
          <h3 className="text-cyan-400 font-bold uppercase text-sm sm:text-base">HSC (Science)</h3>
          <p className="text-xs sm:text-sm">Institute: XYZ Junior College</p>
          <p className="text-xs sm:text-sm">Session: 2020–21</p>
          <p className="text-xs sm:text-sm">Result: 78.62%</p>
        </div>
      </article>
    ),
    shortCourse: (
      <article className="space-y-6 font-mono" lang="en">
        <div>
          <h3 className="text-cyan-400 font-bold uppercase text-sm sm:text-base">MERN Stack Development</h3>
          <p className="text-xs sm:text-sm">Institute: Online Course (Udemy)</p>
          <p className="text-xs sm:text-sm">Duration: 3 Months (2023)</p>
          <p className="text-xs sm:text-sm">Certification: Completed</p>
        </div>
        <div>
          <h3 className="text-cyan-400 font-bold uppercase text-sm sm:text-base">Graphic Design Basics</h3>
          <p className="text-xs sm:text-sm">Institute: Coursera</p>
          <p className="text-xs sm:text-sm">Duration: 1 Month (2022)</p>
          <p className="text-xs sm:text-sm">Certification: Completed</p>
        </div>
      </article>
    ),
    experience: (
      <article className="space-y-6 font-mono" lang="en">
        <div>
          <h3 className="text-cyan-400 font-bold uppercase text-sm sm:text-base">Frontend Developer Intern</h3>
          <p className="text-xs sm:text-sm">Company: ABC Tech Solutions</p>
          <p className="text-xs sm:text-sm">Duration: 6 Months (2023)</p>
          <p className="text-xs sm:text-sm">Role: Built responsive UIs using React and Tailwind CSS</p>
        </div>
        <div>
          <h3 className="text-cyan-400 font-bold uppercase text-sm sm:text-base">Freelance Graphic Designer</h3>
          <p className="text-xs sm:text-sm">Platform: Fiverr</p>
          <p className="text-xs sm:text-sm">Duration: 2022–Present</p>
          <p className="text-xs sm:text-sm">Projects: Designed logos and banners for 10+ clients</p>
        </div>
      </article>
    ),
    details: (
      <article className="space-y-6 font-mono" lang="en">
        <div>
          <h3 className="text-cyan-400 font-bold uppercase text-sm sm:text-base">Personal Info</h3>
          <p className="text-xs sm:text-sm">Name: Rahul Yadav</p>
          <p className="text-xs sm:text-sm">Email: rahul.yadav@example.com</p>
          <p className="text-xs sm:text-sm">Location: Silvassa, India</p>
        </div>
        <div>
          <h3 className="text-cyan-400 font-bold uppercase text-sm sm:text-base">Hobbies</h3>
          <p className="text-xs sm:text-sm">Hobby 1: Coding and building projects</p>
          <p className="text-xs sm:text-sm">Hobby 2: Cyber Security</p>
          <p className="text-xs sm:text-sm">Hobby 3: IOT Project Building</p>
        </div>
      </article>
    ),
  };

  return (
    <section
      id="about"
      className="min-h-[calc(100vh-70px)] w-full overflow-hidden bg-gradient-to-b from-white via-slate-200 to-slate-300 dark:from-black dark:via-slate-900 dark:to-slate-800"
      role="region"
      aria-label="About section"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Rahul Yadav",
            jobTitle: "Full Stack Developer",
            email: "rahul.yadav@example.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Silvassa",
              addressCountry: "India",
            },
            alumniOf: [
              {
                "@type": "EducationalOrganization",
                name: "University of Mumbai",
                description: "BSC in IT, 2022–25, Result Awaited",
              },
              {
                "@type": "EducationalOrganization",
                name: "XYZ Junior College",
                description: "HSC (Science), 2020–21, 78.62%",
              },
            ],
            knowsAbout: [
              "MERN Stack Development",
              "Graphic Design",
              "Frontend Development",
              "Backend Development",
            ],
          }),
        }}
      />
      <h2 className="text-3xl font-bold text-center dark:text-white mt-5 mb-5 md:mt-25 md:mb-10">
        About <span className="dark:text-cyan-400 text-blue-500">Me</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-start items-start gap-10 p-4 sm:p-6 max-w-5xl mx-auto rounded-xl">
        <div className="bg od:mx-0 bg-blue-500 text-white text-center p-2 md:p-6 rounded-lg shadow-lg w-full max-w-60 mx-auto md:mx-0">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white">
            <img
              src="https://avatars.githubusercontent.com/u/212442334?v=4"
              alt="Profile picture of Rahul Yadav, a MERN stack developer"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-wider uppercase font-tinos" lang="en">
            RAHUL YADAV
          </h2>
          <p className="mt-2 text-xmds sm:text-sm font-sans" lang="en">Frontend Developer</p>
          <p className="text-md sm:text-sm font-sans" lang="en">Backend Developer</p>
          <p className="text-md sm:text-sm font-sans" lang="en">MERN Stack Developer</p>
        </div>
        <div className="dark:text-white w-full">
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 dark:text-white font-sans" role="tablist" aria-label="About tabs">
            <button
              onClick={() => handleTabChange('education')}
              className={`border-b-2 font-semibold text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                activeTab === 'education' ? 'border-blue-400 text-blue-500' : 'border-transparent hover:text-blue-500'
              }`}
              aria-selected={activeTab === 'education'}
              aria-controls="education-panel"
              role="tab"
              id="education-tab"
            >
              Education Qualification
            </button>
            <button
              onClick={() => handleTabChange('shortCourse')}
              className={`border-b-2 font-semibold text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                activeTab === 'shortCourse' ? 'border-blue-500 text-blue-500' : 'border-transparent hover:text-blue-600'
              }`}
              aria-selected={activeTab === 'shortCourse'}
              aria-controls="shortCourse-panel"
              role="tab"
              id="shortCourse-tab"
            >
              Short Course
            </button>
            <button
              onClick={() => handleTabChange('experience')}
              className={`border-b-2 font-semibold text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                activeTab === 'experience' ? 'border-blue-500 text-blue-500' : 'border-transparent hover:text-blue-500'
              }`}
              aria-selected={activeTab === 'experience'}
              aria-controls="experience-panel"
              role="tab"
              id="experience-tab"
            >
              Experience
            </button>
            <button
              onClick={() => handleTabChange('details')}
              className={`border-b-2 font-semibold text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                activeTab === 'details' ? 'border-blue-500 text-blue-500' : 'border-transparent hover:text-blue-500'
              }`}
              aria-selected={activeTab === 'details'}
              aria-controls="details-panel"
              role="tab"
              id="details-tab"
            >
              Details
            </button>
          </div>
          <div
            id={`${activeTab}-panel`}
            role="tabpanel"
            aria-labelledby={`${activeTab}-tab`}
            tabIndex={0}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;