import estilos from "../css/Proyecto.module.css";
import React, { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Escritor from "./Escritor";
import {
  CSS,
  Bootstrap,
  IconR,
  WhatsApp,
  Gmail,
  GitHubFoooter,
} from "./icons/jsIcon";

const Proyectos = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation(["idioma"]);
  const [escribir, setEscribir] = useState(false);
  const proyectos = [
    {
      nombre: t("project1_name"),
      img: "/Portafolio/lista_actividades.PNG",
      enlace: "https://josegbgb.github.io/ListaActividades/",
      color: "rgba(51, 166, 168, 0.59)",
      descripcion: t("project1_description"),
    },
    {
      nombre: t("project2_name"),
      img: "/Portafolio/memoria.PNG",
      color: "rgba(193, 119, 34, 0.59)",
      enlace: "https://josegbgb.github.io/Memoria/",
      descripcion: t("project2_description"),
    },
    {
      nombre: t("project3_name"),
      img: "/Portafolio/marvel.PNG",
      enlace: "https://josegbgb.github.io/marvel/",
      color: "rgba(62, 18, 106, 0.59)",
      descripcion: t("project3_description"),
    },
    {
      nombre: t("project4_name"),
      img: "/Portafolio/testimonios.PNG",
      enlace: "https://josegbgb.github.io/testimonios_freecodecamp/",
      color: "rgba(216, 215, 214, 0.59)",
      descripcion: t("project4_description"),
    },
    {
      nombre: t("project5_name"),
      video: "/Portafolio/sistema.mp4",
      enlace: "https://github.com/Josegbgb/Sistema-de-gestion-para-preescolar",
      color: "rgba(39, 61, 122, 0.48)",
      descripcion: t("project5_description"),
    },
  ];
  return (
    <motion.div
      //initial={{ opacity: 0, rotateX: "30deg" }}
      //whileInView={{ opacity: 1, rotateX: "0" }}
      initial={{ opacity: 0, translateX: -100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      id={estilos.container}
      ref={ref}
    >
      <div id={estilos.proyectos_section}>
        <motion.h2
          onViewportEnter={() => setEscribir(!escribir)}
          onViewportLeave={() => setEscribir(!escribir)}
        >
          {escribir && <Escritor escribir_text={t("projectH2")} />}
        </motion.h2>
        <div id={estilos.proyectos_container}>
          {proyectos.map((elemento) => (
            <div
              className={`card ${estilos.card_space}`}
              style={
                {
                  width: "18rem",
                  "--colorSpace": elemento.color,
                } as React.CSSProperties
              }
            >
              <a href={elemento.enlace} target="_blanket">
                {elemento.img ? (
                  <img
                    src={elemento.img}
                    className={`card-img-top ${estilos.imagenes}`}
                  />
                ) : elemento.video ? (
                  <video
                    className={`${estilos.video}`}
                    src={elemento.video}
                    autoPlay
                    loop
                    muted
                  />
                ) : null}

                <div className="card-body">
                  <h5 className="card-title">{elemento.nombre}</h5>
                  <p className="card-text">{elemento.descripcion}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

export const Footer = () => {
  const { t } = useTranslation(["idioma"]);
  return (
    <footer>
      <h2>{t("footerH2")}</h2>
      <div id={estilos.container_footer}>
        <div className={estilos.footer_img}>
          <a
            href="https://wa.me/584146243428"
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--color": "#0072b1" } as React.CSSProperties}
          >
            <WhatsApp className={estilos.iconosLink} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=josemiguelgb27@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--color": "#E1306C" } as React.CSSProperties}
          >
            <Gmail className={estilos.iconosLink} />
          </a>
          <a
            href="https://github.com/Josegbgb"
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--color": "rgb(203, 200, 12)" } as React.CSSProperties}
          >
            <GitHubFoooter className={estilos.iconosLink} />
          </a>
        </div>
        <div className={estilos.footer_aside}>
          <h5>{t("footerH5")}</h5>
          <IconR className={estilos.iconos} />
          <CSS className={estilos.iconos} />
          <Bootstrap className={estilos.iconos} />
        </div>
      </div>
    </footer>
  );
};
export default Proyectos;
