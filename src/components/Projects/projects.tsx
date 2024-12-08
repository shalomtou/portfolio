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
        'A React app for creating and viewing photo albums with a delightful design that keeps users engaged.',
      githubUrl: 'https://github.com/shalomtou/album-gallery',
      demoUrl: 'https://album-gallery-sable.vercel.app/',
    },
    {
      title: 'Task Manager',
      description:
        'A full-stack web app for managing tasks, built using modern web development technologies.',
      githubUrl: 'https://github.com/shalomtou/task-manager',
      demoUrl: 'https://github.com/shalomtou/task-manager',
    },
    {
      title: 'Image Slider',
      description:
        'A frontend app in React.js for creating a dynamic image slider component with caching and improved performance.',
      githubUrl: 'https://github.com/shalomtou/image-slider',
      demoUrl: 'https://image-slider-seven-black.vercel.app/',
    },
    {
      title: 'Dummy Backend Server',
      description:
        'A simple backend server written in Node.js with TypeScript.',
      githubUrl: 'https://github.com/shalomtou/dummy-server',
      demoUrl: 'https://dummy-server-mu.vercel.app/',
    },
    {
      title: 'Proxy Server',
      description: 'A lightweight proxy server for online use.',
      githubUrl: 'https://github.com/shalomtou/proxy-server',
      demoUrl: 'https://proxy-server-fawn-six.vercel.app/',
    },
  ];

  return (
    <section id="projects">
      <Box
        className="projects-wrapper"
        sx={{ margin: '2rem auto', padding: '1rem' }}
      >
        <span className="section-title text">Projects</span>
        <Box>
          <HighlightAchievement />
        </Box>

        <Container>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 4,
                    borderRadius: 2,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent className="text">
                    <Typography
                      variant="h6"
                      gutterBottom
                      className="text"
                      sx={{ fontWeight: 'bold', color: 'text.primary' }}
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      padding: '0 1rem 1rem',
                    }}
                  >
                    <IconButton
                      color="primary"
                      onClick={() => handleButtonClick(project.githubUrl)}
                      title="View GitHub Repository"
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => handleButtonClick(project.demoUrl)}
                      title="View Demo"
                    >
                      <OpenInNewIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </section>
  );
}

export default AppProjects;
