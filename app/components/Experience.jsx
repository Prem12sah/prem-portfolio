import React from 'react';
import { motion } from "motion/react";

const experienceData = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: "Experienced" },
      { name: "CSS", level: "Experienced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React", level: "Experienced" },
      { name: "Tailwind CSS", level: "Experienced" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Java", level: "Experienced" },
      { name: "Spring", level: "Experienced" },
      { name: "Git, GitHub", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
      { name: "RESTful APIs", level: "Intermediate" },
    ],
  },
  {
    title: "Mobile App Development",
    skills: [
      { name: "Android Studio", level: "Experienced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Java", level: "Experienced" },
      { name: "Swift", level: "Beginner" },
    ],
  },
];

const CheckIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2.5" fill="white" />
    <path d="M7 13l3 3 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Experience = ({ isDarkMode }) => {
  return (
    <motion.div id="experience" className="w-full px-[4%] py-20 scroll-mt-20 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-5xl font-bold mb-12"
      >
        Experience
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {experienceData.map((section, idx) => (
          <div
            key={section.title}
            className="flex-1 bg-white dark:bg-gray-900 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-md p-8 flex flex-col items-center min-w-[260px] max-w-[370px] mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">{section.title}</h3>
            <ul className="flex flex-col gap-6 w-full">
              {section.skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-4">
                  <span className="flex-shrink-0">
                    <CheckIcon className="w-7 h-7 text-black dark:text-white" />
                  </span>
                  <div>
                    <span className="font-semibold text-lg text-gray-900 dark:text-white">{skill.name}</span>
                    <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">{skill.level}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience; 