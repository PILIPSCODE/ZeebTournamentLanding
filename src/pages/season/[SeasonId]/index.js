

import React, { useState } from "react";
import { useRouter } from "next/router";
import NavSeason from "@/component/navbar/NavSeason";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faArrowAltCircleRight,
  faCoins,
  faDollar,
  faGift,
  faInfoCircle,
  faMoneyBill1Wave,
  faPhone,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function index() {
  const router = useRouter();
  const { SeasonId, StatistikId } = router.query;










  const [open,setOpen] = useState(false)
  return (
    <div className="h-max font-nav bg-blue lg:h-screen bg-gray-950  ">
      <NavSeason seasonId={SeasonId} />
      <motion.h1
       initial={{
        x:-200,
        opacity:0
        
      }}
      animate={{
        x:0,
        opacity:1,
        transition:{
          duration:0.5,
          delay:0.7
        }
      }} 
       className=" text-2xl h-1/6 mb-6 md:text-4xl flex items-start  ">
        <FontAwesomeIcon width={"40px"} icon={faInfoCircle} />
        Information
      </motion.h1>
      <div className="flex justify-center w-full max-lg:flex-col  max-lg:items-center">
        <div className="flex justify-end max-lg:justify-center items-end w-1/2 max-lg:w-11/12  max-lg:me-0 me-4 mb-4">
          <motion.div 
           animate={open? {background:"#EA580C"} : {background:"none",transition:{duration: 0.2,delay:1.5}}}
          className="text-white w-full h-48 rounded-tl-3xl max-lg:rounded-xl  sm:w-1/2">
            <motion.h3  initial={false}
      animate={open ? {
        opacity:1,
        y:0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
      } :{ opacity:0,y:-200,transition: { duration: 0.2 ,delay:1.5} }} className="text-sm  pointer-events-none bg-black rounded-md mx-2 mt-2">
              Welcome to Zeeb Tournament,this is information About Season 1.
            </motion.h3>
            <motion.h3
            initial={{
              y:-200,
              opacity:0
              
            }}
            animate={{
              y:0,
              opacity:1,
              transition:{
                duration:0.5,
                delay:0.7
              }
            }} 
            className="text-center text-base mt-5">
              Click This Button to More information
            </motion.h3>
            <div className="text-center flex justify-center  mt-2">
              <FontAwesomeIcon width={"40px"} className={ open ? " max-lg:-rotate-90  rotate-180" : "    max-lg:rotate-90"} icon={faArrowAltCircleRight} onClick={() => setOpen(!open)} />
            </div>
          </motion.div>
        </div>
        <div className="flex justify-start  max-lg:justify-center items-end w-1/2 max-lg:w-11/12 mb-4 ">
          <motion.div initial={false}
      animate={open ? {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 300, damping: 24,delay:0.5 }
      } :{ opacity: 0, x: -100, transition: { duration: 0.2 ,delay:1} }} className="bg-indigo-900  w-full h-48 max-md:rounded-xl rounded-tr-3xl  sm:w-1/2">
            <div className="ms-2 h-1/2">
              <h1 className="bg-black flex">
                <FontAwesomeIcon width={"20px"}  icon={faDollar} />Price
              </h1>
              <h1 className="mt-2">25K/Team bonus free 25dm/Team</h1>
            </div>
            <div className="h-1/2 ms-2 flex">
              <div>
              <h1 className="bg-white pr-1 text-black relative ">
                <FontAwesomeIcon className="w-10" icon={faUsers} />
                16 Slots
              </h1>
              </div>
              <div className="flex items-center justify-center w-1/2">
               
              </div>
            </div>
          </motion.div>
        </div>
        </div>
        <div className="flex w-full justify-center  max-lg:flex-col-reverse max-lg:items-center  ">

        <div   className="flex justify-end max-lg:justify-center w-1/2 max-lg:w-11/12">
          <motion.div initial={false}
      animate={open ? {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 300, damping: 24,delay:1.5 }
      } :{ opacity: 0, x:200, transition: { duration: 0.2 } }} className="bg-indigo-900  w-full h-48 max-lg:rounded-xl rounded-bl-3xl flex  sm:w-1/2">
           <div className="w-1/2 ">
            <h1 className="text-center flex justify-center text-white"><FontAwesomeIcon width={"25px"}  icon={faCoins}/>Payment</h1>
             <div className="flex mt-3">
                <img className="w-14" src="/Dana.png"/>
                <h1>Dana</h1>
             </div>
             <div className="flex mt-3">
                <img className="w-14" src="/gopay.png"/>
                <h1>Gopay</h1>
             </div>
             <div className="flex mt-3 text-xl ms-2">
                <h1>COD</h1>
             </div>
           </div>
           <div className="w-1/2">
            <h1 className="text-center flex justify-center text-white"><FontAwesomeIcon width={"25px"} icon={faPhone}/>Contact Us</h1>
            <div className="flex mt-3 items-center h-10 max-xl:text-xs max-lg:text-base  text-base break-all">
                <img className="w-8 max-xl:w-4 max-xl:h-4 h-8 mr-2" src="/wa.png"/>
                <h2>0894894988</h2>
             </div>
            <div className="flex mt-3 items-center h-10 max-xl:text-xs max-lg:text-base  text-base break-all">
                <img className="w-8 max-xl:w-4 max-xl:h-4  h-8 mr-2" src="/wa.png"/>
                <h2>0894090908</h2>
             </div>
           </div>
          </motion.div>
        </div>
        <div className="flex justify-start max-lg:justify-center w-1/2  ms-4 max-lg:ms-0 mb-4 max-lg:w-11/12" >
          <motion.div  initial={false}
      animate={open ? {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24,delay:1 }
      } :{ opacity: 0, y: -200, transition: { duration: 0.2,delay:0.5 } }} className=" bg-orange-600 text-white w-full h-48 max-lg:rounded-xl rounded-br-3xl  sm:w-1/2">
          <h1 className="text-center bg-indigo-900 flex justify-center"><FontAwesomeIcon width={"25px"} icon={faGift}/>PrizePool</h1>
          <div className="flex">
            <ul className="mt-8 ms-3 bg-zinc-900 rounded-lg p-1">
                <li className="mb-2 border-b">Juara 1.Rp.127.500</li>
                <li className="mb-2 border-b">Juara 2.Rp.76.500</li>
                <li>Juara 3.Rp.51.000</li>
            </ul>
          </div>
          </motion.div>
        </div>
        </div>
      
    </div>
  );
}

export default index;
