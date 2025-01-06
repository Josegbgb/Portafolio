import estilos from "../css/Proyecto.module.css";

import { forwardRef } from "react";
import { motion } from "framer-motion";
const proyectos = [
  {
    nombre: "Lista de actividades - responsive",
    img: "/lista_actividades.PNG",
    enlace: "https://josegbgb.github.io/ListaActividades/",
    descripcion:
      "Aplicacion web diseñada con html, css y javascript. Con el fin de llevar un control de actividades a realizar",
  },
  {
    nombre: "Juego de memoria - responsive",
    img: "/memoria.PNG",
    enlace: "https://josegbgb.github.io/Memoria/",
    descripcion:
      "Juego de memoria diseñado con html, css y javascrip. El cual registra y muestra en pantalla los mejores tiempos  ",
  },
  {
    nombre: "Personajes e historietas de marvel - responsive",
    img: "/marvel.PNG",
    enlace: "https://josegbgb.github.io/marvel/",
    descripcion:
      "Aplicacion web que consume la API de Marvel, incluye un buscador y simula un registro de usuario",
  },
  {
    nombre: "Simulador de testimonios FreeCodeCamp - responsive",
    img: "/testimonios.PNG",
    enlace: "https://josegbgb.github.io/testimonios_freecodecamp/",
    descripcion:
      "Pagina web basada en los testimonios de FreeCodeCamp. Diseñada con react y css",
  },
];

const Proyectos = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: "30deg" }}
      whileInView={{ opacity: 1, rotateX: "0" }}
      transition={{ duration: 0.8, ease: "circOut" }}
      id={estilos.container}
      ref={ref}
    >
      <div id={estilos.proyectos_section}>
        <h2>Proyectos realizados</h2>
        <div id={estilos.proyectos_container}>
          {proyectos.map((elemento) => (
            <div
              className={`card ${estilos.card_space}`}
              style={{ width: "18rem" }}
            >
              <a href={elemento.enlace} target="_blanket">
                <img
                  src={elemento.img}
                  className={`card-img-top ${estilos.imagenes}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{elemento.nombre}</h5>
                  <p className="card-text">{elemento.descripcion}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <h2>Contacto</h2>
        <div id={estilos.container_footer}>
          <div className={estilos.footer_img}>
            <a
              href="https://wa.me/584146243428"
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--color": "#0072b1" } as React.CSSProperties}
            >
              <img src="/whatsapp.png" alt="" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=josemiguelgb27@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--color": "#E1306C" } as React.CSSProperties}
            >
              <img src="/gmail.png" alt="" />
            </a>
            <a
              href="https://github.com/Josegbgb"
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--color": "rgb(203, 200, 12)" } as React.CSSProperties}
            >
              <img src="/github.png" alt="" />
            </a>
          </div>
          <div className={estilos.footer_aside}>
            <h5>Desarrollado por Jose Gonzalez</h5>
            <img src="/react.png" alt="" />
            <img src="/css.png" alt="" />
            <img src="/bootstrap.png" alt="" />
          </div>
        </div>
      </footer>
    </motion.div>
  );
});

export default Proyectos;
