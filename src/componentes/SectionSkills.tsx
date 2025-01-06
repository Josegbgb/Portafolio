import React, { forwardRef } from "react";
import estilos from "../css/skills.module.css";
import { motion } from "framer-motion";

const ImgContainer = () => {
  const img_lenguajes = [
    { img: "/html.png" },
    { img: "/css.png" },
    { img: "/js.png" },
    { img: "/sql.png" },
  ];
  const img_librerias = [
    { img: "/react.png" },
    { img: "/bootstrap.png" },
    { img: "/animista.png" },
  ];

  return (
    <>
      <h1>Habilidades</h1>
      <h2
        style={{ "--color": "#E1306C" } as React.CSSProperties}
        className={estilos.titulos}
        data-text="&nbsp;Lenguajes"
      >
        &nbsp;Lenguajes&nbsp;
      </h2>
      <div className={estilos.section_skills}>
        {img_lenguajes.map((elemento) => (
          <img src={elemento.img} alt="" className={estilos.imagenes} />
        ))}
      </div>
      <h2
        style={{ "--color": "gold" } as React.CSSProperties}
        className={estilos.titulos}
        data-text="&nbsp;Frameworks y librerias"
      >
        &nbsp;Frameworks y librerias&nbsp;
      </h2>
      <div className={estilos.section_skills}>
        {img_librerias.map((elemento) => (
          <img src={elemento.img} alt="" className={estilos.imagenes} />
        ))}
      </div>
      <h2
        style={{ "--color": "darkblue" } as React.CSSProperties}
        className={estilos.titulos}
        data-text="&nbsp;Herramientas"
      >
        &nbsp;Herramientas&nbsp;
      </h2>
      <div className={estilos.section_skills}>
        <img src="/github.png" alt="" id={estilos.img_herramienta} />
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
