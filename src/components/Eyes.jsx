// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'


function Eyes() {

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
        <div className='h-screen w-full overflow-hidden'>
              <div data-scroll data-scroll-section data-scroll-speed="-0.8" className='relative w-full h-screen bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]     flex gap-10 '>
                <div className='w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full'>
                    <div className='relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                        <div className='w-[20px] h-[20px] bg-zinc-100 rounded-full '></div>
                        </div>
                       
                    </div>
                </div>
                <div className='w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full'>
                <div className='relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900'>
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                        <div className='w-[20px] h-[20px] bg-zinc-100 rounded-full '></div>
                        </div>
                    </div>
            </div>
            </div>
        </div>
        </div>

      

    )
}

export default Eyes