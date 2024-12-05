import { BrowserView, MobileView } from 'react-device-detect';
import './navbar.scss';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Logo from '../../assets/black_logo.webp';


const menuItems = [
  { label: 'Home', to: 'home', icon: <HomeIcon /> },
  { label: 'About', to: 'about', icon: <InfoIcon /> },
  { label: 'Skills', to: 'skills', icon: <CodeIcon /> },
  { label: 'Projects', to: 'projects', icon: <BuildIcon /> },
  { label: 'Contact', to: 'contact', icon: <ContactMailIcon /> },
];

const LogoSection = () => (
  <div className="logo" style={{ marginRight: '16px' }}>
    <img
      src={Logo}
      alt="Your Logo"
      style={{ height: '40px', cursor: 'pointer' }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    />
  </div>
);

const MenuItems = ({
  isMobile,
  onClose,
}: {
  isMobile?: boolean;
  onClose?: () => void;
}) => (
  <>
    {menuItems.map((item) => (
      <MenuItem
        key={item.to}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
        onClick={isMobile ? onClose : undefined}
      >
        <Link
          activeClass={isMobile ? 'active-menu-icon' : 'active'}
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
          {/* {item.icon} */}
          {item.label}
        </Link>
      </MenuItem>
    ))}
  </>
);

function AppNavbar() {
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] =
    useState<null | HTMLElement>(null);

  const handleMobileMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  return (
    <nav className="navbar">
      {/* Logo */}

      {/* Desktop Menu */}
      <BrowserView>
        <div
          className="menu-items"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <LogoSection />
          <MenuItems />
        </div>
      </BrowserView>

      {/* Mobile Menu */}
      <MobileView>
        <IconButton
          className="menu-icon"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMobileMenuClick}
          style={{ marginLeft: 'auto' }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Menu
          anchorEl={mobileMenuAnchorEl}
          open={Boolean(mobileMenuAnchorEl)}
          onClose={handleMobileMenuClose}
        >
          <MenuItems isMobile onClose={handleMobileMenuClose} />
        </Menu>
      </MobileView>
    </nav>
  );
}

export default AppNavbar;
