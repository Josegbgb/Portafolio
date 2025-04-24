import estilos from "../css/Section.module.css";
import Escritor from "./Escritor";
import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Particles from "./background";
import { Gmail, WhatsApp } from "./icons/jsIcon";

const Section = forwardRef<HTMLDivElement>((_, ref) => {
  const { t, i18n } = useTranslation(["idioma"]);
  const [isActive, setIsActive] = useState(false);
  const [contador, setContador] = useState(0);
  const [escribir, setEscribir] = useState(false);

  const mostrar = () => {
    setEscribir(!escribir);
  };
  const btn_enlaces = () => {
    setContador(contador + 1);
    if (isActive) return;
    setIsActive(true);

    let intervalo = setTimeout(() => {
      clearTimeout(intervalo);
      setIsActive(false);
    }, 3000);
  };
  const cambiarIdioma = (e: React.MouseEvent<HTMLButtonElement>) => {
    let btn = e.currentTarget;
    if (btn.textContent === "ES") {
      i18n.changeLanguage("en");
      btn.textContent = "EN";
    } else {
      i18n.changeLanguage("es");
      btn.textContent = "ES";
    }
  };
  const abrirPdf = () => {
    window.open("cv.pdf", "_blank");
  };

  return (
    <section
      // id={estilos.main_container}
      //className={estilos.color_change_5x}
      ref={ref}
    >
      <Particles
        particleColors={["#B6410F", "#B6410F"]}
        particleCount={400}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />
      <button id={estilos.cambiarIdioma} onClick={cambiarIdioma}>
        ES
      </button>

      <div id={estilos.section_cuadro} className={estilos.shadow_pop_tr}>
        <motion.h1
          className={estilos.titulo_animado}
          onViewportEnter={mostrar}
          onViewportLeave={mostrar}
        >
          {escribir && <Escritor escribir_text="Jose Gonzalez" />}

          <span className={estilos.cursor}></span>
        </motion.h1>
        <h2>{t("sectionTitle")}</h2>
        <button
          className={`${estilos.bounce_top} ${estilos.btn_section}`}
          onClick={abrirPdf}
        >
          Cv
        </button>
        <button
          className={`${
            isActive
              ? `${estilos.btn_section} btn_links btn_links_active span`
              : `${contador < 1 ? `${estilos.bounce_top}` : ``}  ${
                  estilos.btn_section
                } btn_links`
          }`}
          onClick={btn_enlaces}
          value={contador}
        >
          <span>{t("btnContact")}</span>
          <ul>
            <li>
              <a href="https://wa.me/584146243428" target="_blank">
                <WhatsApp />
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=josemiguelgb27@gmail.com"
                target="_blank"
              >
                <Gmail />
              </a>
            </li>
          </ul>
        </button>
      </div>
    </section>
  );
});

export default Section;
