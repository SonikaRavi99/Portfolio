import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import html from "../assert/html.png";
import css from "../assert/css.png";
import javascript from "../assert/javascript.png";
import typescript from "../assert/typescript.png";
import react from "../assert/react.png";
import materialui from "../assert/Materialui.png";
import github from "../assert/github.png";
import "./Skills.css";
import React, { useRef } from "react";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import { rem } from "@mantine/core";
import Autoplay from "embla-carousel";


function Skills() {
    // const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <div id="skills" className="Skills">
      <h1>My Skillset</h1>
      <Carousel
        withIndicators
        height={180}
        slideSize={{ base: "100%", sm: "50%", md: "25%" }}
        slideGap={{ base: 0, sm: "md" }}
        align="start"
        // plugins={[autoplay.current]}
        // onMouseEnter={autoplay.current.stop}
        // onMouseLeave={autoplay.current.reset}
        nextControlIcon={
          <IconArrowRight style={{ width: rem(16), height: rem(16) }} />
        }
        previousControlIcon={
          <IconArrowLeft style={{ width: rem(16), height: rem(16) }} />
        }
        
      >
        <Carousel.Slide>
          <div className="Slides">
            <img src={html} alt="HTMLImage" height={48}></img>
            <h3>HTML</h3>
            <p>
              Proficient in creating structured and semantic HTML markup for web
              development. Experience in HTML 5 features and best practices.
            </p>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="Slides">
            <img src={css} alt="CSSImage"></img>
            <h3>CSS</h3>
            <p>
              Skilled in styling web pages with CSS, including responsive and
              CSS frameworks like Bootstrap.
            </p>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="Slides">
            <img src={javascript} alt="JavascriptImage"></img>
            <h3>Javascript</h3>
            <p>
              Proficient in JavaScript programming. Familiar with modern ES6
              features.
            </p>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="Slides">
            <img src={typescript} alt="TypescriptImage" height={48}></img>
            <h3>Typescript</h3>
            <p>
              Proficient in TypeScript, I bring a strong foundation in
              statically typed JavaScript development.
            </p>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="Slides">
            <img src={react} alt="ReactImage"></img>
            <h3>React</h3>
            <p>
              Experience in building web applications with React, including
              state management- and component-based architecture.
            </p>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="Slides">
            <img src={materialui} alt="MaterialUIImage"></img>
            <h3>Material UI</h3>
            <p>
              Skilled in using Material-UI to craete elegant and responsive user
              interfaces with pre-designed components and styles.
            </p>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="Slides">
            <img src={github} alt="GithubImage"></img>
            <h3>Github</h3>
            <p>
              Proficient in using GitHub, leveraging its features to effectively
              manage version control, collaborate with others, and showcase my
              projects to the world.
            </p>
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}
export default Skills;
