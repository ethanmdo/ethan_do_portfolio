import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/tailwind.css";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  // Define scrollToSection function here, outside useEffect
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && nav) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // You don't need scrollToSection inside useEffect anymore
    return () => window.removeEventListener("resize", handleResize);
  }, [nav]);

  const links = [
    { id: "home-section", link: "home" }, // Ensure id matches your actual section IDs
    { id: "about-section", link: "about" },
    { id: "experience-section", link: "experience" },
    { id: "contact-section", link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-custom-dark fixed z-50 border-b border-white border-opacity-50">
      <div>
        <h1 className="text-4xl font-bold ml-2">DONUT.</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 nav-link cursor-pointer capitalize text-lg hover:text-white font-medium transition-colors duration-300 relative"
            onClick={() => scrollToSection(id)}
          >
            <span className="block relative">{link}</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 hover:w-full"></span>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className={`cursor-pointer pr-4 z-10 md:hidden transition-transform duration-300 nav-toggle ${
          nav ? "rotate-90" : ""
        }`}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black md:hidden nav-content ${
            nav ? "active" : ""
          }`}
        >
          {links.map(({ id, link }, index) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium py-6 text-3xl nav-link"
              onClick={() => {
                scrollToSection(id);
                setNav(false); // This will close the mobile menu after clicking
              }}
              style={{
                animation: `slideFadeIn 0.5s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                transform: "translateY(-10px)",
              }}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
