import React, { useRef } from "react";
import Card from "./componentes/Card";
import Section from "./componentes/Section";
import SectionSkills from "./componentes/SectionSkills";
import Proyectos from "./componentes/Proyectos";
import estilos from "./css/menu.module.css";

function App() {
  const seccion1 = useRef(null);
  const seccion2 = useRef(null);
  const seccion3 = useRef(null);
  const seccion4 = useRef(null);

  const scroll = (ref: React.RefObject<HTMLElement>) => {
    const offset = 44;
    const element = ref.current;
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <div id={estilos.menu}>
        <button onClick={() => scroll(seccion1)}>Inicio</button>
        <button onClick={() => scroll(seccion2)}>Acerca de mi</button>
        <button onClick={() => scroll(seccion3)}>Habilidades</button>
        <button onClick={() => scroll(seccion4)}>Proyectos</button>
      </div>
      <Section ref={seccion1} />
      <Card ref={seccion2} />
      <SectionSkills ref={seccion3} />
      <Proyectos ref={seccion4} />
    </>
  );
}

export default App;
