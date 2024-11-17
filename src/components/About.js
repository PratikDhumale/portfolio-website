import React from "react";
import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography>
         <h3>
A front-end developer specializes in building and optimizing user interfaces for web applications. They transform design mockups into interactive, responsive, and accessible websites using technologies like HTML, CSS, JavaScript, and frameworks such as React.js. Their role ensures seamless user experiences across devices while maintaining performance, usability, and visual appeal. Proficient in tools like Material-UI, Bootstrap, and Git, they bridge the gap between design and functionality in modern web development.
</h3>
        </Typography>
      </Container>
    </section>
  );
};

export default About;
