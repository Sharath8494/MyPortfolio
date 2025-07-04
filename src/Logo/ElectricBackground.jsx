import { useEffect, useRef } from "react";

export default function ElectricBackground() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drawLightning = (x1, y1, x2, y2) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      for (let i = 0; i < 30; i++) {
        const dx = x1 + ((x2 - x1) / 30) * i + (Math.random() - 0.5) * 20;
        const dy = y1 + (Math.random() - 0.5) * 20;
        ctx.lineTo(dx, dy);
      }
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.lineWidth = 2;
      ctx.shadowColor = "#99ccff";
      ctx.shadowBlur = 25;
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (Math.random() > 0.3) {
        for (let i = 0; i < 2; i++) {
          const startX = Math.random() * canvas.width;
          const endX = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          drawLightning(startX, y, endX, y + 50);
        }
      }
      requestAnimationFrame(render);
    };
    render();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}
