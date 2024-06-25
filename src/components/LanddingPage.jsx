// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa6";

function LanddingPage() {
  
  return (
    <div data-scroll data-scroll-speed="-0.5">
    <div  className='heroPage flex justify-between overflow-x-hidden font-["Founders_Grotesk_X-Cond Med"]'>
    
      <div className="mt-52 px-20">
        {["we create","Eye Opening","Presentation"].map((item,index)=>(
          <div key= {index} className="w-fit flex overflow-hidden">
            {index==1 && (
              <motion.div
              initial = {{width: 0}}
              animate = {{width: "9vw" }}
              transition = {{ease: [0.76, 0 , 0.24, 1], duration:1}}
            ><img className="w-[9vw] h-[6vw] relative top-[20px] rounded-xl" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"></img></motion.div>)}
          <h1 className="uppercase text-[9vw] h-full leading-[.60]  py-[1vw] tracking-tighter  font-bold">{item}</h1> 
          </div>
        ))}

      </div>

        <a href='https://www.awwwards.com/sites/ochi-design' className=' mt-[200px]  h-[200px] flex bg-red-500 '>
          <h3 className='text-white text-[30px] font-[500] ml-2'>W.</h3>
          <div  className=' w-[20px] h-[100px] rotate-[-90deg]'>
             <h5 className='text-white mt-[10px] ml-[-110px]'>Site of the day</h5>
          </div>
         
        </a>
    </div>
    <div className='border-[0.5px] border-gray-300 mt-[100px] '></div>
    <div className='flex justify-between p-[70px] pt-5 text-[17px]'>
        <p>For public and private companies</p>
        <p>From the first pitch to IPO</p>
        <p className='border-[1px] border-gray-600 w-[200px] text-center h-[30px] justify-center rounded-full '>START THE PROJECT</p>
        <div className='text-[20px] ml-[-350px] mt-0 px-1 py-1 border-[2px] border-gray-600 rounded-full font-[100] rotate-[-45deg]'>
           <FaArrowRight />
        </div>
         
       
    </div>
    
    </div>
  )
}

export default LanddingPage