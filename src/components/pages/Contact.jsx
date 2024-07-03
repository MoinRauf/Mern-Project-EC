import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img1 from "../assets/images/bjorn-antonissen-3v-dzwqIE6Y-unsplash.jpg";

function SignInSide() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all required fields", {
        position: toast.POSITION.TOP_CENTER,
        theme: "dark",
      });
      return;
    }

    // Show info toast for 4 seconds
    toast.info("Sending message...", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      theme: "dark",
    });

    // Simulate form submission
    setTimeout(() => {
      // Clear form fields after 2 seconds
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Show success toast for 5 seconds
      toast.success("Message sent successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
        theme: "dark",
      });
    }, 3000);
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", margin: "50px 0px 0px 0px " }}
      >
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${img1})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Contact Us
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                type="text"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Your Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email Address"
                type="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <TextField
                margin="normal"
                fullWidth
                name="phone"
                label="Phone Number"
                type="tel"
                id="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <TextField
                margin="normal"
                fullWidth
                name="message"
                label="Your Message"
                multiline
                rows={4}
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* Toast container for displaying notifications */}
      <ToastContainer />
    </ThemeProvider>
  );
}

export default SignInSide;
