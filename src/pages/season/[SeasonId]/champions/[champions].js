import React, { useState } from "react";
import { useRouter } from "next/router";
import NavSeason from "@/component/navbar/NavSeason";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar, faStar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function champions() {
  const router = useRouter();
  const { SeasonId, StatistikId } = router.query;
  const [win2,setwin2] = useState(false)
  const [win1,setwin1] = useState(false)
  const [win3,setwin3] = useState(false)
  return (
    <>
      <NavSeason seasonId={SeasonId} />
      <h1 className="absolute font-nav m-3 text-4xl max-md:text-xl flex overflow-hidden"><FontAwesomeIcon width={"40px"} className="mx-2" icon={faRankingStar}/> Champions</h1>
      <div className="c flex flex-col font-nav justify-center overflow-x-hidden items-center h-screen bg-blue bg-gray-950">
        <div className="mb-4  h-1/4 absolute w-full -translate-y-1/2">
          <motion.div initial={{ x: '170%' }} animate={{ x: '-170%' }}
        transition={{ duration: 8, ease: 'linear', repeat: Infinity }} className={ win2?"grid text-6xl max-md:text-2xl grid-flow-col auto-cols-max" :"hidden"}>
            <img src="/Brosur logo ML.png" className="max-md:w-20  w-60"/>
            <h1 className="mx-3">Congratulations</h1>
            <h1 className="bg-white text-black">Zeeb Team 2</h1>
            <h1 className="mx-3">Winn 2 ND</h1>
            <h1 className="mx-3">PrizePool Rp.76.500</h1>
          </motion.div>
          <motion.div initial={{ x: '170%' }} animate={{ x: '-170%' }}
        transition={{ duration: 8, ease: 'linear', repeat: Infinity }} className={ win1?"grid text-6xl max-md:text-2xl grid-flow-col auto-cols-max" :"hidden"}>
            <img src="/Brosur logo ML.png" className="max-md:w-20 w-60"/>
            <h1 className="mx-3">Congratulations</h1>
            <h1 className="bg-white text-black">Zeeb Team 13</h1>
            <h1 className="mx-3">Winn 1 ST</h1>
            <h1 className="mx-3">PrizePool Rp.127.500</h1>
          </motion.div>
          <motion.div initial={{ x: '170%' }} animate={{ x: '-170%' }}
        transition={{ duration: 8, ease: 'linear', repeat: Infinity }} className={ win3?"grid text-6xl max-md:text-2xl grid-flow-col auto-cols-max" :"hidden"}>
            <img src="/Brosur logo ML.png" className="max-md:w-20 w-60"/>
            <h1 className="mx-3">Congratulations</h1>
            <h1 className="bg-white text-black">Zeeb Team 8</h1>
            <h1 className="mx-3">Winn 3 RD</h1>
            <h1 className="mx-3">PrizePool Rp.51.000</h1>
          </motion.div>
        </div>
        <div className="flex w-8/12 h-full items-end text-5xl max-md:w-11/12">
          <div className="w-1/3 border bre h-1/3 flex justify-center"> 
          <h2>2 <FontAwesomeIcon className="w-8" icon={faStar}/></h2>
          <h3 onClick={() => {
            setwin2(!win2)
            setwin1(false)
            setwin3(false)
          }
        } className="absolute c -translate-y-9 opacity-0  flex items-end">who?</h3>
          </div>
          <div className="w-1/3 border bre h-1/2 flex justify-center ">
          <h2 > 1 <FontAwesomeIcon className="w-8" icon={faStar}/></h2>
          <h3 onClick={() => {
            setwin2(false)
            setwin1(!win1)
            setwin3(false)
          }
        }  className="absolute c  translate-y-9 opacity-0 flex items-end">who?</h3>
          </div>
          <div className="w-1/3 border bre h-1/4 flex justify-center ">
          <h2 >3 <FontAwesomeIcon className="w-8" icon={faStar}/></h2>
          <h3 onClick={() => {
            setwin2(false)
            setwin1(false)
            setwin3(!win3)
          }
        }  className="absolute  c translate-y-9 opacity-0 flex items-end">who?</h3>

          </div>
        </div>
      </div>
    </>
  );
}

export default champions;
