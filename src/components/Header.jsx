import React, { useState } from "react";
import "./Header.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import SonikaResume from "../assert/SonikaResume.pdf";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const downloadResume = () => {
    window.open(SonikaResume, "_blank");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
console.log("window.innerWidth",window.innerWidth)
  return (
    <div id="home" className="Body">
      <div className="Appbar">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            sx={{
              bgcolor: "black",
              boxShadow: "none",
              position: "relative",
              position: "fixed",
            }}
          >
            <Toolbar>
              <div
                style={{
                  display: "flex",
                  direction: "row",
                  flexGrow: 1,
                  justifyContent: "space-between",
                }}
              >
                <p className="Name">SONIKA RAVI</p>
                {/* Hamburger Menu */}
                {window.innerWidth <= 464 ? (
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      direction: "row",
                      justifyContent:'space-between'
                    }} 
                  >
                    <Button
                      color="inherit"
                      onClick={() => scrollToSection("home")}
                    >
                      HOME
                    </Button>
                    <Button
                      color="inherit"
                      onClick={() => scrollToSection("about")}
                    >
                      ABOUT
                    </Button>
                    <Button
                      color="inherit"
                      onClick={() => scrollToSection("skills")}
                    >
                      SKILL
                    </Button>
                    <Button
                      color="inherit"
                      onClick={() => scrollToSection("contact")}
                    >
                      CONTACT
                    </Button>
                  </div>
                )}

                {isMenuOpen && (
                  <div
                    className="AppBarButton"
                    style={{
                      display: "flex",
                      direction: "row",
                    }} // Display on menu open or large screens
                  >
                    <Button
                      color="inherit"
                      onClick={() => scrollToSection("home")}
                    >
                      HOME
                    </Button>
                    <Button
                      color="inherit"
                      onClick={() => scrollToSection("about")}
                    >
                      ABOUT
                    </Button>
                    <Button
                      color="inherit"
                      onClick={() => scrollToSection("skills")}
                    >
                      SKILL
                    </Button>
                    <Button
                      color="inherit"
                      onClick={() => scrollToSection("contact")}
                    >
                      CONTACT
                    </Button>
                  </div>
                )}
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div className="Text">
        <h1>Hi, I am Sonika Ravi</h1>
        <h1>A Web Developer</h1>
        <p className="description">
          I love to develop beautiful and amazing websites.
        </p>
        <Button
          variant="outlined"
          style={{ color: "white", borderColor: "white" }}
          onClick={downloadResume}
        >
          View Resume
        </Button>
      </div>
    </div>
  );
}

export default Header;
