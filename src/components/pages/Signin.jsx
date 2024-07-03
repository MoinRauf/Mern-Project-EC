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
import { auth } from "../../firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields
    if (!email || !password) {
      toast.error("Please fill out all required fields", {
        position: toast.POSITION.TOP_CENTER,
        theme: "dark",
        autoClose: 2000,
      });
      return;
    }

    try {
      // Sign in with Firebase
      await signInWithEmailAndPassword(auth, email, password);

      // Clear form fields
      setEmail("");
      setPassword("");

      // Show success toast
      toast.success("Login successful!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        theme: "dark",
      });
      setTimeout(() => {
        window.location.href = "/Home";
      }, 3000);
    } catch (error) {
      // Handle authentication errors
      console.error("Authentication error:", error);
      toast.error("Authentication failed. Please check your credentials.", {
        position: toast.POSITION.TOP_CENTER,
        theme: "dark",
        autoClose: 2000,
      });
    }
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
              Sign In
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email Address"
                type="email"
                id="email"
                autoComplete="email"
                placeholder="Enter the email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                type="password"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="current-password"
                autoFocus
                placeholder="Enter the password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
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

export default SignIn;
