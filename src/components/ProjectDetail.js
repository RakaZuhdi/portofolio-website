import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Chip, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useThemeColors from '../hooks/useThemeColors';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const colors = useThemeColors();

  // Project data - in a real app, this would come from an API or database
  const projects = {
    'smart-grid-controller': {
      title: 'Smart Grid Cluster Controller',
      description: 'Development of IEC60870-5-104 communication server for Smart Grid applications.',
      longDescription: `Developed a sophisticated IEC60870-5-104 communication server for the Smart Grid Cluster Controller (SGCC).
      The project focused on implementing reliable communication protocols for power systems, enabling real-time monitoring
      and control of grid components. Key achievements include successful implementation of the IEC60870-5-104 protocol
      and integration with existing power system infrastructure.`,
      technologies: ['Node-RED', 'InfluxDB', 'C', 'IEC60870-5-104', 'Docker', 'WINPP104', 'MongoDB'],
      features: [
        'Real-time data acquisition and monitoring',
        'IEC60870-5-104 protocol implementation',
        'Integration with power system components',
        'Data logging and visualization',
        'Containerized deployment with Docker'
      ],
      images: [
        'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/sgcc1.jpg',
        'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/sgcc2.jpg'
      ],
      github: 'https://github.com/rakaprsdhkra/sgcc',
      demo: 'https://drive.google.com/file/d/1I4C9vRYLjv_XWQruDRB3_t4Dkosu85_3/view?usp=sharing'
    },
    'ar-filter': {
      title: 'AR Filter Development',
      description: 'Creating engaging AR filters for social media platforms using SparkAR.',
      longDescription: `Developed creative and interactive AR filters for social media platforms using SparkAR.
      The project involved designing and implementing various visual effects, face tracking features, and
      interactive elements to enhance user engagement. Successfully published filters that achieved significant
      user interaction and impressions.`,
      technologies: ['SparkAR', 'JavaScript', '3D Modeling', 'Animation', 'Visual Effects'],
      features: [
        'Face tracking and detection',
        'Interactive visual effects',
        'Custom 3D models and animations',
        'Real-time performance optimization',
        'Cross-platform compatibility'
      ],
      images: [
        'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/ar1.jpg',
        'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/ar2.jpg'
      ],
      github: 'https://github.com/rakaprsdhkra/ar-filters',
      demo: 'https://www.instagram.com/ar/your-filter-link'
    },
    'portfolio': {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my work and skills.',
      longDescription: `Designed and developed a personal portfolio website using React and Material-UI.
      The website features a clean, modern design with smooth animations and responsive layouts.
      Implemented dark mode support and optimized performance for fast loading times.`,
      technologies: ['React', 'Material-UI', 'Framer Motion', 'AWS S3', 'React Router'],
      features: [
        'Responsive design for all devices',
        'Dark mode support',
        'Smooth page transitions',
        'Project showcase with detailed views',
        'Optimized image loading'
      ],
      images: [
        'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/portfolio1.jpg',
        'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/portfolio2.jpg'
      ],
      github: 'https://github.com/rakaprsdhkra/portfolio',
      demo: 'https://your-portfolio-url.com'
    }
  };

  const project = projects[id];

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
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  if (!project) {
    return (
      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundPrimary,
      }}>
        <Typography variant="h4" sx={{ color: colors.textPrimary }}>
          Project not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      sx={{
        minHeight: '100vh',
        backgroundColor: colors.backgroundPrimary,
        pt: { xs: 10, md: 12 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <motion.div variants={itemVariants}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/projects')}
            sx={{
              color: colors.primary,
              mb: 4,
              '&:hover': {
                backgroundColor: `${colors.primary}10`,
              },
            }}
          >
            Back to Projects
          </Button>
        </motion.div>

        <Grid container spacing={4}>
          {/* Left Column - Project Info */}
          <Grid item xs={12} md={7}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  color: colors.textPrimary,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                }}
              >
                {project.title}
              </Typography>

              <Typography
                sx={{
                  color: colors.textSecondary,
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                {project.longDescription}
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: colors.textPrimary,
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  Technologies
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        backgroundColor: `${colors.primary}20`,
                        color: colors.primary,
                        '&:hover': {
                          backgroundColor: `${colors.primary}30`,
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: colors.textPrimary,
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  Key Features
                </Typography>
                <Box component="ul" sx={{ color: colors.textSecondary, pl: 2 }}>
                  {project.features.map((feature) => (
                    <motion.li
                      key={feature}
                      variants={itemVariants}
                      sx={{ mb: 1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 2 }}>
                {project.github && (
                  <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderColor: colors.primary,
                      color: colors.primary,
                      '&:hover': {
                        borderColor: colors.primary,
                        backgroundColor: `${colors.primary}10`,
                      },
                    }}
                  >
                    View Code
                  </Button>
                )}
                {project.demo && (
                  <Button
                    variant="contained"
                    startIcon={<LaunchIcon />}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: colors.primary,
                      color: colors.backgroundPrimary,
                      '&:hover': {
                        backgroundColor: colors.primaryLight,
                      },
                    }}
                  >
                    Live Demo
                  </Button>
                )}
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column - Project Images */}
          <Grid item xs={12} md={5}>
            <motion.div variants={itemVariants}>
              {project.images.map((image, index) => (
                <Paper
                  key={index}
                  elevation={4}
                  sx={{
                    mb: 3,
                    overflow: 'hidden',
                    borderRadius: 2,
                    border: `1px solid ${colors.primary}20`,
                  }}
                >
                  <Box
                    component="img"
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.02)',
                      },
                    }}
                  />
                </Paper>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectDetail;
