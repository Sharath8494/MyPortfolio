import React, { useRef } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

// 👇 Your animated background style (unchanged)
const backgroundStyle = {
  background: "linear-gradient(135deg, #0f0f0f, #1e1e1e)",
  minHeight: "100vh",
  padding: "80px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
};

const animatedBg = {
  position: "absolute",
  top: "-50%",
  left: "-50%",
  width: "200%",
  height: "200%",
  background:
    "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.02), transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.02), transparent 50%)",
  animation: "moveBackground 20s linear infinite",
  zIndex: 0,
};

const ContactForm = React.forwardRef((_, ref) => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l1mpnf5",     // 🔁 Replace with your actual Service ID
        "template_ujt4i8w",    // 🔁 Replace with your actual Template ID
        formRef.current,
        "Q4hj7My21Z4IkzFr_"         // 🔁 Replace with your actual User ID (Public Key)
      )
      .then(
        (result) => {
          alert("Message sent successfully! 🎉");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message. ❌");
          console.error(error.text);
        }
      );
  };

  return (
    <div style={backgroundStyle} ref={ref}>
      <div style={animatedBg} />
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(30, 30, 30, 0.8)",
              p: 5,
              borderRadius: 4,
              maxWidth: 600,
              mx: "auto",
              boxShadow: 6,
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#fff",
            }}
          >
            <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
              Contact Us
            </Typography>

            <form ref={formRef} onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Name"
                fullWidth
                required
                variant="filled"
                sx={{
                  mb: 2,
                  input: { color: "#fff" },
                  backgroundColor: "#1a1a1a",
                  borderRadius: 1,
                  "& .MuiInputLabel-root": { color: "#aaa" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#bbb" },
                }}
              />

              <TextField
                name="email"
                label="Email"
                type="email"
                fullWidth
                required
                variant="filled"
                sx={{
                  mb: 2,
                  input: { color: "#fff" },
                  backgroundColor: "#1a1a1a",
                  borderRadius: 1,
                  "& .MuiInputLabel-root": { color: "#aaa" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#bbb" },
                }}
              />

              <TextField
                name="message"
                label="Message"
                multiline
                rows={4}
                fullWidth
                required
                variant="filled"
                sx={{
                  mb: 2,
                  textarea: { color: "#fff" },
                  backgroundColor: "#1a1a1a",
                  borderRadius: 1,
                  "& .MuiInputLabel-root": { color: "#aaa" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#bbb" },
                }}
              />

              <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
                Send Message
              </Button>
            </form>
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
    </div>
  );
});

export default ContactForm;
