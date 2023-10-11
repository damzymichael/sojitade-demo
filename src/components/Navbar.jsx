import React from 'react';
import {Toolbar, Stack, Divider} from '@mui/material';
import {Drawer, CssBaseline, IconButton} from '@mui/material';
import {Close} from '@mui/icons-material';
import {Link as ScrollLink} from 'react-scroll';
import {styled} from '@mui/system';
import {navInfoPlus} from '../assets/nav';

const drawerWidth = 240;
const Navbar = ({mobileOpen, handleDrawerToggle}) => {
  const NavLink = styled(ScrollLink)(({theme}) => ({
    display: 'block',
    textDecoration: 'none',
    color: theme.palette.primary.main,
    padding: '10px 15px'
  }));
  return (
    <Drawer
      width={drawerWidth}
      variant='temporary'
      open={mobileOpen}
      onClose={handleDrawerToggle}
      anchor='right'
      ModalProps={{
        keepMounted: true
      }}
      sx={{
        display: {xs: 'block', sm_2: 'none'},
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth
        }
      }}>
      <div>
        <IconButton onClick={handleDrawerToggle}>
          <Close fontSize='large' color='#000' />
        </IconButton>
      </div>
      <Toolbar sx={{minHeight: 20}} />
      <Stack>
        {navInfoPlus.map(link => (
          <div key={link.name}>
            <Divider />
            <CssBaseline />
            <NavLink
              to={link.to}
              onClick={() => {
                link.action && link.action();
                handleDrawerToggle();
              }}>
              {link.name}
            </NavLink>
          </div>
        ))}
      </Stack>
    </Drawer>
  );
};

export default Navbar;
