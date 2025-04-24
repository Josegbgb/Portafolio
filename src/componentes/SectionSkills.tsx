import React, { forwardRef, useState } from "react";
import estilos from "../css/skills.module.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  HTML5,
  CSS,
  JavaScript,
  VbNet,
  Bootstrap,
  Motion,
  GitHub,
  IconR,
  WordPress,
} from "./icons/jsIcon";
import Escritor from "./Escritor";

const ImgContainer = () => {
  const { t } = useTranslation(["idioma"]);
  const [escritor, setEscritor] = useState(false);
  return (
    <>
      <motion.h1
        onViewportEnter={() => setEscritor(!escritor)}
        onViewportLeave={() => setEscritor(!escritor)}
      >
        {escritor && <Escritor escribir_text={t("skillsH1")} />}
      </motion.h1>

      <h2
        style={{ "--color": "#E1306C" } as React.CSSProperties}
        className={estilos.titulos}
        data-text={`\u00A0${t("skillsH2")}\u00A0`}
      >
        &nbsp;{t("skillsH2")}&nbsp;
      </h2>

      <div className={estilos.section_skills}>
        <HTML5 className={estilos.iconos} />
        <CSS className={estilos.iconos} />
        <JavaScript className={estilos.iconos} />
        <img src="/Portafolio/sql.png" alt="" className={estilos.iconos} />
        <VbNet className={estilos.iconos} />
      </div>

      <h2
        style={{ "--color": "gold" } as React.CSSProperties}
        className={estilos.titulos}
        data-text={`\u00A0${t("skillsH2_2")}\u00A0`}
      >
        &nbsp;{t("skillsH2_2")}&nbsp;
      </h2>
      <div className={estilos.section_skills}>
        <IconR className={estilos.iconos} />
        <Motion className={estilos.iconos} />
        <Bootstrap className={estilos.iconos} />
      </div>

      <h2
        style={{ "--color": "darkblue" } as React.CSSProperties}
        className={estilos.titulos}
        data-text={`\u00A0${t("skillsH2_3")}\u00A0`}
      >
        &nbsp;{t("skillsH2_3")}&nbsp;
      </h2>
      <div className={estilos.section_skills}>
        <GitHub className={estilos.iconos} />
        <img src="/Portafolio/vb.png" alt="" className={estilos.iconos} />
        <WordPress className={estilos.iconos} />
      </div>
    </>
  );
};

const SectionSkills = forwardRef<HTMLDivElement>((_, ref) => {
  const [mostrar, SetMostar] = useState(false);
  const mostrarBack = () => {
    SetMostar(!mostrar);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      id={estilos.skills_container}
      ref={ref}
      onViewportEnter={mostrarBack}
      onViewportLeave={mostrarBack}
      className={mostrar ? estilos.bg_pan_top : ""}
    >
      <ImgContainer />
    </motion.div>
  );
});

export default SectionSkills;
