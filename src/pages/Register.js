import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Form from 'react-bootstrap/Form';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Already have an account?"}{" "}
      <Link sx={{ color: "#2878fa", textDecoration: "none", fontWeight: "500" }} href="/login">
        Sign in
      </Link>
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className="main">
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h4 className='text-center mt-5'>ABC Bank</h4>
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor:"white",
            with:550,
            p:4,
            borderRadius:'4px',
            border:"1px solid #e6e8eb"
            
          }}
        >

          <Form onSubmit={handleSubmit} sx>
            <h6>Create new account</h6>
            <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Agree the terms and policy" />
            </Form.Group>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: "none" }}
            >
              Create new account
            </Button>
          </Form>


        </Box>
        <Copyright sx={{ mt: 6, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}