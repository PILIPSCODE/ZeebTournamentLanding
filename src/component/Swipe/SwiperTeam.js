import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function SwiperTeam() {
  return (
    <div className="" >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        speed={1000}
        spaceBetween={100}
        
        breakpoints={{
            450: {
                slidesPerView: 4,
              
              },
        }}
        coverflowEffect={{
          stretch: 0,
          depth: 950,
          modifier: 53,
          slideShadows: true,
        }}

        modules={[EffectCoverflow, Pagination]}
       
      >
     
        
        
        <SwiperSlide className="ukur mb-3 pb-40  bg-white rounded-2xl   team-hov mt-5 px-3" >
        <div className="flex flex-col items-center mt-20 ">
          <img src="/Brosur logo ML.png" className="w-96 bg-slate-900 p-3 rounded-tl-3xl rounded-br-3xl" />
          <div className="flex justify-center">
            <h1 className="absolute text-2xl text-black text-center opacity-0">Zeeb Team 1</h1>
          <div className=" absolute text-start opacity-0 pen rounded-tr-3xl rounded-bl-3xl w-11/12 bg-slate-900 text-white">
          <h3 className="mx-3">Team</h3>
          <h3 className="mx-3">1.PlayerName</h3>
          <h3 className="mx-3">2.PlayerName</h3>
          <h3 className="mx-3">3.PlayerName</h3>
          <h3 className="mx-3">4.PlayerName</h3>
          <h3 className="mx-3">5.PlayerName</h3>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="ukur mb-3 pb-40  bg-white rounded-2xl   team-hov mt-5 px-3" >
        <div className="flex flex-col items-center mt-20 ">
          <img src="/Brosur logo ML.png" className="w-96 bg-slate-900 p-3 rounded-tl-3xl rounded-br-3xl" />
          <div className="flex justify-center">
            <h1 className="absolute text-2xl text-black text-center opacity-0">Zeeb Team 2</h1>
          <div className=" absolute text-start opacity-0 pen rounded-tr-3xl rounded-bl-3xl w-11/12 bg-slate-900 text-white">
          <h3 className="mx-3">Team</h3>
          <h3 className="mx-3">1.PlayerName</h3>
          <h3 className="mx-3">2.PlayerName</h3>
          <h3 className="mx-3">3.PlayerName</h3>
          <h3 className="mx-3">4.PlayerName</h3>
          <h3 className="mx-3">5.PlayerName</h3>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="ukur mb-3 pb-40  bg-white rounded-2xl   team-hov mt-5 px-3" >
        <div className="flex flex-col items-center mt-20 ">
          <img src="/Brosur logo ML.png" className="w-96 bg-slate-900 p-3 rounded-tl-3xl rounded-br-3xl" />
          <div className="flex justify-center">
            <h1 className="absolute text-2xl text-black text-center opacity-0">Zeeb Team 3</h1>
          <div className=" absolute text-start opacity-0 pen rounded-tr-3xl rounded-bl-3xl w-11/12 bg-slate-900 text-white">
          <h3 className="mx-3">Team</h3>
          <h3 className="mx-3">1.PlayerName</h3>
          <h3 className="mx-3">2.PlayerName</h3>
          <h3 className="mx-3">3.PlayerName</h3>
          <h3 className="mx-3">4.PlayerName</h3>
          <h3 className="mx-3">5.PlayerName</h3>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="ukur mb-3 pb-40  bg-white rounded-2xl   team-hov mt-5 px-3" >
        <div className="flex flex-col items-center mt-20 ">
          <img src="/Brosur logo ML.png" className="w-96 bg-slate-900 p-3 rounded-tl-3xl rounded-br-3xl" />
          <div className="flex justify-center">
            <h1 className="absolute text-2xl text-black text-center opacity-0">Zeeb Team 4</h1>
          <div className=" absolute text-start opacity-0 pen rounded-tr-3xl rounded-bl-3xl w-11/12 bg-slate-900 text-white">
          <h3 className="mx-3">Team</h3>
          <h3 className="mx-3">1.PlayerName</h3>
          <h3 className="mx-3">2.PlayerName</h3>
          <h3 className="mx-3">3.PlayerName</h3>
          <h3 className="mx-3">4.PlayerName</h3>
          <h3 className="mx-3">5.PlayerName</h3>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="ukur mb-3 pb-40  bg-white rounded-2xl   team-hov mt-5 px-3" >
        <div className="flex flex-col items-center mt-20 ">
          <img src="/Brosur logo ML.png" className="w-96 bg-slate-900 p-3 rounded-tl-3xl rounded-br-3xl" />
          <div className="flex justify-center">
            <h1 className="absolute text-2xl text-black text-center opacity-0">Zeeb Team 5</h1>
          <div className=" absolute text-start opacity-0 pen rounded-tr-3xl rounded-bl-3xl w-11/12 bg-slate-900 text-white">
          <h3 className="mx-3">Team</h3>
          <h3 className="mx-3">1.PlayerName</h3>
          <h3 className="mx-3">2.PlayerName</h3>
          <h3 className="mx-3">3.PlayerName</h3>
          <h3 className="mx-3">4.PlayerName</h3>
          <h3 className="mx-3">5.PlayerName</h3>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="ukur mb-3 pb-40  bg-white rounded-2xl   team-hov mt-5 px-3" >
        <div className="flex flex-col items-center mt-20 ">
          <img src="/Brosur logo ML.png" className="w-96 bg-slate-900 p-3 rounded-tl-3xl rounded-br-3xl" />
          <div className="flex justify-center">
            <h1 className="absolute text-2xl text-black text-center opacity-0">Zeeb Team 6</h1>
          <div className=" absolute text-start opacity-0 pen rounded-tr-3xl rounded-bl-3xl w-11/12 bg-slate-900 text-white">
          <h3 className="mx-3">Team</h3>
          <h3 className="mx-3">1.PlayerName</h3>
          <h3 className="mx-3">2.PlayerName</h3>
          <h3 className="mx-3">3.PlayerName</h3>
          <h3 className="mx-3">4.PlayerName</h3>
          <h3 className="mx-3">5.PlayerName</h3>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="ukur mb-3 pb-40  bg-white rounded-2xl   team-hov mt-5 px-3" >
        <div className="flex flex-col items-center mt-20 ">
          <img src="/Brosur logo ML.png" className="w-96 bg-slate-900 p-3 rounded-tl-3xl rounded-br-3xl" />
          <div className="flex justify-center">
            <h1 className="absolute text-2xl text-black text-center opacity-0">Zeeb Team 7</h1>
          <div className=" absolute text-start opacity-0 pen rounded-tr-3xl rounded-bl-3xl w-11/12 bg-slate-900 text-white">
          <h3 className="mx-3">Team</h3>
          <h3 className="mx-3">1.PlayerName</h3>
          <h3 className="mx-3">2.PlayerName</h3>
          <h3 className="mx-3">3.PlayerName</h3>
          <h3 className="mx-3">4.PlayerName</h3>
          <h3 className="mx-3">5.PlayerName</h3>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="ukur mb-3 pb-40  bg-white rounded-2xl   team-hov mt-5 px-3" >
        <div className="flex flex-col items-center mt-20 ">
          <img src="/Brosur logo ML.png" className="w-96 bg-slate-900 p-3 rounded-tl-3xl rounded-br-3xl" />
          <div className="flex justify-center">
            <h1 className="absolute text-2xl text-black text-center opacity-0">Zeeb Team 8</h1>
          <div className=" absolute text-start opacity-0 pen rounded-tr-3xl rounded-bl-3xl w-11/12 bg-slate-900 text-white">
          <h3 className="mx-3">Team</h3>
          <h3 className="mx-3">1.PlayerName</h3>
          <h3 className="mx-3">2.PlayerName</h3>
          <h3 className="mx-3">3.PlayerName</h3>
          <h3 className="mx-3">4.PlayerName</h3>
          <h3 className="mx-3">5.PlayerName</h3>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="ukur mb-3 pb-40  bg-white rounded-2xl   team-hov mt-5 px-3" >
        <div className="flex flex-col items-center mt-20 ">
          <img src="/Brosur logo ML.png" className="w-96 bg-slate-900 p-3 rounded-tl-3xl rounded-br-3xl" />
          <div className="flex justify-center">
            <h1 className="absolute text-2xl text-black text-center opacity-0">Zeeb Team 9</h1>
          <div className=" absolute text-start opacity-0 pen rounded-tr-3xl rounded-bl-3xl w-11/12 bg-slate-900 text-white">
          <h3 className="mx-3">Team</h3>
          <h3 className="mx-3">1.PlayerName</h3>
          <h3 className="mx-3">2.PlayerName</h3>
          <h3 className="mx-3">3.PlayerName</h3>
          <h3 className="mx-3">4.PlayerName</h3>
          <h3 className="mx-3">5.PlayerName</h3>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="ukur mb-3 pb-40  bg-white rounded-2xl   team-hov mt-5 px-3" >
        <div className="flex flex-col items-center mt-20 ">
          <img src="/Brosur logo ML.png" className="w-96 bg-slate-900 p-3 rounded-tl-3xl rounded-br-3xl" />
          <div className="flex justify-center">
            <h1 className="absolute text-2xl text-black text-center opacity-0">Zeeb Team 10</h1>
          <div className=" absolute text-start opacity-0 pen rounded-tr-3xl rounded-bl-3xl w-11/12 bg-slate-900 text-white">
          <h3 className="mx-3">Team</h3>
          <h3 className="mx-3">1.PlayerName</h3>
          <h3 className="mx-3">2.PlayerName</h3>
          <h3 className="mx-3">3.PlayerName</h3>
          <h3 className="mx-3">4.PlayerName</h3>
          <h3 className="mx-3">5.PlayerName</h3>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="ukur mb-3 pb-40  bg-white rounded-2xl   team-hov mt-5 px-3" >
        <div className="flex flex-col items-center mt-20 ">
          <img src="/Brosur logo ML.png" className="w-96 bg-slate-900 p-3 rounded-tl-3xl rounded-br-3xl" />
          <div className="flex justify-center">
            <h1 className="absolute text-2xl text-black text-center opacity-0">Zeeb Team 11</h1>
          <div className=" absolute text-start opacity-0 pen rounded-tr-3xl rounded-bl-3xl w-11/12 bg-slate-900 text-white">
          <h3 className="mx-3">Team</h3>
          <h3 className="mx-3">1.PlayerName</h3>
          <h3 className="mx-3">2.PlayerName</h3>
          <h3 className="mx-3">3.PlayerName</h3>
          <h3 className="mx-3">4.PlayerName</h3>
          <h3 className="mx-3">5.PlayerName</h3>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="ukur mb-3 pb-40  bg-white rounded-2xl   team-hov mt-5 px-3" >
        <div className="flex flex-col items-center mt-20 ">
          <img src="/Brosur logo ML.png" className="w-96 bg-slate-900 p-3 rounded-tl-3xl rounded-br-3xl" />
          <div className="flex justify-center">
            <h1 className="absolute text-2xl text-black text-center opacity-0">Zeeb Team 12</h1>
          <div className=" absolute text-start opacity-0 pen rounded-tr-3xl rounded-bl-3xl w-11/12 bg-slate-900 text-white">
          <h3 className="mx-3">Team</h3>
          <h3 className="mx-3">1.PlayerName</h3>
          <h3 className="mx-3">2.PlayerName</h3>
          <h3 className="mx-3">3.PlayerName</h3>
          <h3 className="mx-3">4.PlayerName</h3>
          <h3 className="mx-3">5.PlayerName</h3>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="ukur mb-3 pb-40  bg-white rounded-2xl   team-hov mt-5 px-3" >
        <div className="flex flex-col items-center mt-20 ">
          <img src="/Brosur logo ML.png" className="w-96 bg-slate-900 p-3 rounded-tl-3xl rounded-br-3xl" />
          <div className="flex justify-center">
            <h1 className="absolute text-2xl text-black text-center opacity-0">Zeeb Team 13</h1>
          <div className=" absolute text-start opacity-0 pen rounded-tr-3xl rounded-bl-3xl w-11/12 bg-slate-900 text-white">
          <h3 className="mx-3">Team</h3>
          <h3 className="mx-3">1.PlayerName</h3>
          <h3 className="mx-3">2.PlayerName</h3>
          <h3 className="mx-3">3.PlayerName</h3>
          <h3 className="mx-3">4.PlayerName</h3>
          <h3 className="mx-3">5.PlayerName</h3>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="ukur mb-3 pb-40  bg-white rounded-2xl   team-hov mt-5 px-3" >
        <div className="flex flex-col items-center mt-20 ">
          <img src="/Brosur logo ML.png" className="w-96 bg-slate-900 p-3 rounded-tl-3xl rounded-br-3xl" />
          <div className="flex justify-center">
            <h1 className="absolute text-2xl text-black text-center opacity-0">Zeeb Team 14</h1>
          <div className=" absolute text-start opacity-0 pen rounded-tr-3xl rounded-bl-3xl w-11/12 bg-slate-900 text-white">
          <h3 className="mx-3">Team</h3>
          <h3 className="mx-3">1.PlayerName</h3>
          <h3 className="mx-3">2.PlayerName</h3>
          <h3 className="mx-3">3.PlayerName</h3>
          <h3 className="mx-3">4.PlayerName</h3>
          <h3 className="mx-3">5.PlayerName</h3>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="ukur mb-3 pb-40  bg-white rounded-2xl   team-hov mt-5 px-3" >
        <div className="flex flex-col items-center mt-20 ">
          <img src="/Brosur logo ML.png" className="w-96 bg-slate-900 p-3 rounded-tl-3xl rounded-br-3xl" />
          <div className="flex justify-center">
            <h1 className="absolute text-2xl text-black text-center opacity-0">Zeeb Team 15</h1>
          <div className=" absolute text-start opacity-0 pen rounded-tr-3xl rounded-bl-3xl w-11/12 bg-slate-900 text-white">
          <h3 className="mx-3">Team</h3>
          <h3 className="mx-3">1.PlayerName</h3>
          <h3 className="mx-3">2.PlayerName</h3>
          <h3 className="mx-3">3.PlayerName</h3>
          <h3 className="mx-3">4.PlayerName</h3>
          <h3 className="mx-3">5.PlayerName</h3>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="ukur mb-3 pb-40  bg-white rounded-2xl   team-hov mt-5 px-3" >
        <div className="flex flex-col items-center mt-20 ">
          <img src="/Brosur logo ML.png" className="w-96 bg-slate-900 p-3 rounded-tl-3xl rounded-br-3xl" />
          <div className="flex justify-center">
            <h1 className="absolute text-2xl text-black text-center opacity-0">Zeeb Team 16</h1>
          <div className=" absolute text-start opacity-0 pen rounded-tr-3xl rounded-bl-3xl w-11/12 bg-slate-900 text-white">
          <h3 className="mx-3">Team</h3>
          <h3 className="mx-3">1.PlayerName</h3>
          <h3 className="mx-3">2.PlayerName</h3>
          <h3 className="mx-3">3.PlayerName</h3>
          <h3 className="mx-3">4.PlayerName</h3>
          <h3 className="mx-3">5.PlayerName</h3>
          </div>
          </div>
        </div>
        </SwiperSlide>
       
      
     
       
       
      </Swiper>
    </div>
  );
}
