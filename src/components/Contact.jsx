import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/tailwind.css";

const Contact = () => {
  return (
    <main
      id="contact-section"
      className="min-h-screen bg-#121212 text-white flex flex-col justify-center items-center pt-24 md:pt-28"
    >
      <section className="text-center p-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">Contact Me</h2>
      </section>

      <section className="w-full max-w-lg p-8 flex flex-col items-center text-lg bg-gray-800 rounded-xl shadow-lg mb-4">
        <div className="flex items-center text-white mb-4">
          <FaEnvelope className="mr-4 text-2xl" />
          <a
            href="mailto:your.email@example.com"
            className="hover:text-gray-300"
          >
            your.email@example.com
          </a>
        </div>
        <div className="flex items-center text-white mb-4">
          <FaPhone className="mr-4 text-2xl" />
          <a href="tel:+123456789" className="hover:text-gray-300">
            +1 (234) 567-890
          </a>
        </div>
        <div className="flex items-center text-white">
          <FaMapMarkerAlt className="mr-4 text-2xl" />
          <span>123 Your Street, Your City, Your Country</span>
        </div>
      </section>

      <section>
        <div className="flex space-x-4 justify-center">
          <a
            href="https://www.linkedin.com/in/ethanmdo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin className="text-4xl" />
          </a>
          <a
            href="https://github.com/ethanmdo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <FaGithub className="text-4xl" />
          </a>
          <a
            href="https://www.instagram.com/ethanmdo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram className="text-4xl" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCYzuWSmay1Bp-IIbynnQffg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <FaYoutube className="text-4xl" />
          </a>
          <a
            href="https://twitter.com/ethanmdo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaXTwitter className="text-4xl hover:text-blue-400" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
