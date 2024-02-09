import React, { useState } from "react";

const Slideshow = ({ images }) => {
  const imagesPerView = 2;
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, images.length - imagesPerView));
  };

  const prev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const imageMargin = 5; // Margin on each side of an image
  const containerWidth = 600; // The width of the slideshow container

  // Width of one image, accounting for the margin on both sides
  const imageWidth = (containerWidth / imagesPerView) - (imageMargin * 2);

  // The translateX value should consider the total width of 2 images plus the margin between them
  const translateX = -(currentIndex * (imageWidth + (imageMargin * 2))) + 'px';

  return (
    <div className="slideshow-container">
      <div
        className="slideshow"
        style={{
          transform: `translateX(${translateX})`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="slideshow-image"
            style={{ width: `${imageWidth}px`, margin: `0 ${imageMargin}px` }}
          />
        ))}
      </div>
      <div className="slideshow-controls">
        <button onClick={prev} disabled={currentIndex === 0} className="slideshow-button">&#10094;</button>
        <button onClick={next} disabled={currentIndex >= images.length - imagesPerView} className="slideshow-button">&#10095;</button>
      </div>
    </div>
  );
};

export default Slideshow;
