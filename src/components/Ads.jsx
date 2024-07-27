import React, { useState, useEffect } from "react";

const Ads = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["./ads1.jpg", "./ads2.jpg", "./ads3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-lg mx-auto p-4 mb-10">
      <div className="flex justify-center items-center overflow-hidden h-64">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Ad ${index + 1}`}
            className={`absolute transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ width: "500px", maxWidth: "500px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Ads;
