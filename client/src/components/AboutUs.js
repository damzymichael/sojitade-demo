import React, { useState } from "react";
import svg from "../images/soji-svg.png";
import { Typography, Grid, Modal, Button } from "@mui/material";
import { about_us } from "../assets/info";
import {  svgSmallStyles, iconStyle } from "../assets/styles";
import { gridItem, gridContainer } from "../assets/styles";
import MoreInfo from "./MoreInfo";

const AboutUs = () => {
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const toggleModal = () => setModal(!modal);
  const displayModal = (item) => {
    setCurrentItem(item);
    toggleModal();
  };
  const MyBtn = (theme) => ({
    textTransform: "none",
    textDecoration: "underline",
    color: `${theme.palette.secondary.main}`,
  });
  return (
    <div className="about-us">
      <Typography align="center" variant="h4" mt={4}>
        About Us
      </Typography>
      <img src={svg} alt="svg" style={svgSmallStyles} />
      <Typography align="center" variant="h5" mb={12}>
        Welcome To Our Official Homepage, Here Are Our Core <br />
        Areas of Attention
      </Typography>
      <Grid container sx={gridContainer}>
        {about_us.map((item) => (
          <Grid item sx={gridItem} key={item.title}>
            <item.icon fontSize="large" color="primary" sx={iconStyle} />
            <Typography variant="h5" color="secondary" align="center" mb={3}>
              {item.title}
            </Typography>
            <Typography align="center" mb={5}>
              {item.description}
            </Typography>
            <Button onClick={() => displayModal(item)} sx={MyBtn}>
              View More Details
            </Button>
          </Grid>
        ))}
      </Grid>

      <Modal open={modal} onClose={toggleModal}>
        <div>
          <MoreInfo currentItem={currentItem} toggleModal={toggleModal} />
        </div>
      </Modal>
    </div>
  );
};

export default AboutUs;
