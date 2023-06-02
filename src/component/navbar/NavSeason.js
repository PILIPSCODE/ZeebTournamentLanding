import { faClose,faChartGantt, faRankingStar, faGift, faPeopleGroup,  faCalendarDays, faHamburger, faBars, faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

function NavSeason({seasonId}) {
    const [sidebar,setSidebar] = useState(false)
    const handleClick = () => {
        setSidebar(!sidebar)
    }
  return (
    <div className="absolute z-50">
    <div className="absolute w-screen flex justify-end mt-4 ms-2 -translate-x-10">
    <FontAwesomeIcon onClick={handleClick} className="fixed w-6 bg-black/50 text-xl" icon={faBars}/>
    </div>
    <div className={sidebar ? "fixed bg-gray-900 duration-300 -right-0 h-full max-md:w-3/12 flex  flex-col items-center w-1/12" : "fixed bg-gray-900 duration-300  -right-full h-full max-md:w-3/12 flex  flex-col items-center w-1/12"}>
      <FontAwesomeIcon onClick={handleClick} icon={faClose} className="text-xl w-6 mt-2" />
    
       
   
      <div className="bg-gray-950 my-4 p-4 tilt">
        <Link href={`/season/${seasonId}/champions/${seasonId}`}>
          <FontAwesomeIcon
            className=" w-7  text-white"
            icon={faRankingStar}
          />
        </Link>
        <h1 className="TiltUp absolute opacity-0">Champions</h1>
      </div>
      <div className="bg-gray-950 my-4 p-4 tilt">
        <Link href={`/season/${seasonId}`} >
          <FontAwesomeIcon
            className=" w-7  text-white"
            icon={faInfoCircle}
          />
        </Link>
        <h1 className="TiltUp absolute opacity-0">Information</h1>
      </div>
      <div className="bg-gray-950 my-4 p-4 tilt">
        <Link  href={`/season/${seasonId}/Allteam/${seasonId}`}>
          <FontAwesomeIcon
            className=" w-7  text-white"
            icon={faPeopleGroup}
          />
        </Link>
        <h1 className="TiltUp absolute opacity-0">AllTeam</h1>
      </div>
      <div className="bg-gray-950 my-4 p-4 tilt">
        <Link href={`/season/${seasonId}/warday/${seasonId}`}>
          <FontAwesomeIcon
            className=" w-7  text-white"
            icon={faCalendarDays}
          />
        </Link>
        <h1 className="TiltUp absolute opacity-0">WarDays</h1>
      </div>
      <div className="bg-gray-950 my-4 p-4 tilt">
        <Link href={`/`}>
          <FontAwesomeIcon
            className=" w-7  text-white"
            icon={faHome}
          />
        </Link>
        <h1 className="TiltUp absolute opacity-0">HomePage</h1>
      </div>
    </div>
    </div>
  );
}

export default NavSeason;
