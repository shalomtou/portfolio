import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
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
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

const AppNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle scroll behavior to hide or show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavbarVisible(currentScrollY <= lastScrollY || currentScrollY < 64); // Show when scrolling up
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
            style={{ cursor: 'pointer' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
                <Link
                  activeClass={false ? 'active-menu-icon' : 'active'}
                  containerId="app-menu"
                  to={item.to}
                  spy={true}
                  hashSpy={false}
                  spyThrottle={0}
                  offset={0}
                  duration={500}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  {item.label}
                </Link>
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
              <Link
                activeClass={false ? 'active-menu-icon' : 'active'}
                containerId="app-menu"
                to={item.to}
                spy={true}
                hashSpy={false}
                spyThrottle={0}
                offset={0}
                duration={500}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {item.label}
              </Link>
            </MenuItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default AppNavbar;
