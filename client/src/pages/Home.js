import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import NewsMini from "../components/News";
import Footer from "../components/Footer";
import { Container } from "@mui/material";

function Home() {
  return (
    <Container maxWidth="lg" >
      <Hero />
      <hr />
      <AboutUs />
      <hr />
      <NewsMini />
      <Footer />
    </Container>
  );
}
export default Home;
