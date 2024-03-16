import React, { useState } from "react";
import "./Contact.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";

function Contact() {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const handleChange = (e) => {
    return setSubject(e.target.value);
  };
  console.log("subject", subject);

  const handleSubmit = (event) => {
    const templateParams = {
      from_name: name,
      to_name: "Sonika Ravi",
      subject: subject,
      message_html: body,
    };

    emailjs
      .send(
        "service_fqn4ym8",
        "template_3t1809l",
        templateParams,
        "QsjqlBOFBSAZqEg6S"
      )
      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
      // setSubject("");
      // setBody("");
      // setName("");
  };

  return (
    <div id="contact" className="Contact">
      <Box sx={{ flexGrow: 1, paddingBottom: 10 }}>
        <Grid container spacing={2}>
          <Grid item lg={5}>
            <div className="AddressContainer">
              <h2 sx={{ paddingTop: 0 }}>GET IN TOUCH</h2>
              <p>
                #4, 3Main <br />
                LBS Nagar, HAL <br />
                Vimanapura PO
                <br />
                Bangalore- 560017
              </p>
            </div>
          </Grid>
          <Grid item lg={6}>
            <div className="Form">
              <form>
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  type="text"
                  placeholder="Name"
                  id="fullWidth"
                  margin="normal"
                />
                <TextField
                  onChange={handleChange}
                  fullWidth
                  type="email"
                  placeholder="Email"
                  id="fullWidth"
                  margin="normal"
                />
                <TextField
                  onChange={handleChange}
                  fullWidth
                  type="text"
                  placeholder="Message"
                  id="fullWidth"
                  margin="normal"
                />
                <Button
                  onClick={handleSubmit}
                  sx={{
                    color: "black",
                    border: "1px solid black",
                    marginTop: 2,
                  }}
                  variant="outlined"
                >
                  Submit
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Contact;
