import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/tailwind.css";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && nav) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [nav]);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" },
    { id: 4, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-white fixed nav">
      <div>
        <h1 className="text-4xl font-bold ml-2">DONUT.</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 nav-link cursor-pointer capitalize text-lg hover:text-black font-medium transition-colors duration-300 relative"
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
        <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white md:hidden nav-content ${nav ? 'active' : ''}`}>
          {links.map(({ id, link }, index) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium py-6 text-3xl nav-link"
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
