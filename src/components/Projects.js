import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
import useThemeColors from '../hooks/useThemeColors';

const Projects = () => {
  const colors = useThemeColors();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
      image: '/images/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/username/ecommerce',
      live: 'https://ecommerce-demo.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates. Built using React, Firebase, and Material-UI.',
      image: '/images/project2.jpg',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      github: 'https://github.com/username/task-manager',
      live: 'https://task-manager-demo.com',
    },
    {
      id: 3,
      title: 'AI Image Generator',
      description: 'An AI-powered image generation tool that creates unique artwork based on text descriptions using OpenAI\'s API.',
      image: '/images/project3.jpg',
      technologies: ['Python', 'OpenAI', 'React', 'FastAPI'],
      github: 'https://github.com/username/ai-image-gen',
      live: 'https://ai-image-gen-demo.com',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        minHeight: '100vh',
        background: colors.backgroundGradient,
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '60%',
          height: '60%',
          right: '-20%',
          top: '-20%',
          background: `radial-gradient(circle, ${colors.glowPrimary} 0%, ${colors.glowSecondary} 70%)`,
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div variants={itemVariants}>
          <Typography
            variant="overline"
            sx={{
              color: colors.primary,
              letterSpacing: '0.2em',
              fontWeight: 500,
              mb: 2,
              display: 'block',
            }}
          >
            Portfolio
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              color: colors.textPrimary,
              mb: 4,
              background: `linear-gradient(90deg, ${colors.textPrimary}, ${colors.textSecondary})`,
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
              <motion.div variants={itemVariants}>
                <Card
                  component={Link}
                  to={`/projects/${project.id}`}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: colors.backgroundElevated,
                    border: `1px solid ${colors.borderPrimary}`,
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 24px ${colors.shadowPrimary}`,
                      '& .project-image': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      className="project-image"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: colors.textPrimary,
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.textSecondary,
                        mb: 2,
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            mr: 1,
                            mb: 1,
                            backgroundColor: colors.primaryLight,
                            color: colors.primary,
                            fontWeight: 500,
                            '&:hover': {
                              backgroundColor: colors.primaryLight,
                            },
                          }}
                        />
                      ))}
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 1,
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        zIndex: 1,
                      }}
                    >
                      <IconButton
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: `${colors.backgroundPrimary}dd`,
                          backdropFilter: 'blur(4px)',
                          '&:hover': {
                            backgroundColor: colors.backgroundPrimary,
                          },
                        }}
                        onClick={(e) => e.preventDefault()}
                      >
                        <GitHubIcon sx={{ color: colors.textPrimary }} />
                      </IconButton>
                      <IconButton
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: `${colors.backgroundPrimary}dd`,
                          backdropFilter: 'blur(4px)',
                          '&:hover': {
                            backgroundColor: colors.backgroundPrimary,
                          },
                        }}
                        onClick={(e) => e.preventDefault()}
                      >
                        <OpenInNewIcon sx={{ color: colors.textPrimary }} />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
