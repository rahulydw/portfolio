"use client";
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

// Skills Data
const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: '/tech_logo/html.png' },
      { name: 'CSS', logo: '/tech_logo/css.png' },
      { name: 'JavaScript', logo: '/tech_logo/javascript.png' },
      { name: 'React JS', logo: '/tech_logo/reactjs.png' },
      { name: 'Next JS', logo: '/tech_logo/nextjs.png' },
      { name: 'Tailwind CSS', logo: '/tech_logo/tailwindcss.png' },
      { name: 'Redux', logo: '/tech_logo/redux.png' },
      { name: 'GSAP Motion', logo: '/tech_logo/gsap.png' },
      { name: 'Shadcn UI', logo: '/tech_logo/materialui.png' },
      { name: 'Antd', logo: '/tech_logo/bootstrap.png' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: '/tech_logo/nodejs.png' },
      { name: 'Express JS', logo: '/tech_logo/express.png' },
      { name: 'MongoDB', logo: '/tech_logo/mongodb.png' },
      { name: 'MySQL', logo: '/tech_logo/mysql.png' },
      { name: 'PostgreSQL', logo: '/tech_logo/postgre.png' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: '/tech_logo/javascript.png' },
      { name: 'TypeScript', logo: '/tech_logo/typescript.png' },
      { name: 'Python', logo: '/tech_logo/python.png' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: '/tech_logo/git.png' },
      { name: 'GitHub', logo: '/tech_logo/github.png' },
      { name: 'VS Code', logo: '/tech_logo/vscode.png' },
      { name: 'Postman', logo: '/tech_logo/postman.png' },
      { name: 'Compass', logo: '/tech_logo/mc.png' },
      { name: 'Vercel', logo: '/tech_logo/vercel.png' },
      { name: 'Netlify', logo: '/tech_logo/netlify.png' },
      { name: 'Figma', logo: '/tech_logo/figma.png' },
    ],
  },
];

// Skill Category Component
const SkillCategory = ({ title, skills }) => (
  <div>
    <hr className="mb-2 border-2 border-gray-300 dark:border-gray-700" />
    <h3 className="text-lg font-bold text-blue-600 dark:text-cyan-400 text-center mb-2 font-tinos" lang="en">{title}</h3>
    <hr className="mb-2 border-2 border-gray-300 dark:border-gray-700" />
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
      {skills.map((skill, i) => (
        <figure key={i} className="flex flex-col items-center text-center">
          <Image
            src={skill.logo}
            alt={`Logo for ${skill.name} technology`}
            width={36}
            height={36}
            className="object-contain"
          />
          <figcaption className="text-xs mt-1 text-gray-700 dark:text-gray-100" lang="en">{skill.name}</figcaption>
        </figure>
      ))}
    </div>
  </div>
);

// Main Section
export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-[calc(100vh-70px)] w-full overflow-hidden py-10 px-4 sm:px-8 bg-gradient-to-b from-slate-300 via-gray-300 to-gray-400 dark:from-slate-800 dark:via-zinc-700 dark:to-gray-800"
      role="region"
      aria-label="Skills section"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Technical Skills",
            description: "List of technical skills and tools mastered by Rahul Yadav, a MERN stack developer.",
            itemListElement: SkillsInfo.flatMap((category, index) =>
              category.skills.map((skill, skillIndex) => ({
                "@type": "Skill",
                position: index * 10 + skillIndex + 1,
                name: skill.name,
                description: `Proficiency in ${skill.name} as part of ${category.title} skills.`,
              }))
            ),
          }),
        }}
      />
      <h2 className="text-3xl font-bold text-center dark:text-white mt-5 mb-5 md:mt-10 md:mb-5">
        My <span className="dark:text-cyan-400 text-blue-500">Skills</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center text-base sm:text-lg font-code mb-10" lang="en">
        A collection of my technical skills and expertise honed through various projects and experiences.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.02}
          transitionSpeed={700}
          gyroscope={true}
          className="opacity-90 bg-white dark:bg-slate-900 rounded-xl shadow-md p-5 border border-gray-300 dark:border-gray-700 flex flex-col gap-4 min-h-[360px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          tabIndex={0}
          aria-label="Frontend and Backend skills"
        >
          <SkillCategory title="Frontend" skills={SkillsInfo[0].skills} />
          <SkillCategory title="Backend" skills={SkillsInfo[1].skills} />
        </Tilt>
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.02}
          transitionSpeed={700}
          gyroscope={true}
          className="opacity-90 bg-white dark:bg-slate-900 rounded-xl shadow-md p-5 border border-gray-300 dark:border-gray-700 flex flex-col gap-4 min-h-[360px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          tabIndex={0}
          aria-label="Languages and Tools skills"
        >
          <SkillCategory title="Languages" skills={SkillsInfo[2].skills} />
          <SkillCategory title="Tools" skills={SkillsInfo[3].skills} />
        </Tilt>
      </div>
    </section>
  );
}