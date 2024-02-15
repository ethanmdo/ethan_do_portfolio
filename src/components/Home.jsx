import React from "react";
import TypingEffect from "../ui/TypingEffect";
import Slideshow from "./Slideshow";

import drinkImage from "../assets/drink.png";
import europe from "../assets/europe.png";
import four from "../assets/four.png";
import ally from "../assets/ally.png";
import building from "../assets/building.png";
import glasses from "../assets/glasses.png";
import sunset from "../assets/sunset.png";
import town from "../assets/town.png";
import water from "../assets/water.png";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Home = () => {
  const slideshowImages = [
    water,
    drinkImage,
    building,
    europe,
    ally,
    four,
    sunset,
    glasses,
    town,
  ];

  return (
    <main
      id="home-section"
      className="min-h-screen bg-#121212 text-white flex flex-col justify-center items-center pt-24 md:pt-28"
    >
      <section className="text-center p-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-0 name-home">
          Ethan Do
        </h2>
      </section>

      <section className="text-center p-4 mt-0">
        {" "}
        <p className="text-xl font-light">
          <TypingEffect />
        </p>
      </section>

      <section className="w-full max-w-4xl p-4">
        <Slideshow images={slideshowImages} />
      </section>

      <section className="mt-0">
        <div className="flex space-x-4 justify-center">
          <a
            href="https://www.linkedin.com/in/ethanmdo/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <FaLinkedin className="text-4xl hover:text-blue-700" />
          </a>
          <a
            href="https://github.com/ethanmdo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <FaGithub className="text-4xl hover:text-gray-700" />
          </a>
          <a
            href="https://www.instagram.com/ethanmdo/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <FaInstagram className="text-4xl hover:text-pink-600" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCYzuWSmay1Bp-IIbynnQffg"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <FaYoutube className="text-4xl hover:text-red-600" />
          </a>
          <a
            href="https://twitter.com/ethanmdo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <FaXTwitter className="text-4xl hover:text-blue-400" />{" "}
            {/* Adjust the icon and color as necessary */}
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
