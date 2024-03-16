import React from "react";
import "./Main.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MyImage from "../assert/MyImage.jpeg";

function About() {
  return (
    <div id="about" className="About">
      <div className="MainContent">
        <div>
          <Box sx={{ flexGrow: 1, paddingBottom: 10 }}>
            <Grid container spacing={2}>
              <Grid className="container" item sm={12} md={5} lg={5}>
                <div >
                  <div className="MyImageContainer">
                    <img
                      className="MyImage"
                      src={MyImage}
                      style={{ zIndex: 1000 }}
                      alt="MyImage"
                      width={250}
                      height={300}
                    ></img>
                  </div>
                  <div className="ImgBorder"></div>
                </div>
              </Grid>
              <Grid item  sm={12} md={6} lg={6}>
                <div className="AboutMe">
                  <h1>Hello, I am Sonika Ravi...</h1>
                  <p className="Para">
                    A 24-year-old UI/UX developer ,I have graduated with a
                    Bachelor degree of BCA. I'm passionate about creating
                    user-friendly websites and always strive to stay up-to-date
                    with the latest trends in development and technology.
                  </p>
                  <h2>Works</h2>
                  <p></p>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}
export default About;
