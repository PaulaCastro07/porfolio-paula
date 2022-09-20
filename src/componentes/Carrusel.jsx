import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, Autoplay} from "swiper";
import htmlImagen from "../ImagenesPort/Captura de pantalla 2022-08-03 145514.png"
import disney from "../ImagenesPort/1.png"
import viajes from "../ImagenesPort/2.png"
import cafe from "../ImagenesPort/3.png"

export default function Carrusel() {

    const info = [
        {
            imagen:htmlImagen,
            titulo:"Titulo 1",
            tituloChiquito:"Proyecto 1",
            info:"lorem ipsum dolor sit amet, consectetur adipiscing el aspect, ",
            link:"",
            code:""
        },
        {
            imagen:cafe,
            titulo:"Titulo 2",
            tituloChiquito:"Proyecto 2",
            info:"lorem ipsum dolor sit amet, consectetur adipiscing el aspect, ",
            link:"",
            code:""
        },
        {
            imagen:disney,
            titulo:"Titulo 3",
            tituloChiquito:"Proyecto 3",
            info:"lorem ipsum dolor sit amet, consectetur adipiscing el aspect, ",
            link:"https://paulacastro07.github.io/disneyPagina/",
            code:""
        },
        {
          imagen:viajes,
          titulo:"Titulo 4",
          tituloChiquito:"Proyecto 4",
          info:"lorem ipsum dolor sit amet, consectetur adipiscing el aspect, ",
          link:"",
          code:""
        } 
        
    ]

    return (
        <>
          <Swiper
          centeredSlides={true}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
                    delay: 3000,
                    disableOnInteraction: true
                }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1300: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination, Navigation, Autoplay]}
    
            
            className="w-[90%] mx-auto h-[60vh] bg-black"
          >
            {
                info.map(elemento => {
                    return(
                        <SwiperSlide className='flex  justify-center items-center py-16 px-2 m-auto '>
                           <div className="w-full h-full bg-transparent cursor-grab group perspective">
                           
                           <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 rounded-lg ">
                            
                           <div class="absolute backface-hidden   w-full h-full select-none ">
                           <img
                                src={elemento.imagen}
                                class="w-full h-full  rounded-lg object-cover object-center"
                                alt="none"
                            />
                              <div className="absolute top-0 right-0  rounded-b-lg  flex text-center justify-center items-center px-[3%] py-[3%] bg-slate-900/80">
                              <h3 className="font-semibold text-white drow-shadow-lg ">
                                {elemento.tituloChiquito}
                              </h3>
                            </div>
                              </div>
                              {/* Parte Atras de la tarjeta */}
                              <div class="absolute my-rotate-y-180 backface-hidden w-full h-full rounded-lg bg-violet-800 overflow-hidden">
                              <div class="text-center bg-violet-400 flex flex-col items-center justify-start mt-4  h-full text-gray-800 p-4 ">
                              <h3 class="text-xl font-semibold mb-4 px-2">
                                  {elemento.titulo}
                              </h3>
                              <p className="px-4 text-center text-sm ">
                                {elemento.info}
                              </p>
                              <div className="flex z-20  gap-2 absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-2 scale-0 group-hover:scale-100 ">
                         <button className="bg-black text-white p-2 rounded-lg">
                         <a href={elemento.link} target="_blank">Demo</a>
                         </button>
                         <button className="bg-black text-white p-2 rounded-lg" >
                          <a href={elemento.code} target="_blank">Code</a>
                         </button>
                              </div>
                              </div>
                              </div>
                            </div>
                          </div>
                           
                            {/* <img className='w-40 h-40' src={elemento.imagen}/>
                            {elemento.titulo} */}
                            
                        </SwiperSlide>
                    )
                })
            }
            
           
           
          </Swiper>
        </>
      );
}
