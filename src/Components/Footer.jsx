import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      position: "relative",
      backgroundColor: "#0f172a",
      color: "#fff",
      py: 6,
      overflow: "hidden",
      textAlign: "center",
    }}
  >
    {/* Animated Background */}
    <Box
      sx={{
        position: "absolute",
        top: "-50%",
        left: "-50%",
        width: "200%",
        height: "200%",
        background: `
          radial-gradient(circle at 20% 20%, rgba(255,255,255,0.03), transparent 100%),
          radial-gradient(circle at 80% 80%, rgba(255,255,255,0.02), transparent 100%)`,
        animation: "bgMove 30s linear infinite",
        zIndex: 0,
      }}
    />

    {/* Footer Content */}
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Sharath Naik
      </Typography>

      <Typography variant="body2" sx={{ mb: 1, color: "#ccc" }}>
        Made with ❤️ using React, MUI
      </Typography>

      <Typography variant="body2" sx={{ color: "#bbb" }}>
        © {new Date().getFullYear()}  All rights reserved.
        {" | "}
        <Link href="#" color="inherit" underline="hover">
          Privacy Policy
        </Link>
        {" | "}
        <Link href="#" color="inherit" underline="hover">
          Terms of Service
        </Link>
      </Typography>
    </Container>

    {/* Animated keyframes */}
    <style>
      {`
        @keyframes bgMove {
          0% { transform: translate(0, 0); }
          50% { transform: translate(4%, 4%); }
          100% { transform: translate(0, 0); }
        }
      `}
    </style>
  </Box>
);

export default Footer;
