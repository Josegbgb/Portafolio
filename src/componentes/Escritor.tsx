import { useEffect, useState } from "react";

interface escritorProps {
  escribir_text: string;
}

function Escritor(props: escritorProps) {
  const [text, setText] = useState("");
  const fullText = props.escribir_text;
  const speed = 100;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index]);

  return text;
}

export default Escritor;
