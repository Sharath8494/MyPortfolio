import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const darkBackgroundStyle = {
  background: "linear-gradient(135deg, #0f0f0f, #1e1e1e)",
  minHeight: "60vh",
  paddingTop: "64px",
  paddingBottom: "64px",
  position: "relative",
  overflow: "hidden",
  color: "#fff",
  display: "flex",
  alignItems: "center",
};

const animatedBg = {
  position: "absolute",
  top: "-50%",
  left: "-50%",
  width: "200%",
  height: "200%",
  background:
    "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.03), transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.03), transparent 50%)",
  animation: "moveBackground 25s linear infinite",
  zIndex: 0,
};

const About = React.forwardRef((_, ref) => (
  <Box component="section" sx={darkBackgroundStyle} ref={ref}>
    <div style={animatedBg} />
    <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(30, 30, 30, 0.8)",
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            boxShadow: "0 8px 30px rgba(0,0,0,0.8)",
            textAlign: "center",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <Typography variant="h3" fontWeight="700" gutterBottom>
            About Me
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 2, lineHeight: 1.6, fontWeight: 400, color: "#ddd" }}
          >
            Hello! I'm Sharath Naik, a passionate software engineer who loves crafting elegant web experiences. I specialize in modern JavaScript frameworks and enjoy turning creative ideas into responsive, accessible, and beautiful digital products.
            <br />
            <br />
            When I'm not coding, I enjoy exploring the latest tech trends, contributing to open source, and constantly improving my skills.
          </Typography>
        </Box>
      </motion.div>
    </Container>

    <style>
      {`
        @keyframes moveBackground {
          0% { transform: translate(0, 0); }
          50% { transform: translate(10%, 10%); }
          100% { transform: translate(0, 0); }
        }
      `}
    </style>
  </Box>
));

export default About;
