import React, {useState} from 'react';
import ResponsiveAppBar from '../navbar/NavBar';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper
} from '@mui/material';

function Register() {
    const handleSumbit = () =>{
        const formData = new FormData();
        const username ="";
        const fullname ="";
        const email ="";
        const phone ="";
        const password ="";
        const confirmPassword ="";

    }
  return (
    <div>
      <ResponsiveAppBar />
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, marginTop: 6, borderRadius: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Register for Managing
          </Typography>
          <Box component="form"  onSubmit={handleSumbit} noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Username"
                  name="username"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Full Name"
                  name="fullname"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Phone No"
                  name="phone"
                  type="tel"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                    <Button type="submit" variant="contained" color="primary">Register</Button>
                </Grid>
            </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default Register;
