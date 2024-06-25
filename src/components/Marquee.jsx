// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'


function Marquee() {
  return (
    
  <div data-scroll data-scroll-section data-scroll-speed="0.2" className='w-full h-[100%] py-[100px] bg-[#004d43] rounded-tl-3xl rounded-tr-3xl'>
   <div className='text-white border-t-[1px] border-b-[1px] border-white flex whitespace-nowrap  overflow-hidden uppercase '>
     <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease: "linear", duration: 8 }} className='text-[30vh] leading-none  font-[900] pb-[20px] font-sans pl-20'>we are ochi</motion.h1>
    <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease: "linear", duration: 8 }} className='text-[30vh] leading-none  font-[900] pb-[20px] font-sans pl-20'>we are ochi</motion.h1>
   </div>
  
  </div>
  )
}

export default Marquee