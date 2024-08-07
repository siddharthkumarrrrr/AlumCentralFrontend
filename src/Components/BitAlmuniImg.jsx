import React, { useEffect, useState } from 'react';
import './BitAlmuniImg.css';
import BuildingImg from '../images/Building.jpg';
import AlumCentralImg from '../images/logo.png';

function BitAlmuniImg() {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(false);
    }, 4000);
  }, []);

  return (
    <>
<div className="w-screen flex justify-center ">
  {showContent && (
    <div id="content-container" className="relative w-full">
      {/* Image Container */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[400px] flex justify-center items-center overflow-hidden">
        <img 
          src={BuildingImg} 
          alt="Bit Mesra Building" 
          id="university-image" 
          className="w-full h-full object-cover opacity-60" // Adjust the opacity here
        />
       <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center">
  <div>
    <h3 className="animate__animated animate__backInLeft animate__delay-1s text-lg md:text-2xl">
      <span className="text-pink-500 p-2 rounded-md" style={{color: 'rgba(255, 0, 128, 0.8)'}}>
        Welcome To👋
      </span>
    </h3>
  </div>
  <div className="mt-4"> {/* Add margin-top for gap */}
    <h2 className="animate__animated animate__flipInX animate__delay-2s text-xl md:text-3xl lg:text-4xl">
      <span className="text-yellow-500 p-2 rounded-md" style={{color: 'rgba(0, 128, 255, 0.8)'}}>
        Bit Mesra's Alumcentral
      </span>
    </h2>
  </div>
</div>

      </div>
    </div>
  )}
</div>





              

      {!showContent && (
        <div id="content-container1" className='relative flex flex-col items-center'>
    <div id="alumCentralLogo" className='relative z-10'>
        <img className='max-w-full h-auto' src={AlumCentralImg} alt="alum logo" />
    </div>

    {/* <div id="other-discription" className="relative animate__animated animate__fadeIn animate-delay-4.3s text-center text-white mt-4 max-w-md mx-auto px-4 lg:px-0 hidden lg:block">
    <p>
    "Learn from those who've walked the path before you. AlumCentral connects you with alumni who share their wisdom, experiences, and insights, helping you navigate your journey and build a brighter future. Embrace their knowledge, leverage their successes, 
    and let their lessons light your way to success."
    </p>
</div> */}



    <img src='bit_right_pov.jpeg' alt="background" id="other-image" className="animate__animated animate__fadeIn animate-delay-4.3s max-w-full h-auto" />
</div>

      )}
    </>
  );
}

export default BitAlmuniImg;