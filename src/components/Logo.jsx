import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Logosvg from '../lacomilona.png'


const Logo = () => {

    const style={
        Boxstyle:{
            background: 'rgb(249, 250, 251)',
            width: '191px',
            hight: '191px'

        }
    }

  return (
    <Box>
     
        <Box style={style.Boxstyle} component="img" src={Logosvg} alt="logo" />
    
    </Box>
  );
};

export default Logo;