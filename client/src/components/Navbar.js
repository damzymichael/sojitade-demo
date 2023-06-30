import React from "react";
import { Toolbar, Stack, Divider } from "@mui/material";
import { Drawer, CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const drawerWidth = 240;
const Navbar = ({ mobileOpen, handleDrawerToggle }) => {
  const NavLink = styled(Link)(({theme}) => ({
    display: 'block',
    textDecoration: 'none',
    color: theme.palette.primary.main,
    padding: '10px 15px'
  }))
  return (
    <Drawer
      width={drawerWidth}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", sm_2: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
      anchor="right"
    >
      <Toolbar />
      <Stack>
        {["Home", "About us", "Events", "Contact us", "Login", "Signup"].map(
          (link) => (
            <div key={link}>
              <Divider />
              <CssBaseline />
              <NavLink to="#">{link}</NavLink>
            </div>
          )
        )}
      </Stack>
    </Drawer>
  );
};

export default Navbar;
