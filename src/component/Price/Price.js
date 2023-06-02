
import 'swiper/css';
import { motion,AnimatePresence } from 'framer-motion';
import SwipePrice from '../Swipe/SwipePrice';
function Price() {
  return (
    <AnimatePresence mode='wait'>

    <div id="price" className="bg-black pb-20 ok overflow-x-hidden pt-20 font-nav">
       <div className='absolute h-screen flex w-screen items-center overflow-x-hidden  justify-end'>

<motion.img
   initial={{
    x:300,
    opacity:0,
    
  }} 
  whileInView={{
    x:0,
    opacity:1,
    transition:{
      duration:0.6,
      delay:0.8
    }
  }}
 src='/bruno.png' className='br w-5/12 max-md:w-screen overflow-x-hidden'/>
</div>  
      <div className="flex justify-end  me-6">
        <h1 className="text-5xl max-md:text-3xl p-1 text-white clip-path">Price</h1>
      </div>

      <div className="flex mt-20 w-screen max-md:ms-3 mx-16 heyo overflow-x-scroll pt-3   items-center " >
    
    <SwipePrice/>
             
    
      </div>
      <div className='flex justify-center text-center mt-20 text-2xl max-md:text-base'>
        <h1 className='w-7/12 max-md:w-screen'>if the tournament is canceled then the money that has been transferred will be returned</h1>
      </div>
    </div>
    </AnimatePresence>
  );
}

export default Price;
