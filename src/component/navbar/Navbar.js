import Link from "next/link"
import { faBars,faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useScroll, useSpring } from "framer-motion";

export default function navbar() {
const [sideBar,setSidebar] = useState(false)
const [onscrool,setonScrool] = useState(false)
const [activeSection, setActiveSection] = useState('home');
const { scrollYProgress } = useScroll();
const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
});
const handleClick =  () => {
  setSidebar(!sideBar)
}

const handleActive = (section) => {
setActiveSection(section)
}
useEffect(() => {
  window.addEventListener('scroll',(e) => {
  let scY = window.scrollY
  if(scY <= 100){
   setonScrool(false)
  }else{
    setonScrool(true)
  }
 
  })
},[])
  return (
    <>
    <nav  className={onscrool ? "bg-black/70 w-full  text-white shadow-sm fixed z-10 bg-home bg-cover bg-no-repeat bg-center" : "w-full  text-white shadow-sm fixed z-10 bg-home bg-cover bg-no-repeat bg-center"}>
      <div className="w-full flex items-center h-20 text-base max-md:justify-around ">
        <div className="w-1/2  max-md:mx-0 mx-20 font-bold text-white">
          <motion.img 
           initial={{opacity:0,x:100}}
           animate={{opacity:1,x:0}}
           transition={{duration:1}}
          src="/Brosur logo ML.png" className=" w-28"/>
        </div>
        <div className={sideBar ? "w-1/2 flex justify-center ease-in duration-300 font-nav max-md:-right-0 max-md:top-0 max-md:flex-col max-md:absolute max-md:text-center max-md:w-screen max-md:pt-9 max-md:bg-black/100  max-md:h-screen hov" : "w-1/2 flex justify-center font-nav  max-md:flex-col max-md:absolute max-md:-right-full max-md:top-0  ease-out duration-300 max-md:text-center max-md:w-screen max-md:pt-9 max-md:bg-black/100  max-md:h-screen hov"}>
          <Link 
          href="#home"
          scroll={false}
          className={`text-lg py-2 px-3  max-md:text-3xl text-white/70 max-md:pb-8 font-semibold hiv ${activeSection === "home" ? "active" : ""}`}
          onClick={() => handleActive('home')}
          >
          <motion.h1
          initial={{opacity:0,x:100}}
          animate={{opacity:1,x:0}}
          transition={{duration:1,delay:0.2}}
          >Home</motion.h1>
          </Link>
          <Link 
           scroll={false}
          href="#season"
          className={`text-lg py-2 px-3  max-md:text-3xl text-white/70 max-md:pb-8 font-semibold hiv ${activeSection === "season" ? "active" : ""}`}
          onClick={() => handleActive('season')}
          >
          <motion.h1
           initial={{opacity:0,x:100}}
           animate={{opacity:1,x:0}}
           transition={{duration:1,delay:0.5}}
          >Season</motion.h1>
          </Link>
          <Link 
          href="#price"
          scroll={false}

           className={`text-lg py-2 px-3  max-md:text-3xl max-md:pb-8 text-white/70 font-semibold hiv ${activeSection === "price" ? "active" : ""}`}
          onClick={() => handleActive('price')}
          >
          <motion.h1
           initial={{opacity:0,x:100}}
           animate={{opacity:1,x:0}}
           transition={{duration:1,delay:0.8}}
          >Price</motion.h1>
          </Link>
          <Link 
          href="#register"
          scroll={false}
          className={`text-lg py-2 px-3  max-md:text-3xl max-md:pb-8  text-white/70 font-semibold hiv ${activeSection === "req" ? "active" : ""}`}
          onClick={() => handleActive('req')} 
          >
          <motion.h1
           initial={{opacity:0,x:100}}
           animate={{opacity:1,x:0}}
           transition={{duration:1,delay:1}}
          >Register</motion.h1>
          </Link>
        </div>
        <div className="text-white md:hidden text-end z-20">
        {sideBar ? <FontAwesomeIcon className="w-6" onClick={handleClick} icon={faCircleXmark}/> : <FontAwesomeIcon className="w-6" icon={faBars} onClick={handleClick}/>}  
        </div>
      </div>
      <motion.div style={{scaleX}} className='progress-bar'/>
    </nav>
    </>
  )
}
