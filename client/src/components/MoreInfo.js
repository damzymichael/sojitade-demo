import React from "react";
import { Typography, IconButton, Box, Stack } from "@mui/material";
import { HighlightOff } from "@mui/icons-material";
import { modalStyle } from "../assets/styles";
import { MyLink } from "../assets/styles";
import { useTheme } from "@emotion/react";

const MoreInfo = ({ currentItem, toggleModal }) => {
  const theme = useTheme();
  const iconStyle = {
    position: "absolute",
    top: "-10px",
    right: "-30px",
  };
  return (
    <Box sx={modalStyle}>
      <Stack sx={{ position: "relative" }}>
        <IconButton
          color={theme.palette.secondary.light}
          onClick={toggleModal}
          sx={iconStyle}
        >
          <HighlightOff color="secondary" />
        </IconButton>
        <Typography variant="h6" align="center">
          {currentItem?.title}
        </Typography>
        <img
          src={currentItem?.image}
          alt={`${currentItem?.title}`}
          className="modalImage"
        />
        <Typography variant="subtitle1" fontSize={14} align="center">
          {currentItem?.content}
        </Typography>
        <MyLink>Visit our Instgram Page</MyLink>
      </Stack>
    </Box>
  );
};

export default MoreInfo;
