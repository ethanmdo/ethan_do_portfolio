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
    <main className="min-h-screen bg-#121212 text-white flex flex-col justify-center items-center pt-24 md:pt-28">
      <section className="text-center p-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 name-home">
          Ethan Do
        </h2>
      </section>

      {/* Typing Effect Section with adjusted spacing */}
      <section className="text-center p-4 mt-2">
        {" "}
        {/* Reduced top margin */}
        <p className="text-xl font-light">
          <TypingEffect />
        </p>
      </section>

      {/* Slideshow Section */}
      <section className="w-full max-w-4xl p-4">
        <Slideshow images={slideshowImages} />
      </section>

      {/* Call-to-Action Button */}
      <section className="mt-8">
        <button className="bg-white text-black font-medium py-2 px-6 rounded border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300">
          Explore More
        </button>
      </section>
    </main>
  );
};

export default Home;
