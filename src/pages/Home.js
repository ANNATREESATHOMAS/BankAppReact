import React from 'react'
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
const theme = createTheme();

const Home = () => {
  return (
    <div className="main" >
        <h4 className='text-center mt-5'>ABC Bank</h4>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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

          <table sx>
            <thead>WELCOME JOHN DOE</thead>
            <tr className="mb-3 mt-4 border-top border-1-solid">
              <td className="cl">YOUR ID</td>
              <td>Anna</td>
            </tr>
            <tr className="mb-3 border-top border-1-solid">
              <td className="cl">YOUR BALANCE</td>
              <td>452.20</td>
            </tr>
          </table>


        </Box>
      </Container>
    </ThemeProvider>
    </div>
  )
}

export default Home