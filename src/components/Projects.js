import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link, useNavigate } from 'react-router-dom';
import useThemeColors from '../hooks/useThemeColors';

const Projects = () => {
  const colors = useThemeColors();
  const navigate = useNavigate();

  const projects = [
    {
      id: 'smart-grid-controller',
      title: 'Smart Grid Cluster Controller',
      description: 'Development of IEC60870-5-104 communication server for Smart Grid applications, enabling real-time monitoring and control of grid components.',
      image: 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/sgcc1.jpg',
      technologies: ['Node-RED', 'InfluxDB', 'C', 'IEC60870-5-104', 'Docker'],
      github: 'https://github.com/rakaprsdhkra/sgcc',
      demo: 'https://drive.google.com/file/d/1I4C9vRYLjv_XWQruDRB3_t4Dkosu85_3/view?usp=sharing',
      featured: true
    },
    {
      id: 'ar-filter',
      title: 'AR Filter Development',
      description: 'Creating engaging AR filters for social media platforms using SparkAR, featuring face tracking and interactive visual effects.',
      image: 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/ar1.jpg',
      technologies: ['SparkAR', 'JavaScript', '3D Modeling', 'Animation'],
      github: 'https://github.com/rakaprsdhkra/ar-filters',
      demo: 'https://www.instagram.com/ar/your-filter-link',
      featured: true
    },
    {
      id: 'portfolio',
      title: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website built with React and Material-UI, featuring smooth animations and dark mode support.',
      image: 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/portfolio1.jpg',
      technologies: ['React', 'Material-UI', 'Framer Motion', 'AWS S3'],
      github: 'https://github.com/rakaprsdhkra/portfolio',
      demo: 'https://your-portfolio-url.com',
      featured: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
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
        backgroundColor: colors.backgroundPrimary,
        pt: { xs: 10, md: 12 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <motion.div variants={itemVariants}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: colors.textPrimary,
              mb: 1,
              textAlign: 'center',
            }}
          >
            Featured Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: colors.textSecondary,
              mb: 6,
              textAlign: 'center',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            A collection of my recent work in web development, AR filters, and smart grid technology.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: colors.backgroundElevated,
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    border: `1px solid ${colors.primary}20`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 24px ${colors.shadowPrimary}`,
                      '& .project-image': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'relative',
                      paddingTop: '56.25%',
                      overflow: 'hidden',
                      cursor: 'pointer',
                    }}
                    onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      className="project-image"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
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
                        cursor: 'pointer',
                      }}
                      onClick={() => navigate(`/projects/${project.id}`)}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.textSecondary,
                        mb: 2,
                        lineHeight: 1.6,
                        height: '3.2em',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            mr: 1,
                            mb: 1,
                            backgroundColor: `${colors.primary}15`,
                            color: colors.primary,
                            fontWeight: 500,
                            '&:hover': {
                              backgroundColor: `${colors.primary}25`,
                            },
                          }}
                        />
                      ))}
                    </Box>
                    <Stack direction="row" spacing={1} justifyContent="flex-end">
                      {project.github && (
                        <IconButton
                          size="small"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: colors.textSecondary,
                            '&:hover': {
                              color: colors.primary,
                              transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <GitHubIcon fontSize="small" />
                        </IconButton>
                      )}
                      {project.demo && (
                        <IconButton
                          size="small"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: colors.textSecondary,
                            '&:hover': {
                              color: colors.primary,
                              transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <OpenInNewIcon fontSize="small" />
                        </IconButton>
                      )}
                    </Stack>
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
