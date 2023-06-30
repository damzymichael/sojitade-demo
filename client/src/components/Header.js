import React, { useState } from "react";
import { Button, Stack, Box } from "@mui/material";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
import Navbar from "./Navbar";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //reusable component
  const Btn = styled(Button)(() => ({
    fontWeight: 500,
  }));

  //reusable style
  const breakpoint = (theme) => ({
    [theme.breakpoints.down("sm_2")]: {
      display: "none",
    },
  });

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 1,
      }}
    >
      <img src={Logo} alt="sojitade-logo" />
      <Stack direction="row" spacing={{ sm: 0.5, md: 5 }} sx={breakpoint}>
        {["Home", "About us", "Events", "Contact us"].map((link) => (
          <Link to="#" key={link}>
            <Btn variant="text">{link}</Btn>
          </Link>
        ))}
      </Stack>

      <Stack direction="row" spacing={0.7} sx={breakpoint}>
        <Btn variant="outlined">Login</Btn>
        <Btn variant="contained">Signup</Btn>
      </Stack>

      <IconButton
        sx={{ display: { xs: "block", sm_2: "none" } }}
        onClick={handleDrawerToggle}
      >
        <Menu color="primary" fontSize="large" />
      </IconButton>

      <Navbar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    </Box>
  );
};
export default Header;
