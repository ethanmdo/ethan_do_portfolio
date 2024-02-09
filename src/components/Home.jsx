import React from "react";
import TypingEffect from "../ui/TypingEffect";

const Home = () => {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col justify-center items-center">
      {/* Typing Effect Section */}
      <section className="text-center p-4">
        <p className="text-xl font-light">
          {" "}
          {/* Adjusted font size and weight for the typing effect */}
          <TypingEffect />
        </p>
      </section>

      {/* Intro Section */}
      <section className="text-center p-4">
        <h2 className="text-3xl font-bold mb-4">Welcome to DONUT.</h2>
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
