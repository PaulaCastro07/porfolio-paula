import React from 'react'
import VideoHero from '../media/video2.mp4';


export default function Hero() {
  return (
    <div className="w-full h-screen bg-black text-white flex items-center justify-center relative">
      
    <video 
    id='video'
    className="w-full h-screen object-cover" 
    src={VideoHero} 
    muted 
    loop   
    autoPlay
    />

    <div className='w-full h-screen absolute top-0 left-0 bg-black/80  flex items-center justify-center text-4xl'>
    
      <div>
      <h1 className="text-3xl md:text-5xl ">Bienvenido a Mi Website</h1>
      <h4 className='text-lg flex justify-center'>Desarrollador Web</h4>

      </div>
    </div>
    

    
 
 
    </div>

  );
}
