
import { motion } from "framer-motion";
import { useState,useEffect, useRef } from "react";
function Register() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }


  

const input = {
  initialState:{
    y:50,
    rotate:-10,
    opacity:0
  },
  onviewState:{
    y: 0,
    rotate: 0,
    opacity:1,
    transition: {
      delay:0.5,
      duration: 0.5
    }
  }
}














  useEffect(() => {
    const Zeeb = document.querySelector('.gr');
    function updateBackgroundPosition() {
      let xOffset = -(mousePosition.x - (window.innerWidth / 4)) / 50;
      let yOffset = -(mousePosition.y - (window.innerHeight / 4)) / 50;

      Zeeb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    }

    updateBackgroundPosition();

    window.addEventListener('mousemove', updateBackgroundPosition);

    return () => {
      window.removeEventListener('mousemove', updateBackgroundPosition);
    }
  }, [mousePosition]);
  return (
    <div id="register"  onMouseMove={handleMouseMove} className='flex justify-around flex-col pad-sidik pt-20 font-nav text-white bg-orange-700'>
       <div className="flex justify-start text-black  ms-6">
        <motion.h1 
         initial={{
          x:-100,
          rotate:-10,
          opacity:0
        }}
        whileInView={{
          x: 0,
          rotate: 0,
          opacity:1,
          transition: {
            type: "spring",
            bounce: 0.4,
            delay:0.5,
            duration: 1
          }
        }}
        className="text-5xl max-md:text-3xl p-1  clip-path">Register</motion.h1>
      </div>
      <div className="flex flex-row max-md:flex-col pt-7 justify-around h-4/5">
        <div  className="  border-8 bg-black rounded-ss-3xl rounded-ee-3xl mb-10 flex justify-center max-md:w-full items-center w-4/12">
        <motion.img
        initial={{
          opacity:0,
          
        }} 
        whileInView={{
          opacity:1,
          transition:{
            duration:0.8,
          }
        }}
         className="w-10/12 gr" src='/grangger.png'/>
        </div>

        <div className="w-6/12 max-md:w-full pt-7">
        <div  className=" flex  flex-col items-center text-white">
          <motion.textarea variants={input} initial="initialState" whileInView="onviewState" type="text" placeholder="Squad Name?" className="bg-black rounded-ss-3xl mb-6 max-md:w-10/12 rounded-ee-3xl resize-none w-7/12 border border-gray-300 rounded-lg py-2 px-4"/>
          <motion.textarea variants={input} initial="initialState" whileInView="onviewState" type="text" placeholder="Player1 ID?" className="bg-black mb-6 rounded-ss-3xl  max-md:w-10/12 rounded-ee-3xl resize-none w-7/12 border border-gray-300 rounded-lg py-2 px-4"/>
          <motion.textarea variants={input} initial="initialState" whileInView="onviewState" type="text" placeholder="Player2 ID?" className="bg-black mb-6 rounded-ss-3xl  max-md:w-10/12 rounded-ee-3xl resize-none w-7/12 border border-gray-300 rounded-lg py-2 px-4"/>
          <motion.textarea variants={input} initial="initialState" whileInView="onviewState" type="text" placeholder="Player3 ID?" className="bg-black mb-6 rounded-ss-3xl max-md:w-10/12 rounded-ee-3xl resize-none w-7/12 border border-gray-300 rounded-lg py-2 px-4"/>
          <motion.textarea variants={input} initial="initialState" whileInView="onviewState" type="text" placeholder="Player4 ID?" className="bg-black mb-6 rounded-ss-3xl  max-md:w-10/12 rounded-ee-3xl resize-none w-7/12 border border-gray-300 rounded-lg py-2 px-4"/>
          <motion.textarea variants={input} initial="initialState" whileInView="onviewState" type="text" placeholder="Player5 ID?" className="bg-black rounded-ss-3xl  max-md:w-10/12 rounded-ee-3xl resize-none w-7/12 border border-gray-300 rounded-lg py-2 px-4"/>
        </div>
        <div className="flex justify-end mt-3">
          <motion.button 
          initial={{
            x:100,
            rotate:-10,
            opacity:0,
          }}
          whileInView={{
            x: 0,
            rotate: 0,
            opacity:1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 2
            }
          }}
           className="bg-black p-4 rounded-ss-3xl mb-6 rounded-ee-3xl hover:bg-green-800 me-3"> Send</motion.button>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Register