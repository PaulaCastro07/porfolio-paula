import React from 'react'
import Foto from  "../ImagenesPort/WhatsApp Image 2022-08-03 at 9.27.05 PM.jpeg";
import html from "../ImagenesPort/html.png";
import css from "../ImagenesPort/css.png"; 
import js from "../ImagenesPort/js.jpg";
import react from "../ImagenesPort/react.png";
import sass from "../ImagenesPort/sass.png";
import figma from "../ImagenesPort/figma.png";

export default function About() {
  return (

    <div className="bg-violet-400 p-2">
    <div id='sobremi' className="w-[90%]  mx-auto h-screen md:grid grid-cols-2 justify-center align-center ">
        <div className="col-span-1 ">
            <img className='mx-auto my-[15%] w-[60%] rounded-[10px] shadow-black shadow-lg ' src={Foto} alt="foto"/>
        </div>
        
        <div className="col-span-1 text-white rounded-[10px] bg-violet-600 text-center justify-center  align-center m-auto w-[90%] h-[50%] md:h-[70%] shadow-black shadow-lg"> 
          <div>
            <h2 className='p-1 text-4xl'>Paula Castro</h2>
            <p className='p-[12%] text-[100%]'>Soy desarrolladora Web, Tengo 20 años y comencé mis estudios hace 6 meses en distintos bootcamps y cursos. Me sigo formando en la nuevas tecnologias y todas sus actualizaciones. Forme parte de un equipo de desarrolladores webs para negocios, y sus marcas personales. <br/>
            </p>
          </div>
          <div>
            <div>
              <h3 className="text-2xl">Mis Tecnologias:</h3>
            </div>
            <div className='flex justify-center p-4 '>
            <img className='w-[7%] mx-3' src={html} alt="html7"/>
            <img className='w-[7%] mx-3' src={css} alt="css"/>
            <img className='w-[7%] mx-3' src={js} alt="js"/>
            <img className='w-[7%] mx-3' src={react} alt="react"/>
            <img className='w-[7%]  mx-3' src={sass} alt="sass"/>
            <img className='w-[7%]  mx-3' src={figma} alt="figma"/>
            </div>
           
          </div>
        </div>
    </div>
    </div>
  );
}
