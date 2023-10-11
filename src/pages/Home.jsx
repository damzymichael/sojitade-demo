import React from 'react';
import {Element} from 'react-scroll';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import NewsMini from '../components/News';
import Footer from '../components/Footer';
import {Container} from '@mui/material';

function Home() {
  return (
    <Container maxWidth='lg'>
      <Hero />
      <hr />
      <Element name='about-us'>
        <AboutUs />
      </Element>
      <hr />
      <Element name='events'>
        <NewsMini />
      </Element>
      <Element name='contact-us'>
        <Footer />
      </Element>
    </Container>
  );
}
export default Home;
