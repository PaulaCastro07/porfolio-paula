import About from "./componentes/About";
import Hero from "./componentes/Hero";
import Navbar from "./componentes/Navbar";
import Projects from "./componentes/Projects";

function App() {
  return (
    <div className=" w-full h-full font-monserrat-bold">
      {/* Navbar */}
      <Navbar/>

      {/* Hero */}
      <Hero/>
      {/* About */}
      <About/>
      {/*Proyectos  */}
      <Projects/>
      {/* contacts */}
      {/* footer */}
      
    

    </div>
  );
}

export default App;
