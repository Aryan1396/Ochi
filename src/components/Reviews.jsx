// eslint-disable-next-line no-unused-vars
import React from 'react'

function Reviews() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.6" className='overflow-hidden block mt-[20vw] '>
        <div className='border-b-[1px]'>
             <h1 className='text-[58px] font-["Neue_Montreal"] px-12'>Clients’ reviews</h1>
        </div>
        <div className='flex justify-between p-5 px-14'>
        
        {["Karman Ventures", "Services:", "William Barnes", "READ"].map((item,index)=>(
            <h1 key={index} className={`'font-["Neue_Montreal"] from-neutral-300' ${index==3 && 'ml-[300px] cursor-pointer text-[#bdbdbd]'} ${index==0 && "border-b-[1px] border-[#888888]"}`}>{item}</h1>
        ))}
        </div>
        <div className='flex translate-x-1/4 translate-y-12 gap-[195px]'>
            <div className='gap-5 flex flex-col ml-[40px]'>
                <button className='border-[2px] p-[10px] rounded-full  font-["Neue_Montreal"] h-[50px]'>SALES DECK</button>
                <button className='border-[2px] p-[10px] rounded-full  font-["Neue_Montreal"] h-[50px]'>INVESTOR DECK</button>
            </div>
            <div className='w-[28%]'>
            <img className='w-[130px] rounded-3xl' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
            <p className='mt-5 font-["Neue_Montreal"]'>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
            </div>
        </div>
        
        <div className=''>
          <div className='flex mt-[150px] justify-between border-t-[1px]'>
        <div className='flex flex-col font-["Neue_Montreal"] gap-4 w-full pt-5'>
          {["Planetly", "Workiz Easy", "Premium Blend", "Hypercare Systems", "Officevibe", "Orderlion", "Black Book", "Trawa Energy",].map((item,index)=>(
            <a href="" key={index} className='border-b-[1px] px-[100px] pb-5 underline'>{item}</a>
          ))}
        </div>
        <div className='flex flex-col font-["Neue_Montreal"] gap-4 w-full pt-5'>
        {["Nina Walloch", "Tomer Levy", "Ellen Kim", "Brendan Goss", "Raff Labrie", "Stefan Strohmer", "Jaci Smith", "David Budde",].map((item,index)=>(
            <a href="" key={index} className='border-b-[1px] pl-[280px] pb-5'>{item}</a>
          ))}
        </div>
        <div className='flex flex-col font-["Neue_Montreal"] gap-4 w-full pt-5'>
        {["READ", "READ", "READ", "READ", "READ", "READ", "READ", "READ",].map((item,index)=>(
            <a href="" key={index} className='border-b-[1px] pl-[350px] pb-5 underline'>{item}</a>
          ))}
        </div>
      </div>
        </div>
      
     <div  className='flex px-10 py-20 gap-5 pb-[250px]'>
      <div className='w-[720px] h-[420px] bg-[#004d43] rounded-xl overflow-hidden'>
         <img className="translate-x-[300px] translate-y-[170px] w-[145px] h-[67px] " src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
         <h1 className='h-[30px] w-[100px] mt-[300px] ml-10 text-[#cdea68] rounded-full bg-transparent border-[1px] border-[#cdea68] text-center justify-center font-["Neue_Montreal"] align-middle'>@2019-22</h1>
      </div>
      <div className='flex  gap-5 '>
        <div className='h-[420px] w-[350px] rounded-xl bg-[#212121] '>
           <img className='w-[150px] h-[80px] translate-x-[100px] translate-y-[170px] bg-cover' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
           <h1 className='h-[30px] w-[200px] rounded-full bg-transparent border-2 text-white border-[#a3a1a1] text-center justify-center mt-[280px] ml-8'>RATING 5.0 ON CLUTCH</h1>
        </div>
       <div className='h-[420px] w-[350px] rounded-xl bg-[#212121] '>
         <img className=' bg-[#212121] w-[100px] h-[100px] translate-x-[120px] translate-y-[150px]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
         <h1 className='h-[30px] rounded-full bg-transparent border-2  text-white border-[#a3a1a1] text-center justify-center w-[245px] mt-[260px] ml-5'>BUSINESS BOOTCAMP ALUMNI</h1>
       </div>
       
      </div>
      </div>  
    </div>
  )
}

export default Reviews