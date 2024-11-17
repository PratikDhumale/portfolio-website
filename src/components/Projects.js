import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const projects = [
  { title: "Myntra Clone", description: "Myntra clone using real backend ", image: "/images/myntar.png" },
  { title: "Weather App", description: "Mobile App", image: "/images/weather app.png" },
];

const Projects = () => {
  return (
    <section id="projects">
      <Container>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h5">{project.title}</Typography>
                  <Typography>{project.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Projects;
