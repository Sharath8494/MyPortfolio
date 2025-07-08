// src/components/ElectricReveal.jsx
import { useEffect, useRef, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const letters = "SHARATH".split("");

export default function ElectricReveal({ onFinish }) {
  const canvasRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showLetters, setShowLetters] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    let frame = 0;
    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Background pulse effect
      const bgAlpha = 0.1 + 0.03 * Math.sin(frame * 0.1);
      ctx.fillStyle = `rgba(0, 0, 0, ${bgAlpha})`;
      ctx.fillRect(0, 0, width, height);

      // Realistic lightning flashes (frequent)
      if (Math.random() > 0.3) {
        for (let i = 0; i < 2; i++) {
          const offsetX = Math.random() * 200 - 100;
          const offsetY = Math.random() * 100 - 50;
          drawLightning(
            ctx,
            width / 2 + offsetX - 150,
            height / 2 + offsetY,
            width / 2 + offsetX + 150,
            height / 2 + offsetY
          );
        }
      }

      requestAnimationFrame(draw);
    };

    const drawLightning = (ctx, x1, y1, x2, y2) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      const segments = 30;
      for (let i = 1; i < segments; i++) {
        const dx = x1 + ((x2 - x1) / segments) * i + (Math.random() - 0.5) * 20;
        const dy = y1 + (Math.random() - 0.5) * 20;
        ctx.lineTo(dx, dy);
      }
      ctx.lineTo(x2, y2);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.9)"; // Bright white lightning core
      ctx.lineWidth = 3;
      ctx.shadowColor = "#99ccff"; // Light blue glow
      ctx.shadowBlur = 30;
      ctx.stroke();
      ctx.shadowBlur = 0; // Reset after each stroke
    };

    draw();

    // Trigger typewriter animation after 400ms
    setTimeout(() => setShowLetters(true), 400);

    // End after 3.5 seconds
    const timeout = setTimeout(() => {
      onFinish();
    }, 3500);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [onFinish]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        zIndex: 9999,
      }}
    >
      {/* Canvas background for lightning */}
      <canvas
        ref={canvasRef}
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* Glowing typewriter letters */}
      {showLetters && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{
                color: "#ffffff",
                fontSize: isMobile ? "2rem" : "3.5rem",
                fontFamily: "'Orbitron', sans-serif",
                textShadow: `
                  0 0 5px #99ccff,
                  0 0 10px #99ccff,
                  0 0 20px #99ccff
                `,
                margin: isMobile ? "0 3px" : "0 6px",
              }}
            >
              {char}
            </motion.span>
          ))}
        </Box>
      )}
    </Box>
  );
}
