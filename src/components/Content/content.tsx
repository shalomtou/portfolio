import AppHome from '../Home/home';
import AppAbout from '../About/about';
import AppSkills from '../Skills/skills';
import AppProjects from '../Projects/projects';
import AppContact from '../ContactMe/ContactMe';
import './content.scss';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

function AppContent() {
  return (
    <div className="menu-content">
      <Container>
        <Routes>
          <Route path="/" element={<AppHome />} />
          <Route path="/about" element={<AppAbout />} />
          <Route path="/projects" element={<AppProjects />} />
          <Route path="/skills" element={<AppSkills />} />
          <Route path="/contact" element={<AppContact />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
      </Container>
    </div>
  );
}

export default AppContent;
