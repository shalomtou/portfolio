import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-scroll';
import { Link, NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Drawer,
  List,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/black_logo.webp';
import './navbar.scss';

const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const AppNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const navigate = useNavigate();

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigateHome = () => {
    navigate('/'); // Navigate to the homepage
  };

  return (
    <>
      {/* AppBar for Navbar */}
      <AppBar
        position="fixed"
        color="default"
        className={`navbar ${isNavbarVisible ? 'visible' : 'hidden'}`}
        elevation={4}
      >
        <Toolbar className="toolbar">
          {/* Logo Section */}
          <Box
            display="flex"
            alignItems="center"
            sx={{ cursor: 'pointer' }} // Material-UI recommended styling approach
            onClick={handleNavigateHome}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{ height: '40px', marginRight: '8px' }}
            />
          </Box>

          {/* Desktop Menu */}

          <Box className="desktop-menu" display={{ xs: 'none', md: 'flex' }}>
            {menuItems.map((item) => (
              <MenuItem
                key={item.to}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <NavLink
                  to={item.to}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  {item.label}
                </NavLink>
              </MenuItem>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <Box className="mobile-menu" display={{ xs: 'block', md: 'none' }}>
            <IconButton onClick={toggleMobileMenu}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={mobileMenuOpen} onClose={toggleMobileMenu}>
        <List>
          {menuItems.map((item) => (
            <MenuItem
              key={item.to}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <NavLink
                to={item.to}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {item.label}
              </NavLink>
            </MenuItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default AppNavbar;
