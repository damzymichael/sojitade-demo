import React, {useState} from 'react';
import {Button, Stack, Box} from '@mui/material';
import {IconButton} from '@mui/material';
import {Menu} from '@mui/icons-material';
import {styled} from '@mui/system';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.jpg';
import Navbar from './Navbar';
import {navInfo} from '../data/nav';
import {NavLink} from './Navbar';

const Header = ({children}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //reusable component
  const Btn = styled(Button)(() => ({
    fontWeight: 500
  }));

  //reusable style
  const breakpoint = theme => ({
    [theme.breakpoints.down('sm_2')]: {
      display: 'none'
    }
  });

  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  return (
    <>
      <div className='header'>
        <Box sx={headerStyles}>
          <img src={Logo} alt='sojitade-logo' height='50px' />
          <Stack direction='row' spacing={{sm: 0.5, md: 5}} sx={breakpoint}>
            {navInfo.map((link, i) => (
              <NavLink
                to={link.to}
                key={i}
                onClick={() => link.action && link.action()}>
                <Btn variant='text'>{link.name}</Btn>
              </NavLink>
            ))}
          </Stack>

          <Stack direction='row' spacing={0.7} sx={breakpoint}>
            <Btn variant='outlined'>Login</Btn>
            <Btn variant='contained'>Signup</Btn>
          </Stack>

          <IconButton
            sx={{display: {xs: 'block', sm_2: 'none'}}}
            onClick={handleDrawerToggle}>
            {/* <Menu color='primary' fontSize='large' /> */}
            <div className='menu'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </IconButton>

          <Navbar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Box>
      </div>
      {children}
    </>
  );
};
export default Header;
