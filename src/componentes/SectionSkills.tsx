import React, { forwardRef } from "react";
import estilos from "../css/skills.module.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ImgContainer = () => {
  const { t } = useTranslation(["idioma"]);
  const lenguaje = t("skillsH2");
  const img_lenguajes = [
    { img: "/Portafolio/html.png" },
    { img: "/Portafolio/css.png" },
    { img: "/Portafolio/js.png" },
    { img: "/Portafolio/sql.png" },
  ];
  const img_librerias = [
    { img: "/Portafolio/react.png" },
    { img: "/Portafolio/bootstrap.png" },
    { img: "/Portafolio/animista.png" },
  ];

  return (
    <>
      <h1>{t("skillsH1")}</h1>
      <h2
        style={{ "--color": "#E1306C" } as React.CSSProperties}
        className={estilos.titulos}
        data-text={`\u00A0${t("skillsH2")}\u00A0`}
      >
        &nbsp;{t("skillsH2")}&nbsp;
      </h2>
      <div className={estilos.section_skills}>
        {img_lenguajes.map((elemento) => (
          <img src={elemento.img} alt="" className={estilos.imagenes} />
        ))}
      </div>
      <h2
        style={{ "--color": "gold" } as React.CSSProperties}
        className={estilos.titulos}
        data-text={`\u00A0${t("skillsH2_2")}\u00A0`}
      >
        &nbsp;{t("skillsH2_2")}&nbsp;
      </h2>
      <div className={estilos.section_skills}>
        {img_librerias.map((elemento) => (
          <img src={elemento.img} alt="" className={estilos.imagenes} />
        ))}
      </div>
      <h2
        style={{ "--color": "darkblue" } as React.CSSProperties}
        className={estilos.titulos}
        data-text={`\u00A0${t("skillsH2_3")}\u00A0`}
      >
        &nbsp;{t("skillsH2_3")}&nbsp;
      </h2>
      <div className={estilos.section_skills}>
        <img src="/Portafolio/github.png" alt="" id={estilos.img_herramienta} />
      </div>
    </>
  );
};

const SectionSkills = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      id={estilos.skills_container}
      ref={ref}
    >
      <ImgContainer />
    </motion.div>
  );
});

export default SectionSkills;
