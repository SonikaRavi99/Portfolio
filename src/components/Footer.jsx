import React from "react";
import "./Contact.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className="Footer">
      <div className="Icons">
        <a
          href="https://www.instagram.com/sonika_hebziba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon style={{ paddingRight: 10, color:"white"}} />
        </a>
        <a
          href="https://www.linkedin.com/in/sonika-ravi-a29a46256/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon style={{ paddingRight: 10,color:"white" }} />
        </a>
        <a
          href="https://twitter.com/sonika_ravi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon style={{color:"white"}} />
        </a>
      </div>
      <p style={{ paddingBottom: 10, margin: 0 }}>
        © Copyrights. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
