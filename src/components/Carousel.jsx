import React, {useState} from 'react';
import first from '../assets/1st.png';
import second from '../assets/second.png';
import third from '../assets/third.png';
import { IoIosArrowForward ,IoIosArrowBack} from "react-icons/io";



const Carousel = () => {
  const slides = [
    first,
    second,
    third
  ];

  let [current,setCurrent] = useState(0);

  let previousSlide = () =>{
    setCurrent(current === 0 ? slides.length - 1 : current - 1)  
  }

  let nextSlide = () =>{
    setCurrent(current === slides.length - 1 ? 0 : current + 1)  
  }

  return (
    <div className='overflow-hidden relative '>
    <div className= {`w-full mt-28 flex transition ease-out duration-300 translate-x-[-${current*100}%]`} style={{
      transform: `translateX(-${current * 100}%)`,
    }}>
      {slides.map((slide, index) => (
        <img key={index} src={slide} alt={`Slide ${index + 1}`} />
      ))}
    </div>
    {/* arrow for slide */}
    <div className='mt-16 absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between items-center px-2 text-3xl ' >
        <button onClick={previousSlide} className='hover:text-4xl text-gray-400'>
            <IoIosArrowBack/>
        </button>
        <button onClick={nextSlide} className='hover:text-4xl text-gray-400'>
            <IoIosArrowForward/>
        </button>
    </div>
    {/*  Navigation circle for bottom slide  */}
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

    // <div className='absoulte bottom-0 py-4 flex justify-center gap-10 w-full'>
    //     {slides.map((s,i)=>{
    //         return(
    //     <div key={"circle"+1} className="rounded-full w-5 h-5 bg-white">
    //     </div>
    //     );
    //     })}
    // </div>