import {
    faArrowLeft,
    faCalendarDays,
    faChartGantt,
    faCircleInfo,
    faClose,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import Link from "next/link";
  import { motion } from "framer-motion";
  import { useRouter } from "next/router";
  import NavSeason from "@/component/navbar/NavSeason";
  
  function WarDays() {
    const router = useRouter();
    const seasonId = router.query.SeasonId;
    return (
      <div className="Jadwal bg-gray-950 font-nav">
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 h-5/6 max-w-5xl">
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn text-white">
                <FontAwesomeIcon className="w-5" icon={faClose} />
              </label>
            </div>
            <h1 className="mb-4">Details Battle</h1>
            <div className="w-11/12  max-md:w-full my-0 mx-auto rounded-md">
              <div className="top bg-black rounded-md flex max-md:flex-col justify-around border-b items-center  py-4">
                <div className="Team1 flex items-center">
                  <img src="/Brosur logo ML.png" className="w-16 " />
                  <h1 className="mx-5">Squad Name</h1>
                  <h1 className="border rounded-lg">30</h1>
                </div>
                <div className="flex">
                  <h1 className="mx-4">VS</h1>
                </div>
                <div className="Team2  items-center flex flex-row-reverse">
                  <img src="/Brosur logo ML.png" className="w-16" />
                  <h1 className="mx-5 ">Squad Name</h1>
                  <h1 className="border rounded-lg">28</h1>
                </div>
              </div>
              <div className="bottom bg-black flex max-md:flex-col justify-around ">
                <div className="w-7/12 ">
                  <h1 className="text-center">Victory</h1>
                  <div className="flex items-center mb-2 p-2">
                    <img
                      className="w-12 h-12 rounded-full me-1"
                      src="/Beatrix.png"
                    />
                    <h1>PLayer 1</h1>
                  </div>
                  <div className="flex items-center mb-2 p-2">
                    <img
                      className="w-12 h-12 rounded-full me-1"
                      src="/Beatrix.png"
                    />
                    <h1>PLayer 2</h1>
                  </div>
                  <div className="flex items-center mb-2 p-2">
                    <img
                      className="w-12 h-12 rounded-full me-1"
                      src="/Beatrix.png"
                    />
                    <h1>PLayer 3</h1>
                  </div>
                  <div className="flex items-center mb-2 p-2">
                    <img
                      className="w-12 h-12 rounded-full me-1"
                      src="/Beatrix.png"
                    />
                    <h1>PLayer 4</h1>
                  </div>
                  <div className="flex items-center mb-2 p-2">
                    <img
                      className="w-12 h-12 rounded-full me-1"
                      src="/Beatrix.png"
                    />
                    <h1>PLayer 5</h1>
                  </div>
                </div>
                <div className="w-5/12 border-x max-md:w-full max-md:my-2 max-md:border-y">
                  <div className="flex flex-col  mvp-lose">
                    <div className="flex items-center">
                      <img src="/mvp.png" className="w-12"/>
                      <h1>Player 3</h1>
                    </div>
                    <h1>Good Game!!,TeamMu Akan Lanjut keMatch Selanjutnya😁😁😁</h1>
                  </div>
                  <div className="flex items-end flex-col mvp-win">
                    <div className="flex items-center">
                      <img src="/MVP_Loss.webp" className="w-12 h-12"/>
                      <h1>Player 5</h1>
                    </div>
                    <h1 className="text-end">Nice Try!!,TeamMu Berhenti Disini😭😭😭</h1>
                  </div>
                </div>
                <div className="w-7/12 max-md:w-full flex flex-col items-end">
                  <div className="w-full max-md:justify-end flex justify-center">
                    <h1>Defeat</h1>
                  </div>
                  <div className="flex flex-row-reverse items-center mb-2 p-2">
                    <img
                      className="w-12 h-12 rounded-full me-1"
                      src="/Beatrix.png"
                    />
                    <h1>PLayer 1</h1>
                  </div>
                  <div className="flex flex-row-reverse items-center mb-2 p-2">
                    <img
                      className="w-12 h-12 rounded-full me-1"
                      src="/Beatrix.png"
                    />
                    <h1>PLayer 2</h1>
                  </div>
                  <div className="flex flex-row-reverse items-center mb-2 p-2">
                    <img
                      className="w-12 h-12 rounded-full me-1"
                      src="/Beatrix.png"
                    />
                    <h1>PLayer 3</h1>
                  </div>
                  <div className="flex flex-row-reverse items-center mb-2 p-2">
                    <img
                      className="w-12 h-12 rounded-full me-1"
                      src="/Beatrix.png"
                    />
                    <h1>PLayer 4</h1>
                  </div>
                  <div className="flex flex-row-reverse items-center mb-2 p-2">
                    <img
                      className="w-12 h-12 rounded-full me-1"
                      src="/Beatrix.png"
                    />
                    <h1>PLayer 5</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavSeason seasonId={seasonId}/>
        <Link href={`/season/${seasonId}/statistik/${seasonId}`}>
          <FontAwesomeIcon
            className=" w-7 fixed right-10 bottom-10 bg-white/40 p-2 z-30  text-white"
            icon={faChartGantt}
          />
        </Link>
    
        <h1 className="text-4xl flex"><FontAwesomeIcon width={'40px'} className="mx-2" icon={faCalendarDays}/> WarDays</h1>
        <div className="pt-8 text-white">
          <div className="flex justify-center  text-white ms-6">
            <h1 className="text-xl  p-1 clip-path">Sabtu,20 Mei 2023</h1>
          </div>
          <div className="flex items-center flex-col">
            <div className="Grup A flex items-center flex-col w-full">
              <div className="text-center my-4">
                <h1>Grup A</h1>
              </div>
              <motion.div className="flex tm hover:bg-Knock hover:bg-center hover:bg-cover border max-md:w-10/12 justify-center my-2 w-7/12   py-3">
                <div className="Team-1 line-through text-red-600 flex w-1/2 justify-center max-md:w-full items-center">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 1 Zeeb</h1>
                </div>
                <div className="flex vscss justify-center">VS</div>
                <div className="Team-2 flex  w-1/2 justify-center max-md:w-full  items-center ">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 2 Zeeb</h1>
                </div>
                <div className="opacity-0 tiltup duration-300 p-1  bg-black absolute">
                  <label htmlFor="my-modal-5" className="max-md:hidden">
                    {" "}
                    Details Battle
                  </label>
                  <label
                    htmlFor="my-modal-5"
                    className="hidden max-md:block px-1 rounded-lg"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </label>
                </div>
              </motion.div>
              <motion.div className="flex tm hover:bg-Knock hover:bg-center hover:bg-cover border max-md:w-10/12 justify-center my-2 w-7/12   py-3">
                <div className="Team-1 line-through text-red-600 flex w-1/2 justify-center max-md:w-full items-center">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 3 Zeeb</h1>
                </div>
                <div className="flex vscss justify-center">VS</div>
                <div className="Team-2 flex  w-1/2 justify-center max-md:w-full  items-center ">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 4 Zeeb</h1>
                </div>
                <div className="opacity-0 tiltup duration-300 p-1 bg-black absolute">
                  <label htmlFor="my-modal-5" className="max-md:hidden">
                    {" "}
                    Details Battle
                  </label>
                  <label
                    htmlFor="my-modal-5"
                    className="hidden max-md:block px-1 rounded-lg"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </label>
                </div>
              </motion.div>
              <motion.div className="flex tm hover:bg-Knock hover:bg-center hover:bg-cover border max-md:w-10/12 justify-center my-2 w-7/12   py-3">
                <div className="Team-1 flex w-1/2 justify-center max-md:w-full items-center">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 5 Zeeb</h1>
                </div>
                <div className="flex vscss justify-center">VS</div>
                <div className="Team-2 line-through text-red-600 flex  w-1/2 justify-center max-md:w-full  items-center ">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 6 Zeeb</h1>
                </div>
                <div className="opacity-0 tiltup duration-300 p-1 bg-black absolute">
                  <label htmlFor="my-modal-5" className="max-md:hidden">
                    {" "}
                    Details Battle
                  </label>
                  <label
                    htmlFor="my-modal-5"
                    className="hidden max-md:block px-1 rounded-lg"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </label>
                </div>
              </motion.div>
              <motion.div className="flex tm hover:bg-Knock hover:bg-center hover:bg-cover border max-md:w-10/12 justify-center my-2 w-7/12   py-3">
                <div className="Team-1 line-through text-red-600 flex w-1/2 justify-center max-md:w-full items-center">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 7 Zeeb</h1>
                </div>
                <div className="flex vscss justify-center">VS</div>
                <div className="Team-2 flex  w-1/2 justify-center max-md:w-full  items-center ">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 8 Zeeb</h1>
                </div>
                <div className="opacity-0 tiltup duration-300 p-1 bg-black absolute">
                  <label htmlFor="my-modal-5" className="max-md:hidden">
                    {" "}
                    Details Battle
                  </label>
                  <label
                    htmlFor="my-modal-5"
                    className="hidden max-md:block px-1 rounded-lg"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </label>
                </div>
              </motion.div>
            </div>
  
            <div className="Grup B flex items-center  flex-col w-full">
              <div className="text-center rounded-lg my-4">
                <h1>Grup B</h1>
              </div>
              <motion.div className="flex tm hover:bg-Knock hover:bg-center hover:bg-cover border max-md:w-10/12 justify-center my-2 w-7/12   py-3">
                <div className="Team-1 flex w-1/2 justify-center max-md:w-full items-center">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 9 Zeeb</h1>
                </div>
                <div className="flex vscss justify-center">VS</div>
                <div className="Team-2 line-through text-red-600 flex  w-1/2 justify-center max-md:w-full  items-center ">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 10 Zeeb</h1>
                </div>
                <div className="opacity-0 tiltup duration-300 p-1 bg-black absolute">
                  <label htmlFor="my-modal-5" className="max-md:hidden">
                    {" "}
                    Details Battle
                  </label>
                  <label
                    htmlFor="my-modal-5"
                    className="hidden max-md:block px-1 rounded-lg"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </label>
                </div>
              </motion.div>
              <motion.div className="flex tm hover:bg-Knock hover:bg-center hover:bg-cover border max-md:w-10/12 justify-center my-2 w-7/12   py-3">
                <div className="Team-1 line-through text-red-600 flex w-1/2 justify-center max-md:w-full items-center">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 11 Zeeb</h1>
                </div>
                <div className="flex vscss justify-center">VS</div>
                <div className="Team-2 flex  w-1/2 justify-center max-md:w-full  items-center ">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 12 Zeeb</h1>
                </div>
                <div className="opacity-0 tiltup duration-300 p-1 bg-black absolute">
                  <label htmlFor="my-modal-5" className="max-md:hidden">
                    {" "}
                    Details Battle
                  </label>
                  <label
                    htmlFor="my-modal-5"
                    className="hidden max-md:block px-1 rounded-lg"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </label>
                </div>
              </motion.div>
              <motion.div className="flex tm hover:bg-Knock hover:bg-center hover:bg-cover border max-md:w-10/12 justify-center my-2 w-7/12   py-3">
                <div className="Team-1 flex w-1/2 justify-center max-md:w-full items-center">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 13 Zeeb</h1>
                </div>
                <div className="flex vscss justify-center">VS</div>
                <div className="Team-2 line-through text-red-600 flex  w-1/2 justify-center max-md:w-full  items-center ">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 14 Zeeb</h1>
                </div>
                <div className="opacity-0 tiltup duration-300 p-1 bg-black absolute">
                  <label htmlFor="my-modal-5" className="max-md:hidden">
                    {" "}
                    Details Battle
                  </label>
                  <label
                    htmlFor="my-modal-5"
                    className="hidden max-md:block px-1 rounded-lg"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </label>
                </div>
              </motion.div>
              <motion.div className="flex tm hover:bg-Knock hover:bg-center hover:bg-cover border max-md:w-10/12 justify-center my-2 w-7/12   py-3">
                <div className="Team-1 flex w-1/2 justify-center max-md:w-full items-center">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 15 Zeeb</h1>
                </div>
                <div className="flex vscss justify-center">VS</div>
                <div className="Team-2 line-through text-red-600 flex  w-1/2 justify-center max-md:w-full  items-center ">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 16 Zeeb</h1>
                </div>
                <div className="opacity-0 tiltup duration-300 p-1 bg-black absolute">
                  <label htmlFor="my-modal-5" className="max-md:hidden">
                    {" "}
                    Details Battle
                  </label>
                  <label
                    htmlFor="my-modal-5"
                    className="hidden max-md:block px-1 rounded-lg"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </label>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="pt-8 text-white">
          <div className="flex justify-center  text-white ms-6">
            <h1 className="text-xl  p-1 clip-path">Minggu,21 Mei 2023</h1>
          </div>
          <div className="flex items-center flex-col">
            <div className="Grup A flex items-center flex-col w-full">
              <div className="text-center my-4">
                <h1>Grup A</h1>
              </div>
              <motion.div className="flex tm hover:bg-Quater hover:bg-center hover:bg-cover border max-md:w-10/12 justify-center my-2 w-7/12   py-3">
                <div className="Team-1 flex w-1/2 justify-center max-md:w-full items-center">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 2 Zeeb</h1>
                </div>
                <div className="flex vscss justify-center">VS</div>
                <div className="Team-2 flex line-through text-red-600  w-1/2 justify-center max-md:w-full  items-center ">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 4 Zeeb</h1>
                </div>
                <div className="opacity-0 tiltup duration-300 p-1 bg-black absolute">
                  <label htmlFor="my-modal-5" className="max-md:hidden">
                    {" "}
                    Details Battle
                  </label>
                  <label
                    htmlFor="my-modal-5"
                    className="hidden max-md:block px-1 rounded-lg"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </label>
                </div>
              </motion.div>
              <motion.div className="flex tm hover:bg-Quater hover:bg-center hover:bg-cover border max-md:w-10/12 justify-center my-2 w-7/12   py-3">
                <div className="Team-1 line-through text-red-600 flex w-1/2 justify-center max-md:w-full items-center">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 5 Zeeb</h1>
                </div>
                <div className="flex vscss justify-center">VS</div>
                <div className="Team-2 flex  w-1/2 justify-center max-md:w-full  items-center ">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 8 Zeeb</h1>
                </div>
                <div className="opacity-0 tiltup duration-300 p-1 bg-black absolute">
                  <label htmlFor="my-modal-5" className="max-md:hidden">
                    {" "}
                    Details Battle
                  </label>
                  <label
                    htmlFor="my-modal-5"
                    className="hidden max-md:block px-1 rounded-lg"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </label>
                </div>
              </motion.div>
            </div>
  
            <div className="Grup A flex items-center flex-col w-full">
              <div className="text-center my-4">
                <h1>Grup B</h1>
              </div>
              <motion.div className="flex tm hover:bg-Quater hover:bg-center hover:bg-cover  border max-md:w-10/12 justify-center my-2 w-7/12   py-3">
                <div className="Team-1 line-through text-red-600 flex w-1/2 justify-center max-md:w-full items-center">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 9 Zeeb</h1>
                </div>
                <div className="flex vscss justify-center">VS</div>
                <div className="Team-2 flex  w-1/2 justify-center max-md:w-full  items-center ">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 12 Zeeb</h1>
                </div>
                <div className="opacity-0 tiltup duration-300 p-1 bg-black absolute">
                  <label htmlFor="my-modal-5" className="max-md:hidden">
                    {" "}
                    Details Battle
                  </label>
                  <label
                    htmlFor="my-modal-5"
                    className="hidden max-md:block px-1 rounded-lg"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </label>
                </div>
              </motion.div>
              <motion.div className="flex tm hover:bg-Quater hover:bg-center hover:bg-cover border max-md:w-10/12 justify-center my-2 w-7/12   py-3">
                <div className="Team-1 flex w-1/2 justify-center max-md:w-full items-center">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 13 Zeeb</h1>
                </div>
                <div className="flex vscss justify-center">VS</div>
                <div className="Team-2 line-through text-red-600 flex  w-1/2 justify-center max-md:w-full  items-center ">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1 className="max-lg:hidden">Team 15 Zeeb</h1>
                </div>
                <div className="opacity-0 tiltup duration-300 p-1 bg-black absolute">
                  <label htmlFor="my-modal-5" className="max-md:hidden">
                    {" "}
                    Details Battle
                  </label>
                  <label
                    htmlFor="my-modal-5"
                    className="hidden max-md:block px-1 rounded-lg"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </label>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="pt-8 text-white">
          <div className="flex justify-center  text-white ms-6">
            <h1 className="text-xl  p-1 clip-path">Senin,22 Mei 2023</h1>
          </div>
          <div className="flex items-center flex-col">
            <div className="text-center my-4">
              <h1>Grup AB</h1>
            </div>
            <motion.div className="flex tm hover:bg-Semi hover:bg-center hover:bg-cover border max-md:w-10/12 justify-center my-2 w-7/12   py-3">
              <div className="Team-1 flex w-1/2 justify-center max-md:w-full items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="max-lg:hidden">Team 2 Zeeb</h1>
              </div>
              <div className="flex vscss justify-center">VS</div>
              <div className="Team-2 flex line-through text-red-600  w-1/2 justify-center max-md:w-full  items-center ">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="max-lg:hidden">Team 8 Zeeb</h1>
              </div>
              <div className="opacity-0 tiltup duration-300 p-1 bg-black absolute">
                <label htmlFor="my-modal-5" className="max-md:hidden">
                  {" "}
                  Details Battle
                </label>
                <span className="hidden max-md:block px-1 rounded-lg">
                  {" "}
                  <FontAwesomeIcon icon={faCircleInfo} />
                </span>
              </div>
            </motion.div>
            <motion.div className="flex tm  hover:bg-Semi hover:bg-center hover:bg-cover border max-md:w-10/12 justify-center my-2 w-7/12   py-3">
              <div className="Team-1 line-through text-red-600 flex w-1/2 justify-center max-md:w-full items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="max-lg:hidden">Team 2 Zeeb</h1>
              </div>
              <div className="flex vscss justify-center">VS</div>
              <div className="Team-2 flex  w-1/2 justify-center max-md:w-full  items-center ">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="max-lg:hidden">Team 13 Zeeb</h1>
              </div>
              <div className="opacity-0 tiltup duration-300 p-1 bg-black absolute">
                <label htmlFor="my-modal-5" className="max-md:hidden">
                  {" "}
                  Details Battle
                </label>
                <span className="hidden max-md:block px-1 rounded-lg">
                  {" "}
                  <FontAwesomeIcon icon={faCircleInfo} />
                </span>
              </div>
            </motion.div>
            <motion.div className="flex tm  hover:bg-Final hover:bg-center hover:bg-cover border max-md:w-10/12 justify-center my-2 w-7/12   py-3">
              <div className="Team-1 line-through text-red-600 flex w-1/2 justify-center max-md:w-full items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="max-lg:hidden">Team 2 Zeeb</h1>
              </div>
              <div className="flex vscss justify-center">VS</div>
              <div className="Team-2 flex  w-1/2 justify-center max-md:w-full  items-center ">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="max-lg:hidden">Team 13 Zeeb</h1>
              </div>
              <div className="opacity-0 tiltup duration-300 p-1 bg-black absolute">
                <label htmlFor="my-modal-5" className="max-md:hidden">
                  {" "}
                  Details Battle
                </label>
                <span className="hidden max-md:block px-1 rounded-lg">
                  {" "}
                  <FontAwesomeIcon icon={faCircleInfo} />
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
  
  export default WarDays;
  