import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/tailwind.css";

export const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState("");

  useEffect(() => {
    emailjs.init("X4jKFDWe5Cs_o1s0t");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_tarrzlx", "template_juu8k3r", form.current).then(
      (result) => {
        setMessageStatus("Message sent successfully!");
        setTimeout(() => setMessageStatus(""), 5000); // Clear message after 5 seconds
      },
      (error) => {
        setMessageStatus("Failed to send the message. Please try again.");
        setTimeout(() => setMessageStatus(""), 5000); // Clear message after 5 seconds
      }
    );
  };

  return (
    <main
      id="contact-section"
      className="bg-[#121212] min-h-screen flex flex-col justify-center items-center text-white pt-10 md:pt-20"
    >
 <div className="text-center mb-10">
  <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Me</h1>
  <p className="text-xl font-light">
    Feel free to reach out through any of the platforms below or send a direct message using the form.
  </p>
</div>


<div className="flex flex-wrap justify-center items-center gap-4 mb-8">
  <a
    href="mailto:ethando@gmail.com"
    className="flex items-center group"
  >
    <FaEnvelope className="text-2xl mr-2" />
    <span className="relative">
      ethando@gmail.com
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-out"></span>
    </span>
  </a>
  <a
    href="tel:+1-703-675-6310"
    className="flex items-center group"
  >
    <FaPhone className="text-2xl mr-2" />
    <span className="relative">
      +1 (703) 675-6310
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-out"></span>
    </span>
  </a>
  <a
    href="https://www.google.com/maps/place/Northern+Virginia,+VA/@38.7267251,-78.4488438,9z/data=!3m1!4b1!4m6!3m5!1s0x89b6526c20a2797b:0x23e20b83d14e71ac!8m2!3d38.8050552!4d-77.0469862!16zL20vMDMxdGRs?entry=ttu"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center group"
  >
    <FaMapMarkerAlt className="text-2xl mr-2" />
    <span className="relative">
      Northern Virginia
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-out"></span>
    </span>
  </a>
</div>



      <div className="flex space-x-4 text-3xl mb-8">
        <a
          href="https://www.linkedin.com/in/ethanmdo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-700" />
        </a>
        <a
          href="https://github.com/ethanmdo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-gray-700" />
        </a>
        <a
          href="https://www.instagram.com/ethanmdo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-pink-600" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCYzuWSmay1Bp-IIbynnQffg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="hover:text-red-600" />
        </a>
        <a
          href="https://twitter.com/ethanmdo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="hover:text-blue-400" />
        </a>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg p-5 space-y-4 bg-[#121212] rounded-lg shadow-lg"
      >
    <input
  type="text"
  name="user_name"
  placeholder="Your Name"
  className="w-full p-3 rounded bg-[#121212] text-white border border-white focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
  required
/>
<input
  type="email"
  name="user_email"
  placeholder="Your Email"
  className="w-full p-3 rounded bg-[#121212] text-white border border-white focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
  required
/>
<textarea
  name="message"
  placeholder="Your Message"
  rows="5"
  className="w-full p-3 rounded bg-[#121212] text-white border border-white focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
  required
></textarea>
<button
  type="submit"
  className="w-full p-3 bg-[#121212] border border-white text-white font-bold rounded transition duration-300 ease-in-out hover:bg-white hover:text-black hover:border-transparent"
>
  Send Message
</button>


        {messageStatus && (
          <div className="text-center mt-4">{messageStatus}</div>
        )}
      </form>
    </main>
  );
};

export default Contact;
