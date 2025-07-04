import { useEffect, useState } from "react";

const letters = "SHARATH NAIK".split("");

export default function HackerText() {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + letters[i]);
      i++;
      if (i >= letters.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: "monospace",
        fontSize: "24px",
        color: "#00ffcc",
        zIndex: 3,
        textShadow: "0 0 10px #00ffcc",
      }}
    >
      {text}
    </div>
  );
}
