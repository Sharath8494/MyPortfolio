import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  useTheme,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import logo from "../assets/splash.png"

// Optional glitch text effect (on hover)
const glitchText = keyframes`
  0% { text-shadow: 2px 0 red, -2px 0 cyan; }
  20% { text-shadow: -2px 0 red, 2px 0 cyan; }
  40% { text-shadow: 2px 0 red, -2px 0 cyan; }
  60% { text-shadow: -2px 0 red, 2px 0 cyan; }
  80% { text-shadow: 2px 0 red, -2px 0 cyan; }
  100% { text-shadow: -2px 0 red, 2px 0 cyan; }
`;

// Corrected and beautified projects data
const images = [
  {
    src: "https://png.pngtree.com/thumb_back/fw800/background/20240704/pngtree-new-event-management-outdoor-background-image_15957681.jpg",
    alt: "Creative team",
    title: "Event Management Web Application",
    tech: "ASP.NET Web Forms | C# | SQL Server | HTML5 | CSS3",
    description:
      "This Event Management Web Application is a full-featured platform designed to streamline the planning, booking, and administration of events for both customers and administrators. Built using ASP.NET and C#, it provides a robust backend and a clean, user-friendly frontend for efficient event organization.",
  },
  {
    src: "https://static.vecteezy.com/system/resources/previews/033/859/206/non_2x/wooden-bookshelf-full-of-books-front-view-ai-generated-free-png.png",
    alt: "Conference",
    title: "Bookshelf.in – Online Bookstore Platform",
    tech: "PHP | MySQL",
    description:
      "Developed Bookshelf.in, a full-stack online bookstore using PHP and MySQL, featuring user-friendly book browsing, cart management, and order processing. The platform includes an admin panel for inventory control, book additions, and order tracking.",
  },
  {
    src: logo,
    alt: "Audience",
    title: "Annam – Smart Food Donation App",
    tech: "Kotlin | Android SDK | Firebase",
    description:
      "Built a community-driven Android application aimed at reducing food waste by enabling users to donate and request surplus food. Features include donor registration, live tracking, notifications, and Firebase-based persistent storage.",
  },
];

const Projects = React.forwardRef((_, ref) => {
  const theme = useTheme();

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 8,
        backgroundColor: "#0f0f0f",
        color: "#fff",
        backgroundImage: `
          linear-gradient(45deg, #111 25%, #222 50%, #111 75%)
        `,
        backgroundSize: "100% 100%",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          sx={{
            fontFamily: "'Courier New', Courier, monospace",
            fontWeight: 900,
            letterSpacing: "0.15em",
            color: "#3b82f6",
            mb: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              animation: `${glitchText} 1s infinite`,
            },
          }}
        >
          PROJECTS
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {images.map(({ src, alt, title, tech, description }, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={4}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  height: "100%",
                  width:400,
                  backgroundColor: "#111",
                  border: "1px solid #3b82f6",
                  boxShadow: "0 0 8px rgba(59,130,246,0.3)",
                  cursor: "pointer",
                  transition:
                    "transform 0.2s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    backgroundColor: "#1e293b",
                    boxShadow: `
                      0 0 10px #3b82f6,
                      0 0 25px #60a5fa,
                      0 0 40px #93c5fd,
                      0 0 60px #bfdbfe
                    `,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  loading="lazy"
                  image={src}
                  alt={alt}
                  sx={{ filter: "brightness(0.95)" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="#3b82f6"
                    gutterBottom
                  >
                    {title}
                  </Typography>
                  <Typography variant="body2" color="grey.300" gutterBottom>
                    {tech}
                  </Typography>
                  <Typography variant="body2" color="grey.400">
                    {description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
});

export default Projects;
