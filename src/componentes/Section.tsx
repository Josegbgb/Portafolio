import estilos from "../css/Section.module.css";
import Escritor from "./Escritor";
import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
      id={estilos.main_container}
      className={estilos.color_change_5x}
      ref={ref}
    >
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
                <svg
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="icon"
                >
                  <path
                    fill="green"
                    d="M16 .67C7.88.67.92 7.63.92 15.77c0 2.83.77 5.62 2.22 8.07L.6 31.23l7.61-2.45c2.33 1.27 4.97 1.93 7.77 1.93 8.12 0 15.08-6.96 15.08-15.1 0-8.14-6.96-15.1-15.1-15.1zm7.9 21.7c-.53 1.47-2.6 2.67-3.58 2.73-.97.06-1.68.74-5.78-.96-4.1-1.7-6.68-5.8-6.88-6.05-.2-.25-1.64-2.2-1.64-4.2 0-1.96 1.02-2.93 1.38-3.33.36-.4.75-.53.99-.53.25 0 .5 0 .72.01.23.01.54-.08.84.64.3.72 1.08 2.45 1.17 2.63.1.18.15.39.03.63-.12.23-.18.38-.36.59-.18.2-.3.32-.44.52-.13.2-.27.41-.12.78.15.36.66 1.09 1.43 1.76.99.87 1.81 1.14 2.17 1.27.36.13.56.11.76-.08.2-.2.88-.96 1.12-1.3.25-.33.5-.28.85-.17.36.12 2.27 1.07 2.67 1.26.4.2.66.3.76.47.12.16.12.96-.4 2.42z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=josemiguelgb27@gmail.com"
                target="_blank"
              >
                <svg
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="icon"
                >
                  <path
                    fill="red"
                    d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zM464 400H48V143.791l208 133.207L464 143.791V400zM464 112v-7.209L256 238.793 48 104.791V112h416z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </button>
      </div>
    </section>
  );
});

export default Section;
