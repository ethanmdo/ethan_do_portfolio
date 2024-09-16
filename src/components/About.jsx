import React from "react";
import "../styles/tailwind.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiC } from "react-icons/si";
import { SiTypescript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import profilePic from "../assets/professional.png";

const About = () => {
  return (
    <main id="about-section" className="min-h-screen bg-[#121212] text-white flex flex-col justify-center items-center pt-10 md:pt-20">

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10 gap-10">
        {/* Text Section */}
        <div className="md:w-3/4 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-bold mb-2">Ethan Do</h2>
          <p className="text-xl font-light">
            Full-Stack Developer | Tech Enthusiast
          </p>
          {/* Bio & Skills Section */}
          <section className="mb-8 mt-4">
            <p>
              Third year student at Virginia Tech studying computer science
              with an emphasis on full-stack development. With a passion for
              everything technology, I am committed to learning new and
              innovative tools. As I progress in my career, I hope to continue
              contributing to projects that push the boundaries of the digital
              realm.
            </p>
          </section>
          <section>
            <h3 className="text-3xl font-bold mb-4">Skills</h3>
            <div className="flex flex-wrap justify-center md:justify-start text-4xl">
              {[
                { icon: <FaHtml5 />, label: "HTML", color: "#E34F26" },
                { icon: <FaCss3Alt />, label: "CSS", color: "#1572B6" },
                { icon: <FaJs />, label: "JavaScript", color: "#F7DF1E" },
                { icon: <FaReact />, label: "React", color: "#61DAFB" },
                {
                  icon: <SiTailwindcss />,
                  label: "Tailwind CSS",
                  color: "#38B2AC",
                },
                { icon: <FaJava />, label: "Java", color: "#007396" },
                { icon: <FaPython />, label: "Python", color: "#3776AB" },
                { icon: <SiC />, label: "C Programming", color: "#A8B9CC" },
                {
                  icon: <SiTypescript />,
                  label: "TypeScript",
                  color: "#3178C6",
                },
                {
                  icon: <TbBrandReactNative />,
                  label: "React Native",
                  color: "#61DAFB",
                },
                { icon: <SiNodedotjs />, label: "Node.js", color: "#339933" },
                { icon: <SiMongodb />, label: "MongoDB", color: "#47A248" },
              ].map((tech, index) => (
                <div key={index} className="p-2 group relative">
                  <div
                    style={{ color: tech.color }}
                    className="tooltip-icon"
                    title={tech.label}
                  >
                    {tech.icon}
                  </div>
                  <span className="tooltip-text group-hover:scale-100">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={profilePic}
            alt="Ethan Do"
            className="max-w-full h-auto object-cover rounded-lg"
            style={{ maxWidth: "300px", height: "auto" }}
          />
        </div>
      </div>
    </main>
  );
};

export default About;
