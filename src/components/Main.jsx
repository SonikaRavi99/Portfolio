import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import { MantineProvider } from '@mantine/core';


function Main() {
  return (
    <div>
      <Header />
      <About />
      <MantineProvider>
      <Skills />
    </MantineProvider>
      <Contact />
      <Footer />
    </div>
  );
}
export default Main;
