import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box, Divider, Grid } from "@mui/material";
import styled from "@emotion/styled";
import Logo from "./components/Logo";
import LoginForm from "./components/Login/FormLogin";
import Image from "./fondo.jpeg"
import { motion } from "framer-motion";
import { bgcolor } from "@mui/system";

//////////////////////////////////


console.log(Image)
const styloimagen = {
  Gridcontainer: {
      background: `url(${Image})`,
      WebkitBackgroundSize: 'cover',
      MozBackgroundSize: 'cover',
      OBackgroundSize: 'cover',
      backgroundSize: 'cover'
  }
};



const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const App = () => {
  return (

    <Grid container   columns={{ xs: 4, sm: 8, md: 12 }}>
      
      <Grid  item xs={7} md={8} style={styloimagen.Gridcontainer} >

      </Grid>

      <Grid item xs={5} md={4} >
    <RootStyle>
      <Container maxWidth="sm" style={{borderRadius: '100px'}}>
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
          <Logo />
            <Typography sx={{ color: "text.secondary", mb: 5 , mt:2 }}>
              Iniciar Sesion
            </Typography>
          </HeadingStyle>

          <Box component={motion.div} {...fadeInUp}>
           <LoginForm></LoginForm>

          </Box>


          

          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="body2"
            align="center"
            sx={{ mt: 3 }}
          >
            No tienes cuenta?, Registrate!{" "}
            {/* <Link variant="subtitle2" component={RouterLink} to="/signup">
              Sign up
            </Link> */}
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
    </Grid>
    </Grid>
  );
};

export default App;