import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import { Facebook, Twitter, Email } from "@mui/icons-material";
import { Phone, Sensors } from "@mui/icons-material";

const Footer = () => {
  const footerBox = {
    "&:first-of-type": {
      sm_2: { borderRight: "5px solid #028e3733" },
    },
    "&:last-of-type": {
      sm_2: { borderLeft: "5px solid #028e3733" },
    },

    padding: 2,
  };

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
      <Typography align="center" variant="h5" fontWeight="600" mb={2}>
        Check us out on our handles
      </Typography>
      <Stack
        direction={{ sm_2: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={5}
        mb={3}
      >
        <Box display="flex" gap={2} sx={footerBox}>
          <Sensors color="secondary" /> <Facebook color="secondary" />
          <Twitter color="secondary" />
        </Box>
        <Box display="flex" gap={2} sx={footerBox}>
          <Email color="secondary" />
          <Typography>info@sojitadefoundation.com</Typography>
        </Box>
        <Box display="flex" gap={2} sx={footerBox}>
          <Phone color="secondary" /> <Typography>+2348131505522</Typography>
        </Box>
      </Stack>
      <Typography align="center" fontWeight="600" variant="h5" sx={bottomText}>
        Get started with us at Sojitade today!
      </Typography>
    </div>
  );
};

export default Footer;
