import React from "react";
import { Typography, Chip, Box } from "@mui/material";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React.js",
  "GitHub", "Material-UI", "Bootstrap"
];

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        backgroundColor: "#f9f9f9",
        padding: "50px 0",
        width: "100%",
        textAlign: "center"
      }}
    >
      <Box>
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          margin="20px 0"
          padding="0 10px"
        >
          {skills.map((skill, index) => (
            <Chip
              label={skill}
              key={index}
              style={{
                margin: "10px",
                fontSize: "16px",
                padding: "10px",
                backgroundColor: "#1976d2",
                color: "white",
                fontWeight: "bold"
              }}
            />
          ))}
        </Box>
        <Box maxWidth="800px" margin="0 auto" padding="0 20px">
          <Typography
            variant="body1"
            style={{ lineHeight: "1.8", color: "#555", textAlign: "left" }}
          >
            <strong>A front-end developer</strong> possesses skills in crafting responsive and dynamic web interfaces using:
            <ul style={{ marginTop: "10px" }}>
              <li><b>HTML & CSS</b>: For structuring and styling web pages.</li>
              <li><b>JavaScript & TypeScript</b>: For adding interactivity and robust functionality.</li>
              <li><b>React.js</b>: For building scalable, component-based applications.</li>
              <li><b>UI Frameworks</b>: Expertise in <b>Material-UI</b>, <b>Bootstrap</b>, and similar tools for streamlined designs.</li>
              <li><b>Version Control</b>: Proficient in <b>Git/GitHub</b> for managing code efficiently.</li>
              <li><b>Cross-Browser & Responsive Design</b>: Ensuring compatibility and optimal display across all devices.</li>
            </ul>
            These skills enable seamless user experiences and high-performance applications.
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default Skills;
