import React, { useCallback, useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // 👈 lighter and avoids the error

const Header = () => {
  const typingRef = useRef(null);

  const particlesInit = useCallback(async (engine) => {
    // This is now correct for new versions
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const words = ["Software Developer", "Frontend Engineer", "Tech Enthusiast"];
    let i = 0, j = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = words[i];
      if (!isDeleting) {
        typingRef.current.innerHTML = currentWord.substring(0, j++) + "|";
        if (j > currentWord.length) {
          isDeleting = true;
          setTimeout(type, 1000);
          return;
        }
      } else {
        typingRef.current.innerHTML = currentWord.substring(0, j--) + "|";
        if (j < 0) {
          isDeleting = false;
          i = (i + 1) % words.length;
        }
      }
      setTimeout(type, isDeleting ? 50 : 150);
    };

    type();
  }, []);

  return (
    <div style={{
      position: "relative",
      height: "100vh",
      width: "100%",
      overflow: "hidden",
      backgroundColor: "#0f0f0f",
      color: "white",
    }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          background: {
            color: "#0f0f0f",
          },
          particles: {
            number: { value: 60 },
            color: { value: "#ffffff" },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
        }}
      />

      <div style={{
        position: "relative",
        zIndex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Hey, I am <span style={{ color: "#2563eb" }}>Sharath Naik</span>
        </h1>
        <div style={{ fontSize: "1.2rem", marginTop: "20px", color: "#ccc" }}>
          I am a <span id="typing" ref={typingRef}></span>
        </div>
        {/* <div style={{ marginTop: "30px" }}>
          <button style={{
            padding: "12px 20px",
            margin: "0 10px",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            backgroundColor: "#2563eb",
            color: "white",
            cursor: "pointer",
            
            
          }}>
            Contact Me
          </button>
          <button style={{
            padding: "12px 20px",
            margin: "0 10px",
            border: "2px solid #2563eb",
            borderRadius: "6px",
            fontWeight: "bold",
            backgroundColor: "transparent",
            color: "#2563eb",
            cursor: "pointer",
            
          }}>
            View Projects
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
