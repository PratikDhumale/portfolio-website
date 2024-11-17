import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const Contact = () => {
  return (
    <section id="contact" style={{ paddingBottom: "50px" }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <Box component="form">
          <TextField label="Name" fullWidth margin="normal" required />
          <TextField label="Email" type="email" fullWidth margin="normal" required />
          <TextField
            label="Message"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            required
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
          >
            Send
          </Button>
        </Box>
      </Container>
      <footer
        style={{
          backgroundColor: "#1976d2",
          color: "white",
          padding: "10px 0",
          marginTop: "20px",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        <p>
          <b>All Rights Reserved | This webpage belongs to pratikdhumale261197@gmail.com</b>
        </p>
      </footer>
    </section>
  );
};

export default Contact;
