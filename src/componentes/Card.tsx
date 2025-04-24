import estilos from "../css/Card.module.css";
import { forwardRef, useState } from "react";
import Escritor from "./Escritor";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FadeContent from "./fade";

const Card = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation(["idioma"]);
  const [escribir, setEscribir] = useState(false);

  const mostrar = () => {
    setEscribir(!escribir);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: "-100%",
        marginTop: "0.1px",
      }}
      whileInView={{ opacity: 1, translateX: "0" }}
      transition={{ duration: 0.8, ease: "circOut" }}
      id={estilos.section_card}
      ref={ref}
    >
      <div className={estilos.foto_container}>
        {escribir && (
          <FadeContent
            blur={true}
            duration={1000}
            delay={200}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className={estilos.card}>
              <div className={estilos.content}>
                <div className={estilos.back}>
                  <div className={estilos.back_content}>
                    <img src="/Portafolio/img1.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </FadeContent>
        )}
      </div>
      <aside>
        <motion.h2 onViewportEnter={mostrar} onViewportLeave={mostrar}>
          {escribir && <Escritor escribir_text={t("escritorTextCard")} />}
        </motion.h2>
        <p>{t("cardP1")}</p>
        <br />
        <p>{t("cardP2")}</p>
      </aside>
    </motion.div>
  );
});

export default Card;
