import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination ,Navigation} from "swiper";
import { motion,AnimatePresence } from "framer-motion";
import Link from "next/link";


function SwipePrice() {
  const input = {
    initialState:{
      x:50,
      rotate:-2,
      opacity:0
    },
    onviewState:{
      x: 0,
      rotate: 0,
      opacity:1,
      transition: {
        duration: 0.7
      }
    }
  }
  return (
    <AnimatePresence mode="wait">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        grabCursor={true}
        navigation={true}
        breakpoints={{
          450: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          885: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1191: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <motion.div 
           variants={input}
           initial="initialState"
           whileInView="onviewState"
           className=" w-screen scroll-smooth overflow-y-scroll heyo mt-1  text-white h-96 hover:cursor-all-scroll">
            <div className="flex mb-3 justify-start max-md:justify-center">
              <div 
              className="flex flex-col h-96 items-center w-72">
                <div
               
                  id="s1"
                  className="border rounded-ss-3xl rounded-ee-3xl w-full h-full flex  justify-center flex-col "
                >
                  <h1 className="text-center text-2xl">Season 1</h1>
                  <h3 className="text-3xl text-center">IDR.25K/Team</h3>
                  <div className="text-start mt-3 ms-1">
                    <h3>Payments</h3>
                    <h3 className="flex items-center">
                      <img src="/Dana.png" className="w-6" />
                      Dana
                    </h3>
                    <h3 className="flex items-center">
                      <img src="/gopay.png" className="w-6" />
                      Gopay
                    </h3>
                  </div>
                  <div className="flex justify-around mt-2">
                    <Link className="text-white bg-white/60" href="/season/1">
                      MoreInfo
                    </Link>
                    <h3>ScrollMe!!!</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start max-md:justify-center">
              <div className="flex flex-col h-96 w-72 ">
                <img
                  src="/Brosur ML(s!).jpg"
                  className="w-full h-full rounded-ss-3xl rounded-ee-3xl"
                />
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div 
          variants={input}
          initial="initialState"
          whileInView="onviewState"
          className=" w-screen scroll-smooth overflow-y-scroll heyo mt-1  text-white h-96 hover:cursor-all-scroll">
            <div 
            
             className="flex mb-3 justify-start max-md:justify-center">
              <div className="flex flex-col h-96 items-center w-72">
                <div
                  id="s1"
                  className="border rounded-ss-3xl rounded-ee-3xl w-full h-full flex  justify-center flex-col "
                >
                  <h1 className="text-center text-2xl">Comming-Soon</h1>
                 
                </div>
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div 
          variants={input}
          initial="initialState"
          whileInView="onviewState"
          className=" w-screen scroll-smooth overflow-y-scroll heyo mt-1  text-white h-96 hover:cursor-all-scroll">
            <div 
            
             className="flex mb-3 justify-start max-md:justify-center">
              <div className="flex flex-col h-96 items-center w-72">
                <div
                  id="s1"
                  className="border rounded-ss-3xl rounded-ee-3xl w-full h-full flex  justify-center flex-col "
                >
                  <h1 className="text-center text-2xl">Comming-Soon</h1>
                 
                </div>
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div 
          variants={input}
          initial="initialState"
          whileInView="onviewState"
          className=" w-screen scroll-smooth overflow-y-scroll heyo mt-1  text-white h-96 hover:cursor-all-scroll">
            <div 
            
             className="flex mb-3 justify-start max-md:justify-center">
              <div className="flex flex-col h-96 items-center w-72">
                <div
                  id="s1"
                  className="border rounded-ss-3xl rounded-ee-3xl w-full h-full flex  justify-center flex-col "
                >
                  <h1 className="text-center text-2xl">Comming-Soon</h1>
                 
                </div>
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div 
          variants={input}
          initial="initialState"
          whileInView="onviewState"
          className=" w-screen scroll-smooth overflow-y-scroll heyo mt-1  text-white h-96 hover:cursor-all-scroll">
            <div 
            
             className="flex mb-3 justify-start max-md:justify-center">
              <div className="flex flex-col h-96 items-center w-72">
                <div
                  id="s1"
                  className="border rounded-ss-3xl rounded-ee-3xl w-full h-full flex  justify-center flex-col "
                >
                  <h1 className="text-center text-2xl">Comming-Soon</h1>
                 
                </div>
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div 
          variants={input}
          initial="initialState"
          whileInView="onviewState"
          className=" w-screen scroll-smooth overflow-y-scroll heyo mt-1  text-white h-96 hover:cursor-all-scroll">
            <div 
            
             className="flex mb-3 justify-start max-md:justify-center">
              <div className="flex flex-col h-96 items-center w-72">
                <div
                  id="s1"
                  className="border rounded-ss-3xl rounded-ee-3xl w-full h-full flex  justify-center flex-col "
                >
                  <h1 className="text-center text-2xl">Comming-Soon</h1>
                 
                </div>
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div 
          variants={input}
          initial="initialState"
          whileInView="onviewState"
          className=" w-screen scroll-smooth overflow-y-scroll heyo mt-1  text-white h-96 hover:cursor-all-scroll">
            <div 
            
             className="flex mb-3 justify-start max-md:justify-center">
              <div className="flex flex-col h-96 items-center w-72">
                <div
                  id="s1"
                  className="border rounded-ss-3xl rounded-ee-3xl w-full h-full flex  justify-center flex-col "
                >
                  <h1 className="text-center text-2xl">Comming-Soon</h1>
                 
                </div>
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
       
      </Swiper>
    </AnimatePresence>
  );
}

export default SwipePrice;
