import React from "react";
import { Container, Typography, Grid, Card, Box } from "@mui/material";
import { motion } from "framer-motion";

// ICONS 🎯
import {
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"; // Material UI

// Section Styles 🌌
const sectionStyle = {
  background: "linear-gradient(135deg, #0f0f0f, #1e1e1e)",
  padding: "80px 0",
  color: "#fff",
  position: "relative",
  overflow: "hidden",
  minHeight: "80vh",
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

// 💻 Skill List
const skills = [
  {
    icon: <SiReact size={50} color="#61DBFB" />,
    title: "React.js",
    description:
      "Build dynamic user interfaces with React's component-based architecture.",
  },
  {
    icon: <SiNodedotjs size={50} color="#8CC84B" />,
    title: "Node.js",
    description:
      "Backend development using JavaScript and event-driven architecture.",
  },
  {
    icon: <SiHtml5 size={50} color="#E34F26" />,
    title: "HTML5",
    description: "Create structured, semantic, and accessible web content.",
  },
  {
    icon: <SiTailwindcss size={50} color="#38BDF8" />,
    title: "Tailwind CSS",
    description: "Style modern web apps rapidly with utility-first CSS.",
  },
  {
    icon: <SiJavascript size={50} color="#F7DF1E" />,
    title: "JavaScript",
    description: "Powerful scripting language for both frontend and backend magic.",
  },
  {
    icon: <SiMongodb size={50} color="#4DB33D" />,
    title: "MongoDB",
    description: "NoSQL database designed for scalability and performance.",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        alt="VS Code"
        width={50}
        height={50}
      />
    ),
    title: "VS Code",
    description: "My go-to lightweight yet powerful source code editor.",
  },
  {
    icon: <SiPostman size={50} color="#FF6C37" />,
    title: "Postman",
    description: "API testing tool that makes debugging smooth and visual.",
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 50, color: "#007FFF" }} />,
    title: "Material UI",
    description: "Elegant and consistent UI components for React apps.",
  },
  {
    icon: <SiGit size={50} color="#F1502F" />,
    title: "Git",
    description: "Version control wizardry to manage code history like a pro.",
  },
  {
    icon: <FaJava size={50} color="#f89820" />,
    title: "Java",
    description: "Develop scalable applications using robust object-oriented programming.",
  },
];

// ✨ Skills Component
const Skills = React.forwardRef((_, ref) => (
  <section style={sectionStyle} ref={ref}>
    <div style={animatedBg} />
    <Container sx={{ position: "relative", zIndex: 1 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
        sx={{ color: "#fff" }}
      >
        My Skills
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        sx={{ color: "#ddd", mb: 6 }}
      >
        Technologies I use to build responsive and scalable applications.
      </Typography>

      <Grid container spacing={4}>
        {skills.map((skill, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: "flex" }}>
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
              style={{ width: "100%" }}
            >
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  height: 200,
                  p: 3,
                  textAlign: "center",
                  borderRadius: 4,
                  boxShadow: 6,
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(10px)",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  mx: "auto",
                }}
              >
                <Box mb={2} display="flex" justifyContent="center">
                  {skill.icon}
                </Box>
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  {skill.title}
                </Typography>
                <Typography variant="body2" mt={1} sx={{ color: "#ccc" }}>
                  {skill.description}
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>

    {/* 🔮 Background Animation Keyframes */}
    <style>
      {`
        @keyframes moveBackground {
          0% { transform: translate(0, 0); }
          50% { transform: translate(10%, 10%); }
          100% { transform: translate(0, 0); }
        }
      `}
    </style>
  </section>
));

export default Skills;
