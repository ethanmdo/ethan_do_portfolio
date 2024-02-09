import React, { useState, useEffect } from "react";
import "../styles/tailwind.css"; // Make sure to create this CSS file

const TypingEffect = () => {
  const roles = ["software developer", "student", "designer", "blogger"]; // Add more roles as needed
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typing effect logic
  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : subIndex === roles[index].length ? 500 : 100, parseInt(Math.random() * 200)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, roles]);

  return (
    <div className="typing-effect font-inter font-normal">
      <p>
        I am a <span>{`${roles[index].substring(0, subIndex)}`}</span>
        <span className="cursor"></span>
      </p>
    </div>
  );
};

export default TypingEffect;
