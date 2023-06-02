import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence} from "framer-motion";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    const Zeeb = document.querySelector(".hi");
    const bgc = document.querySelector(".bgc");
    const p = document.querySelector(".ho");
    const btn = document.querySelector(".he");
    function updateBackgroundPosition() {
      let xOffset = -(mousePosition.x - window.innerWidth / 4) / 100;
      let yOffset = -(mousePosition.y - window.innerHeight / 4) / 100;
      Zeeb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      p.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      btn.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      bgc.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    }

    updateBackgroundPosition();

    window.addEventListener("mousemove", updateBackgroundPosition);

    return () => {
      window.removeEventListener("mousemove", updateBackgroundPosition);
    };
  }, [mousePosition]);

  return (
    <AnimatePresence mode='wait'>

    <div
      id="home"
      className="bg-bg-yz h-screen bg-cover bg-center  z-0 bg-repeat p-20 font-nav bgc"
      onMouseMove={handleMouseMove}
    >
      <div className="flex items-end px-5 py-8  absolute top-0 left-0 right-0 bottom-0 bg-black/70 text-white  ">
        <div className="mb-5">
          <motion.h3 
            
          className="my-3 flex items-center">
            Follow Us
            <Link href="https://www.instagram.com/zeebturney/">
              <motion.div
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -200, opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <FontAwesomeIcon className=" w-6 mx-1" icon={faInstagram} />
              </motion.div>
            </Link>
            <Link href="https://Instagram.com">
              <motion.div
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -200, opacity: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <FontAwesomeIcon className="w-6 " icon={faYoutube} />
              </motion.div>
            </Link>
            <Link href="https://Instagram.com">
              <motion.div
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -200, opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <FontAwesomeIcon className="w-6 mx-1" icon={faFacebook} />
              </motion.div>
            </Link>
          </motion.h3>
          <motion.h1
            initial={{ x: -400, opacity: 0 }}
            animate={{x:0,opacity: 1 }}
            transition={{ duration: 1,delay:1.5}}
            className="border border-stone-100 p-1  text-7xl max-md:text-2xl hi"
          >
            Zeeb Tournament
          </motion.h1>
          <motion.p 
           initial={{ x: -400, opacity: 0 }}
           animate={{x:0,opacity: 1 }}
           transition={{ duration: 1,delay:1.5}}
          className=" w-80 max-md:w-1/1.5 max-sm:w-3/4 ho">
            Bergabunglah bersama kami dan buktikan kemampuanmu dalam permainan
            Mobile Legends yang penuh tantangan!
          </motion.p>
          <Link scroll={false} href="#fe">
            <motion.button 
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 200, opacity: 0 }}
              transition={{ duration: 1, delay:2 }}
            className="border border-stone-100 mt-2  p-0.5 he ">
              Register Now ⇨
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
    </AnimatePresence>
  );
}
