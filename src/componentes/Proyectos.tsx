import estilos from "../css/Proyecto.module.css";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Proyectos = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation(["idioma"]);

  const proyectos = [
    {
      nombre: t("project1_name"),
      img: "/Portafolio/lista_actividades.PNG",
      enlace: "https://josegbgb.github.io/ListaActividades/",
      descripcion: t("project1_description"),
    },
    {
      nombre: t("project2_name"),
      img: "/Portafolio/memoria.PNG",
      enlace: "https://josegbgb.github.io/Memoria/",
      descripcion: t("project2_description"),
    },
    {
      nombre: t("project3_name"),
      img: "/Portafolio/marvel.PNG",
      enlace: "https://josegbgb.github.io/marvel/",
      descripcion: t("project3_description"),
    },
    {
      nombre: t("project4_name"),
      img: "/Portafolio/testimonios.PNG",
      enlace: "https://josegbgb.github.io/testimonios_freecodecamp/",
      descripcion: t("project4_description"),
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: "30deg" }}
      whileInView={{ opacity: 1, rotateX: "0" }}
      transition={{ duration: 0.8, ease: "circOut" }}
      id={estilos.container}
      ref={ref}
    >
      <div id={estilos.proyectos_section}>
        <h2>{t("projectH2")}</h2>
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
        <h2>{t("footerH2")}</h2>
        <div id={estilos.container_footer}>
          <div className={estilos.footer_img}>
            <a
              href="https://wa.me/584146243428"
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--color": "#0072b1" } as React.CSSProperties}
            >
              <img src="/Portafolio/whatsapp.png" alt="" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=josemiguelgb27@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--color": "#E1306C" } as React.CSSProperties}
            >
              <img src="/Portafolio/gmail.png" alt="" />
            </a>
            <a
              href="https://github.com/Josegbgb"
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--color": "rgb(203, 200, 12)" } as React.CSSProperties}
            >
              <img src="/Portafolio/github.png" alt="" />
            </a>
          </div>
          <div className={estilos.footer_aside}>
            <h5>{t("footerH5")}</h5>
            <img src="/Portafolio/react.png" alt="" />
            <img src="/Portafolio/css.png" alt="" />
            <img src="/Portafolio/bootstrap.png" alt="" />
          </div>
        </div>
      </footer>
    </motion.div>
  );
});

export default Proyectos;
