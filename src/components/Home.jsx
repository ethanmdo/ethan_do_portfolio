import React from "react";
import TypingEffect from "../ui/TypingEffect";
import Slideshow from "./Slideshow"; // Ensure this path is correct based on your project structure

// Importing images
import drinkImage from "../assets/drink.png";
import europe from "../assets/europe.png";
import four from "../assets/four.png";
import ally from "../assets/ally.png";
import building from "../assets/building.png";
import glasses from "../assets/glasses.png";
import sunset from "../assets/sunset.png";
import town from "../assets/town.png";
import water from "../assets/water.png";

const Home = () => {
  // Array of imported images
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
    <main class="min-h-screen bg-white text-black flex flex-col justify-center items-center pt-10 md:pt-20">
      {/* Typing Effect Section */}
      <section className="text-center p-4">
        <p className="text-xl font-light">
          <TypingEffect />
        </p>
      </section>

      {/* Intro Section */}
      <section className="text-center p-4">
        <h2 className="text-3xl font-bold mb-4">Welcome to DONUT.</h2>
      </section>

      {/* Slideshow Section */}
      <section className="w-full max-w-4xl p-4">
        <Slideshow images={slideshowImages} />
      </section>

      {/* Call-to-Action Button */}
      <section className="mt-8">
        <button className="bg-black text-white font-medium py-2 px-6 rounded hover:bg-gray-800 transition-colors duration-300">
          Explore More
        </button>
      </section>
    </main>
  );
};

export default Home;
