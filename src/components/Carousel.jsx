import React, { useState, useEffect } from 'react';
import first from '../assets/1st.png';
import second from '../assets/second.png';
import third from '../assets/third.png';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Carousel = () => {
  const slides = [
    first,
    second,
    third
  ];

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  let nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  // Auto-rotate slides every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 1 second

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, [current]); // Re-run effect whenever `current` changes

  return (
    <div className='w-full overflow-hidden relative'>
      <div className={`mt-28 flex transition-transform ease-out duration-300`} style={{
        width: `${slides.length * 100}%`, // Ensure the container is as wide as the number of slides
        transform: `translateX(-${current * (100 / slides.length)}%)`,
      }}>
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt={`Slide ${index + 1}`} className='w-full object-cover' /> // Make the image take full width
        ))}
      </div>
      {/* arrow for slide */}
      <div className='mt-16 absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between items-center px-2 text-3xl'>
        <button onClick={previousSlide} className='hover:text-4xl text-gray-400'>
          <IoIosArrowBack />
        </button>
        <button onClick={nextSlide} className='hover:text-4xl text-gray-400'>
          <IoIosArrowForward />
        </button>
      </div>
      {/* Navigation circle for bottom slide */}
      <div className='absolute bottom-5 left-0 right-0 flex justify-center gap-2'>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === current ? 'bg-primary' : 'bg-white'} cursor-pointer`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
