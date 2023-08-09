import React from "react";
import { Typography } from "@mui/material";
import Handles from "./Handles";

const Footer = () => {
  const bottomText = {
    paddingBlock: 3,
    bgcolor: "#c5c5c54d",
    fontSize: {
      xs: 20,
      sm: 25,
    },
  };
  return (
    <div>
      <Handles />
      <Typography align="center" fontWeight="600" variant="h5" sx={bottomText}>
        Get started with us at Sojitade today!
      </Typography>
    </div>
  );
};
export default Footer;
