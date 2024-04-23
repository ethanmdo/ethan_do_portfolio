import React from "react";
import "../styles/tailwind.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const professionalExperiences = [
    {
      role: "SWE Intern",
      company: "CapTech",
      period: "June 2024 - August 2024",
      url: "https://www.captechconsulting.com/",
    },
    {
      role: "Undergraduate Research Assistant",
      company: "Reach Lab VT",
      period: "February 2024 - Present",
      url: "https://reach.cs.vt.edu/",
    },
    {
      role: "Sponsorship Organizer",
      company: "VTHacks",
      period: "January 2024 - Present",
      url: "https://vthacks.com/",
    },
    {
      role: "SWE Intern",
      company: "Olympus Solutions Inc.",
      period: "June 2023 - October 2023",
      url: "https://www.olympussolutionsinc.com/",
    },
  ];

  const educations = [
    {
      degree: "Bachelors of Science in Computer Science",
      school: "Virginia Tech",
      period: "August 2022 - Present",
      description: "GPA: 3.98",
      url: "https://cs.vt.edu/",
    },
    {
      degree: "Advanced High School Diploma",
      school: "John Champe High School",
      period: "August 2018 - June 2022",
      description: "GPA: 4.57",
      url: "https://www.lcps.org/JCH",
    },
  ];

  return (
    <main
      id="experience-section"
      className="min-h-screen bg-#121212 text-white flex flex-col items-center pt-24 md:pt-28"
    >
      <section className="text-center p-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-0">Experience</h2>
      </section>

      <section className="w-full max-w-4xl p-4">
        <h3 className="text-4xl font-semibold mb-6">
          <FaBriefcase className="inline-block mr-2" /> Professional
        </h3>
        {professionalExperiences.map((exp, index) => (
          <a
            key={index}
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:glow transition duration-300"
          >
            <div className="border border-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="text-2xl font-bold">
                {exp.role} at {exp.company}
              </h4>
              <p className="text-gray-400">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          </a>
        ))}
      </section>

      <section className="w-full max-w-4xl p-4">
        <h3 className="text-4xl font-semibold mb-6">
          <FaGraduationCap className="inline-block mr-2" /> Education
        </h3>
        {educations.map((edu, index) => (
          <a
            key={index}
            href={edu.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:glow transition duration-300"
          >
            <div className="border border-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="text-2xl font-bold">{edu.degree}</h4>
              <p className="text-gray-400">
                {edu.school}, {edu.period}
              </p>
              <p>{edu.description}</p>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
};

export default Experience;
