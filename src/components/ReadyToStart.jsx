// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

function ReadyToStart() {

    const [rotate, setRotate] = useState(0);

    useEffect (()=>{
        window.addEventListener('mousemove', (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;
            
            var angle = Math.atan2(deltaY , deltaX) * (180/Math.PI);
            setRotate(angle - 180);
        })
    })

  return (
    <div  className='w-full rounded-xl bg-[#b8d15e] relative'>
        <div className='h-screen content-center'>
            {["READY", "TO START", "THE PROJECT?",].map((item,index)=>(
                <h1 key={index} className='text-center text-[10vw] font-[800] leading-[150px]'>{item}</h1>
            ))}
                
                
        <div className='z-[999] absolute w-full h-screen mt-[-640px]'>
              <div className='relative w-full h-screen bg-cover bg-center overflow-hidden'>
            <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10 '>
                <div className='w-[12vw] h-[12vw] flex items-center justify-center bg-zinc-100 rounded-full'>
                    <div className='relative w-[55%] h-[55%] flex items-center justify-center rounded-full bg-zinc-900'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                        <div className='w-[20px] h-[20px] bg-zinc-100 rounded-full '></div>
                        </div>
                       
                    </div>
                </div>
                <div className='w-[12vw] h-[12vw] flex items-center justify-center bg-zinc-100 rounded-full'>
                <div className='relative w-[55%] h-[55%] flex items-center justify-center rounded-full bg-zinc-900'>
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                        <div className='w-[20px] h-[20px] bg-zinc-100 rounded-full '></div>
                        </div>
                    </div>
            </div>
            </div>
        </div>
        </div>
        </div>

            <div className='buttons grid place-items-center '>
                <a className='uppercase border-2 w-[250px] h-[60px] flex justify-center items-center gap-5  rounded-full bg-black text-white border-none' href="">start the project <div className='w-2 h-2 bg-white rounded-full'></div></a>
                <a href=""></a>
                <h1 className='px-3 py-3'>OR</h1>
                <a className='uppercase border-2 w-[250px] h-[60px] flex justify-center items-center gap-5  rounded-full bg-transparent text-black border-black ' href="">hello@ochi.design<div className='w-2 h-2 bg-black rounded-full ml-5 mt-2'></div></a>
                <a href=""></a>
            </div>
    </div>
  )
}

export default ReadyToStart