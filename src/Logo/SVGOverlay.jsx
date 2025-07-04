export default function SVGOverlay() {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 300"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="60"
          fill="none"
          stroke="#00ffff"
          strokeWidth="2"
          fontFamily="Orbitron, sans-serif"
        >
          SHARATH NAIK
        </text>
      </svg>
    );
  }
  