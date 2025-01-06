import estilos from "../css/Card.module.css";
import { forwardRef, useState } from "react";
import Escritor from "./Escritor";
import { motion } from "framer-motion";

const Card = forwardRef<HTMLDivElement>((_, ref) => {
  const [escribir, setEscribir] = useState(false);
  const mostrar = () => {
    setEscribir(!escribir);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: "-100%",
        marginTop: "1px",
      }}
      whileInView={{ opacity: 1, translateX: "0" }}
      transition={{ duration: 0.8, ease: "circOut" }}
      id={estilos.section_card}
      ref={ref}
    >
      <div className={estilos.foto_container}>
        <img src="/img1.jpg" alt="" id={estilos.foto_perfil} />
      </div>
      <aside>
        <motion.h2 onViewportEnter={mostrar} onViewportLeave={mostrar}>
          {escribir && <Escritor escribir_text="Acerca de mi" />}
        </motion.h2>
        <p>
          Soy estudiante de informática en formación, apasionado por el
          desarrollo web, el aprendizaje continuo y la resolución de problemas.
          Estoy iniciando mi camino en la programación y busco oportunidades
          para ganar experiencia en el desarrollo de soluciones creativas y
          funcionales.
        </p>
        <br />
        <p>
          Me considero responsable, proactivo y comprometido con mis proyectos y
          estudios. Además, disfruto trabajar en equipo y explorar nuevas
          tecnologías que me permitan mejorar mis habilidades y aportar valor a
          los proyectos en los que participo.
        </p>
      </aside>
    </motion.div>
  );
});

export default Card;
