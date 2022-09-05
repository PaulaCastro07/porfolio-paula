import React from 'react'
import Foto from  "../ImagenesPort/WhatsApp Image 2022-08-03 at 9.27.05 PM.jpeg";
import html from "../ImagenesPort/html.png";
import css from "../ImagenesPort/css.png"; 
import js from "../ImagenesPort/js.png";
import react from "../ImagenesPort/react.png";

export default function About() {
  return (
    
    <div id='sobremi' className="w-[90%]  mx-auto h-screen md:grid grid-cols-2 justify-center align-center ">
        <div className="col-span-1 m-auto ">
            <img className='m-auto w-[60%] rounded-[10px] my-[2%]' src={Foto} alt="foto"/>
        </div>
        
        <div className="col-span-1 text-white rounded-[10px] bg-violet-600 text-center justify-center  align-center m-auto w-[80%] h-[50%] "> 
          <div className="">
            <h2 className='p-1 text-4xl'>Paula A. Castro</h2>
            <p className='p-[10%] text-[75%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nihil vitae architecto illo illum, accusantium iusto dicta provident veritatis ipsam rerum voluptate, harum qui praesentium, quae laborum autem facere?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>
          <div className='' >
            <div>
              <h3>Mis Tecnologias:</h3>
            </div>
            <div className='flex justify-center p-2 '>
            <img className='w-[10%] ' src={html} alt="html5"/>
            <img className='w-[10%]' src={css} alt="css"/>
            <img className='w-[10%]' src={js} alt="js"/>
            <img className='w-[10%]' src={react} alt="react"/>
            </div>
           
          </div>
        </div>
    </div>
  );
}
