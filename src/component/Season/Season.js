import Link from "next/link";
import { motion} from "framer-motion";
import { useRef } from "react";
export default function hiu() {
  const sliderRef = useRef(null)
  const handleClick = () => {
    const desertSlide = sliderRef.current.querySelector('#cujj');
    const scrollAmount =  desertSlide.offsetTop 
    sliderRef.current.scrollTo({ top: scrollAmount, behavior: 'smooth' });

  }
  
  return (
  
    <section>
      <div
        id="season"
        className="h-screen valir flex flex-col justify-between z-3 overflow-hidden pt-20 font-nav text-white"
      >
        <div className="flex justify-end max-md:justify-start max-md:ms-6  me-6">
          <h1 className="text-5xl max-md:text-3xl text-black p-1 clip-path">
            Season
          </h1>
        </div>
        <div className="absolute h-screen flex w-screen items-center  justify-start">
          <motion.img
            initial={{
              x: -300,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.4,
              },
            }}
            src="/valir.png"
            className="vr w-4/12 max-md:w-screen"
          />
        </div>
        <div  ref={sliderRef}  className="flex  flex-col h-48 overflow-x-hidden  items-center overflow-y-scroll w-screen py-6  heyo  mt-8 hover:cursor-all-scroll">
            <div id="cujj" className="text-6xl flex justify-center text-center tigad py-3 max-lg:w-screen  w-5/12 max-md:w-screen  max-sm:text-5xl  my-7">
              <Link href="/season/1" className="clip-season">
                <h1  className=" p-6 bg-white/10">Season 1</h1>
              </Link>
            </div>
           
        </div>

        <div className="w-sreen mb-2 flex justify-center items-center">
          <h1  onClick={handleClick} >Current season</h1>
        </div>
      </div>
    </section>
  );
}
