import React from "react";
import project1Image from "../assets/cargo.png";
import project2Image from "../assets/active.png";
import project3Image from "../assets/green.png";

const Projects = () => {
  const projects = [
    {
      title: "CargoGuardian",
      image: project1Image,
      description:
        "A mobile application mitigating risk for logistics companies.",
      link: "https://devpost.com/software/cargoguardian",
    },
    {
      title: "ActiveTrackR",
      image: project2Image,
      description:
        "A fitness web app that encourages healthy living for all users.",
      link: "#",
    },
    {
      title: "GreenThreads",
      image: project3Image,
      description:
        "A website aiming to eliminate fast fashion and reduce carbon footprint.",
      link: "https://devpost.com/software/greenthreads",
    },
  ];

  return (
    <main id="projects-section" className="projects-container ">
      <section className="text-center p-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-0 pb-12">Projects</h2>
      </section>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-description-overlay">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-project"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
