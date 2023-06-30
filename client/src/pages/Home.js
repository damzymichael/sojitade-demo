import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import NewsMini from "../components/News";
import Footer from "../components/Footer";
import { Container } from "@mui/material";

function Home() {
  return (
    <Container maxWidth="lg" sx={{ border: "1px solid black" }}>
      <Header />
      <Hero />
      <AboutUs />
      <NewsMini />
      <Footer />
    </Container>
  );
}
export default Home;
