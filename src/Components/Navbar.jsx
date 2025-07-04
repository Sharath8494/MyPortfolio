import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { keyframes } from "@emotion/react";

const glowPulse = keyframes`
  0%, 100% {
    text-shadow: 0 0 5px #00bcd4, 0 0 10px #00bcd4, 0 0 20px #00bcd4, 0 0 40px #00bcd4;
    transform: scale(1);
  }
  50% {
    text-shadow: 0 0 15px #00e5ff, 0 0 30px #00e5ff, 0 0 40px #00e5ff, 0 0 60px #00e5ff;
    transform: scale(1.05);
  }
`;

const navItems = ["Home", "About", "Projects", "Skills", "Contact me"];

const Navbar = ({ refs }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (label) => {
    // Convert label to matching key for refs object
    const key = label.toLowerCase().replace(/ /g, "");
    if (refs && refs[key]) {
      scrollToSection(refs[key]);
    } else if (label === "Home") {
      // fallback scroll to top if no ref
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0)", // super transparent
          // backdropFilter: "blur(10px)", // frosty blur
          // WebkitBackdropFilter: "blur(10px)", // for Safari 💅
          // boxShadow: "0 4px 12px rgba(0, 188, 212, 0.2)", // subtle glow
          // color: "#00bcd4", // cyan text color
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, mx: "auto", width: "100%" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "900",
              animation: `${glowPulse} 3.5s ease-in-out infinite`,
              letterSpacing: "0.2em",
              cursor: "default",
              userSelect: "none",
              flexGrow: 1,
            }}
            aria-label="KaaryaLok brand name"
          >
            SHARATH NAIK
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((label) => (
              <Button
                key={label}
                onClick={() => handleNavClick(label)}
                sx={{
                  color: "#00bcd4",
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "rgba(0, 188, 212, 0.15)",
                    borderRadius: 1,
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(10,10,30,0.95)",
            color: "#00bcd4",
            width: 240,
          },
        }}
      >
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "900",
              animation: `${glowPulse} 3.5s ease-in-out infinite`,
              letterSpacing: "0.15em",
              userSelect: "none",
            }}
          >
            KAARYALOK
          </Typography>
        </Box>
        <List>
          {navItems.map((label) => (
            <ListItem key={label} disablePadding>
              <ListItemButton onClick={() => handleNavClick(label)}>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
