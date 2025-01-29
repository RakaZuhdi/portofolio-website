import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'modern-portfolio',
      title: 'Modern Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Material-UI. Features smooth animations and modern design trends.',
      image: '/project1.jpg',
      technologies: ['React', 'Material-UI', 'Framer Motion'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://yourportfolio.com'
    },
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Platform',
      description: 'An intelligent chatbot platform powered by machine learning, providing real-time customer support.',
      image: '/project2.jpg',
      technologies: ['Python', 'TensorFlow', 'Node.js', 'WebSocket'],
      github: 'https://github.com/yourusername/ai-chatbot',
      demo: 'https://aichatbot-demo.com'
    },
    {
      id: 'e-commerce',
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management and secure payment processing.',
      image: '/project3.jpg',
      technologies: ['Next.js', 'MongoDB', 'Stripe', 'AWS'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://ecommerce-demo.com'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={cardVariants}>
            <Typography
              variant="h2"
              sx={{
                color: '#fff',
                mb: 6,
                textAlign: 'center',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                background: 'linear-gradient(90deg, #fff, #8892b0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Featured Projects
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <motion.div variants={cardVariants} whileHover="hover">
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: 'rgba(45, 45, 45, 0.5)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(100, 255, 218, 0.1)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, rgba(100,255,218,0.1) 0%, rgba(100,255,218,0) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover::before': {
                        opacity: 1,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        borderBottom: '1px solid rgba(100, 255, 218, 0.1)',
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                          color: '#fff',
                          mb: 2,
                          fontWeight: 600,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#8892b0',
                          mb: 2,
                          lineHeight: 1.6,
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(100, 255, 218, 0.1)',
                              color: '#64ffda',
                              borderRadius: '8px',
                              '&:hover': {
                                backgroundColor: 'rgba(100, 255, 218, 0.2)',
                              },
                            }}
                          />
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <IconButton
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: '#64ffda',
                              '&:hover': {
                                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                              },
                            }}
                          >
                            <GitHubIcon />
                          </IconButton>
                          <IconButton
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: '#64ffda',
                              '&:hover': {
                                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                              },
                            }}
                          >
                            <LaunchIcon />
                          </IconButton>
                        </Box>
                        <IconButton
                          onClick={() => navigate(`/projects/${project.id}`)}
                          sx={{
                            color: '#64ffda',
                            '&:hover': {
                              backgroundColor: 'rgba(100, 255, 218, 0.1)',
                            },
                          }}
                        >
                          <InfoIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
