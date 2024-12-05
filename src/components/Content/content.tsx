import AppHome from '../Home/home';
import AppAbout from '../About/about';
import AppSkills from '../Skills/skills';
import AppProjects from '../Projects/projects';
import AppContact from '../ContactMe/ContactMe';
import './content.scss';
import { Container } from '@mui/material';

function AppContent() {
  return (
    <div className="menu-content" id="app-menu">
      <Container>
        <AppHome />
        <AppAbout />
        <AppProjects />
        <AppSkills />
        <AppContact />
      </Container>
    </div>
  );
}

export default AppContent;
