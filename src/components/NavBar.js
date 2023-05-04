import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import MoveUpOutlinedIcon from '@mui/icons-material/MoveUpOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const NavBar = () => {
  
  const location = useLocation();

  return (
    <div className="nav">

         

       
          <ul>

                <li className={location.pathname === "/" && "active" }>
                  <Link to={"/ "} >
                   <HomeOutlinedIcon  sx={{ fontSize: "20px",marginRight:"4px",paddingBottom:"2px" }} />Home
                  </Link>
                </li>
                <li className={location.pathname === "/deposit" && "active" }>
                  <Link to={"/deposit"} >
                   <CloudUploadOutlinedIcon sx={{ fontSize: "20px",marginRight:"4px",paddingBottom:"2px" }} />Deposit
                  </Link>
                </li>
                <li className={location.pathname === "/withdraw" && "active" }>
                  <Link to={"/withdraw"} >
                    <CloudDownloadOutlinedIcon sx={{ fontSize: "20px",marginRight:"4px",paddingBottom:"2px" }} />Withdraw
                  </Link>
                </li>
                <li className={location.pathname === "/transfer" && "active" }>
                  <Link to={"/transfer"} >
                    <MoveUpOutlinedIcon sx={{ fontSize: "20px",marginRight:"4px",paddingBottom:"2px" }} />Transfer
                  </Link>
                </li>
                <li className={location.pathname === "/statement" && "active" }>
                  <Link to={"/statement"} >
                   <NoteAddOutlinedIcon sx={{ fontSize: "20px",marginRight:"4px",paddingBottom:"2px" }} />Statement
                  </Link>
                </li>
                <li className={location.pathname === "/" && "active" }>
                  <span >
                   <LogoutOutlinedIcon sx={{ fontSize: "20px",marginRight:"4px",paddingBottom:"2px" }} />Logout
                  </span>
                </li>   
          </ul>
        </div>


      
  )
}

export default NavBar