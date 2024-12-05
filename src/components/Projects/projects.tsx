import './projects.scss';
import '../../styles/global.scss';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  IconButton,
  Container,
  Box,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import HighlightAchievement from '../HighlightAchievement/HighlightAchievement';

function AppProjects() {
  const handleButtonClick = (url: string) => {
    window.open(url, '_blank');
  };

  const projects = [
    {
      title: 'Image Gallery',
      description:
        'Photos Albums is a React application that allows users to create and view photo albums. Users can create their own albums, upload photos, and share them with others. The application provides a delightful and attractive design to keep viewers astonished and curious to see more albums.',
      githubUrl: 'https://github.com/shalomtou/album-gallery',
      demoUrl: 'https://album-gallery-sable.vercel.app/',
    },
    {
      title: 'Task Manager',
      description:
        'This project is a full-stack web application for managing user tasks. It is built using the latest web development technologies and follows the Model-View-Controller (MVC) design pattern for ease of maintenance and reusability.',
      githubUrl: 'https://github.com/shalomtou/task-manager',
      demoUrl: 'https://github.com/shalomtou/task-manager',
    },
    {
      title: 'Image Slider',
      description:
        'This repository contains a frontend application developed in React.js for creating an image slider component. The application fetches data from a remote endpoint and dynamically populates the image slider based on the fetched data. Additionally, it implements a caching layer using IndexedDB to reduce memory consumption and improve performance.',
      githubUrl: 'https://github.com/shalomtou/image-slider',
      demoUrl: 'https://image-slider-seven-black.vercel.app/',
    },
    {
      title: 'Dummy Backend Server',
      description: "A 'dummy' backend server written in NodeJS with TS.",
      githubUrl: 'https://github.com/shalomtou/dummy-server',
      demoUrl: 'https://dummy-server-mu.vercel.app/',
    },
    {
      title: 'Proxy Server',
      description:
        'This is a simple proxy server, which can be used as an online proxy.',
      githubUrl: 'https://github.com/shalomtou/proxy-server',
      demoUrl: 'https://proxy-server-fawn-six.vercel.app/',
    },
  ];

  return (
    <section id="projects">
      <Box className="projects-wrapper">
        <span
          className="section-title text"
          style={{ margin: 'auto auto 2rem auto' }}
        >
          Projects
        </span>
        <Container>
          <Grid
            container
            spacing={3}
          >
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%', // Ensure all cards have the same height
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 3,
                    borderRadius: 2,
                    padding:0,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      gutterBottom
                      // sx={{ fontWeight: 'bold', color: 'primary.main' }}
                      className="text"
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      justifyContent: 'space-between',
                      // paddingX: 2,
                      marginTop: 'auto', // Ensures buttons are aligned at the bottom
                    }}
                  >
                    <IconButton
                      color="primary"
                      onClick={() => handleButtonClick(project.githubUrl)}
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => handleButtonClick(project.demoUrl)}
                    >
                      <OpenInNewIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <HighlightAchievement />
        </Container>
      </Box>
    </section>
  );
}

export default AppProjects;
