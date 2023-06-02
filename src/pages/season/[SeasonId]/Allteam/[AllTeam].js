import React from "react";
import NavSeason from "@/component/navbar/NavSeason";
import { useRouter } from "next/router";
import SwiperTeam from "@/component/Swipe/SwiperTeam";
import {  motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";


function AllTeam() {
  const router = useRouter();
  const seasonId = router.query.SeasonId;
  return (
    <>
  
      <NavSeason seasonId={seasonId} />
    <div className=" h-screen b  font-nav  pb-10 flex flex-col justify-around">
      <motion.h1 
      initial={{
        opacity:0,
        y:-100,
      }}
      animate={{
        y:0,
        opacity:1
      }}
      transition={{
        delay:0.5
      }}
      className="text-center max-md:text-2xl left-1 absolute top-0 text-white text-4xl flex"><FontAwesomeIcon className="mx-2" width={"40px"} icon={faPeopleGroup}/>Registered Team</motion.h1>
    
   
   <motion.div 
   initial={{
    opacity:0,
   scale:0,
   rotateY:3600
    
   }}
   animate={{
    scale:1,
    rotateY:0,
     opacity:1,
    
   }}
   transition={{
    duration:2.5,
    delay:1
   }}
   >

      <SwiperTeam/>
   </motion.div>
   
     
    </div>
    </>
  );
}

export default AllTeam;