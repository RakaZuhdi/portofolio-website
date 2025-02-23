import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Button, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useThemeColors from '../hooks/useThemeColors';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const colors = useThemeColors();

  // Project data - in a real app, this would come from an API or database
  const projects = {
    'containerized-IEC60870-5-104-server-application-for-smart-grid-cluster-controller': {
      title: 'Containerized IEC60870-5-104 Server Application for Smart Grid Cluster Controller',
      description: 'Containerized IEC60870-5-104 Server Application for Smart Grid Cluster Controller',
      longDescription: [
          "The advancement of smart grids requires efficient, real-time communication between power systems and control centers. This thesis develops a containerized IEC 60870-5-104 server application to enhance data exchange between Smart Grid Cluster Controllers (SGCCs) and SCADA systems. Initially started as an internship, the project evolved into a bachelor's thesis, addressing challenges in real-time monitoring, interoperability, and automation.",
          'Using Docker, Node-RED, InfluxDB, and ArangoDB, the system ensures scalability, modularity, and easy deployment. It leverages IEC 60870-5-104, a standard protocol for power grid communication, utilizing Application Service Data Units (ASDUs) to structure messages. The system implements three key ASDU types: Measured Short Value ASDU (Type 36) for real-time sensor data, Single Command ASDU (Type 45) for simple on/off controls, and Double Command ASDU (Type 46) for multi-state operations.',
          'The research implements three key ASDU types to facilitate efficient communication. Measured Short Value ASDU (Type 36) is used to send real-time measurement data, such as voltage, current, and power levels, from SGCCs to the control room, enabling continuous monitoring of the power grid. Single Command ASDU (Type 45) allows the control center to send binary on/off commands to remote devices, such as circuit breakers or alarms, ensuring immediate execution of control actions. Meanwhile, Double Command ASDU (Type 46) enables more complex multi-state operations, such as adjusting power regulators or voltage controllers, which require finer control rather than just switching between two states.',
          'Each ASDU carries essential metadata to ensure structured and efficient communication. The Cause of Transmission (COT) field specifies the reason for sending a message, such as a periodic update or an event trigger. The Common Address (CA) identifies the SGCC associated with the data, while the Information Object Address (IOA) pinpoints the exact device or measurement being referenced. These structured elements enable precise and reliable data exchange between the control center and SGCCs, ensuring seamless grid operation.',
          'The server--JSON IEC Server leverages the lib60870-C library to handle IEC 104 message transmission. When the server receives a JSON object, it translates it into an ASDU and sends it over the IEC 104 protocol. Conversely, when it receives an ASDU, it converts it back into a JSON object that can be processed by Node-RED. This design enables seamless integration with modern web-based applications and monitoring systems, eliminating the need for direct IEC 104 message handling at the application level.',
          'The JSON IEC Server plays a crucial role in translating between JSON objects and IEC 60870-5-104 ASDUs (Application Service Data Units) for seamless communication between Smart Grid Cluster Controllers (SGCCs) and SCADA systems. This server, built using the json-iec104-server implementation, acts as a bridge that converts JSON-formatted data into IEC 104 ASDUs and vice versa, allowing for efficient data exchange in modern smart grid systems.'
      ],
      technologies: ['Node-RED', 'Docker', 'InfluxDB', 'ArangoDB', 'json-iec104-server', 'lib60870-C', 'C Programming Language', 'Linux', 'WINPP104', 'Visual Studio Code', 'PuTTY'],
      features: [
        'Real-time data exchange using IEC 60870-5-104 protocol',
        'Containerized architecture for easy deployment and scalability',
        'Integration with Node-RED for flow-based automation',
        'Storage and retrieval of measurement data using InfluxDB',
        'Hierarchical data management with ArangoDB',
        'Translation of JSON objects to and from ASDUs using json-iec104-server',
        'Support for Short Measured Value, Single Command, and Double Command ASDUs',
        'Automated alert system for threshold-based monitoring',
        'SCADA system interoperability using lib60870-C',
        'Remote device control through Single and Double Command ASDUs',
        'Docker-based microservices architecture',
        'Logging and monitoring of IEC 104 messages for debugging and analysis'
      ],
      images: [
        'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/ar1.jpg',
        'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/ar2.jpg'
      ],
      links: [
        { title: 'Thesis Work', url: 'https://drive.google.com/file/d/1I4C9vRYLjv_XWQruDRB3_t4Dkosu85_3/view?usp=sharing', icon: '' },
        { title: 'View Documentation', url: 'https://drive.google.com/file/d/1St2ZE7_SabTLQmZXis-SZEIsKWoNTtzY/view?usp=sharing', icon: 'demo' }
      ],
      github: 'https://github.com/rakaprsdhkra/sgcc',
      demo: 'https://drive.google.com/file/d/1I4C9vRYLjv_XWQruDRB3_t4Dkosu85_3/view?usp=sharing'
    },
    'portfolio': {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my work and skills.',
      longDescription: [
        'Designed and developed a personal portfolio website using React and Material-UI, focusing on creating a clean, modern interface that effectively showcases my work and skills.',
        'Implemented responsive layouts and smooth animations using Framer Motion to enhance the user experience. The website features a dark mode theme and optimized performance for fast loading times.',
        'Utilized AWS S3 for reliable and scalable image hosting, ensuring optimal delivery of visual content across all devices and network conditions.'
      ],
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
      links: [
        { title: 'GitHub Repository', url: 'https://github.com/rakaprsdhkra/portfolio', icon: 'github' },
        { title: 'Live Demo', url: 'https://your-portfolio-url.com', icon: 'demo' }
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
              <Box sx={{ display: 'flex', gap: 2, mb: 6 }}>
                {project.links.map((link, index) => (
                    <Button
                        key={index}
                        variant="outlined"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={link.icon === 'github' ? <GitHubIcon /> : <OpenInNewIcon />}
                        sx={{
                          borderColor: `${colors.primary}40`,
                          color: colors.primary,
                          '&:hover': {
                            borderColor: colors.primary,
                            backgroundColor: `${colors.primary}10`,
                          },
                        }}
                    >
                      {link.title}
                    </Button>
                ))}
              </Box>
              <Box sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: colors.textSecondary,
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  {project.longDescription.map((paragraph, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      paragraph
                      sx={{
                        color: colors.textSecondary,
                        lineHeight: 1.8,
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Typography>
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

              <Box sx={{ mb: 6 }}>
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
