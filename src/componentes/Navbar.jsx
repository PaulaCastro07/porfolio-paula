import React from 'react'
import{IoLogoWhatsapp} from "react-icons/io";

export default function Navbar() {
  return (
    <div className='w-full h-[80px] fixed z-20 bg-violet-400/80'>
       <div className='w-[90%] h-full m-auto flex justify-between items-center'>
        <div className='w-14 h-14 bg-violet-500 rounded-full text-white flex items-center justify-center font-light text-xl  hover:scale-110 duration-30 drop-shadow-xl hover:bg-violet-700'>
        <a href="#Logo">P | C</a>
        </div>
        
        <div>
            <ul className=" w-full h-full hidden md:flex gap-6 text-white text-xl">
                <li className='hover:underline hover:scale-110 duration-30 hover:text-violet-600'>
                    <a href="#video">Inicio</a>
                </li>
                <li className='hover:underline hover:scale-110 duration-30 hover:text-violet-600'>
                    <a href="#sobremi">Sobre Mi</a>
                </li>
                <li className='hover:underline hover:scale-110 duration-30 hover:text-violet-600'>
                    <a href="#paos">Proyectos</a>
                </li>
                <li className='hover:underline hover:scale-110 duration-30 hover:text-violet-600'>
                    <a href="#paoffs">Contacto</a>
                </li>
            </ul>
        </div>
        <div className='w-14 h-14 rounded-full bg-white flex items-center justify-center hover:scale-125 drop-shadow-xl hover:bg-violet-500' >
            <a href="icono">
                <IoLogoWhatsapp className="
                w-9 h-9 text-green-500 "/>
            </a>
        </div>
       </div>
       
    </div>
  );
}
