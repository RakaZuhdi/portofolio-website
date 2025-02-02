import React from 'react';
import { Box, Container, Typography, Stepper, Step, StepLabel, StepContent, Paper, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import useThemeColors from '../hooks/useThemeColors';
import ImageCarousel from './ImageCarousel';
import EmptyAvatar from '../pictures/empty-avatar.jpg'
import Komune1 from '../pictures/Komune/Komune_1.JPG'
import Komune2 from '../pictures/Komune/Komune_2.jpg'
import Komune3 from '../pictures/Komune/Komune_3.jpg'
import Komune4 from '../pictures/Komune/Komune_4.jpeg'

import FH_1 from '../pictures/FH/FH_1.jpeg'
import FH_2 from '../pictures/FH/FH_2.jpeg'
import FH_3 from '../pictures/FH/FH_3.jpeg'
import FH_4 from '../pictures/FH/FH_4.jpeg'
import FH_5 from '../pictures/FH/FH_5.jpeg'
import FH_6 from '../pictures/FH/FH_6.JPG'
import FH_7 from '../pictures/FH/FH_7.jpeg'
import FH_8 from '../pictures/FH/FH_8.jpeg'

const About = () => {
  const colors = useThemeColors();

  const experiences = [
    {
      title: 'Full Stack Web and Mobile App Developer',
      company: 'Komune Studio',
      period: 'Feb 2022 - Present',
      description: 'Currently, I am full stack developer working in Komune Studio delivering full stack multi-tier web applications tailored to client needs.',
      achievements: [
        'Lead 15+ projects in multi-tier web applications, mobile development, and VR.',
        'Lead and guided 5 interns during the project.',
        'Implemented CI/CD for automatic deployment using Jenkins.',
        'Established Dockerized development environment for faster development process.',
        'In charge of mainly of projects that used that has Computer Vision elements (Face Recognition, Crowd Detection, Object Detection).',
        'Assisted in the development of rapid event registration system for national MICE events with 6000+ visitors, reducing queue time and allowing for better analytics and monitoring capabilities for the event committees.'
      ],
      technologies: [
        'React', 'Node.js', 'Python', 'TensorFlow',
        'Docker', 'AWS', 'MongoDB', 'PostgreSQL',
        'OpenCV', 'YOLOv8', 'FastAPI', 'Swift', 'Jenkins', 'Unity'
      ],
      images: [
        {
          url: Komune1,
          description: "Game night on 2024 new year's eve."
        },
        {
          url: Komune2,
          description: "Graduation of interns."
        },
        {
          url: Komune3,
          description: 'Sports day.'
        },
        {
          url: Komune4,
          description: 'Presenting our work to students on an Swiss German University workshop event.'
        },
      ]
    },
    {
      title: "Research Intern and Bachelor's Thesis",
      company: 'Power Systems & Power Economics Laboratory at Fachhochschule Südwestfalen',
      period: "March 2022 - August 2022 (Research Intern), February 2023 - August 2023 (Bachelor's Thesis)",
      description: 'Developed and documented the implementation of the IEC60870-5-104 communication protocol for SCADA systems, focusing on smart grid integration. Designed and implemented key ASDU types, including short measured values and control commands, ensuring efficient real-time data exchange between substations and control centers. Utilized tools such as Node-RED, InfluxDB, and the lib60870-C library to automate data transmission and processing. Enhanced system scalability and automation by integrating JSON-based IEC servers and Docker-based deployment, improving reliability and operational efficiency in power system monitoring and control.',
      achievements: [
        'Engineered a SCADA communication system implementing IEC 60870-5-104 protocol, enabling real-time power grid monitoring and control under the supervision of Prof. Dr.-Ing Egon Ortjohann',
          'Implemented key Application Service Data Units (ASDUs) for real-time monitoring (M_ME_TF_1), remote device control (C_SC_NA_1), and two-step command execution (C_DC_NA_1).',
          'Designed JSON-based IEC 60870-5-104 server that translates ASDUs to and from JSON for integration with modern systems.',
          'Developed Node-RED-based communication flows to automate data processing, logging, and command execution.',
          'Integrated InfluxDB alerts to notify control centers of threshold breaches in power grid data.',
          'Migrated the system from a virtual machine to an embedded PCs (Smart Grid Cluster Controller), enhancing performance and scalability.',
          'Conducted stress testing and functional validation to ensure the system\'s reliability and responsiveness.'
      ],
      technologies: [
        'Node-RED', 'InfluxDB', 'C', 'IEC60870-5-104 (IEC104)', 'Docker', 'WINPP104', 'MongoDB'
      ],
      images: [
        {
          url: FH_1,
          description: "Group picture with Professor Dr.-Ing. Egon Ortjohann and his research assistant, Andreas Schmelter, Dipl.-Ing."
        },
        {
          url: FH_2,
          description: "Last day at the lab."
        },
        {
          url: FH_3,
          description: "Aftermath of final exam for the double degree program."
        },
        {
          url: FH_4,
          description: "Game night on 2024 new year's eve."
        },
        {
          url: FH_5,
          description: "Game night on 2024 new year's eve."
        },
        {
          url: FH_6,
          description: "Game night on 2024 new year's eve."
        },
        {
          url: FH_7,
          description: "Game night on 2024 new year's eve."
        },
        {
          url: FH_5,
          description: "Game night on 2024 new year's eve."
        },

      ]
    },
    {
      title: "Bachelor's of Information Technology (S.Kom.) Student",
      company: 'Swiss German University',
      period: '2017 - 2021',
      description: 'Studied Computer Science with a focus on software engineering and artificial intelligence.',
      achievements: [
        'GPA: 3.8/4.0',
        'Led University Coding Club',
        'Won Hackathon 2021'
      ],
      technologies: [
        'Java', 'Python', 'C++', 'Data Structures',
        'Algorithms', 'Machine Learning', 'Web Development'
      ],
      images: [
        {
          url: '/images/about/university.jpg',
          description: 'Graduating with honors in Computer Science, focusing on software engineering and AI.'
        },
        {
          url: '/images/about/coding-club.jpg',
          description: 'Leading the university coding club, organizing workshops and hackathons.'
        },
        {
          url: '/images/about/hackathon.jpg',
          description: 'Winning first place at the 2021 Hackathon with an innovative AI-powered solution.'
        }
      ]
    }
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
            About Me
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
            My Journey
          </Typography>
        </motion.div>

        <Stepper
          orientation="vertical"
          sx={{
            '.MuiStepConnector-line': {
              borderColor: colors.borderPrimary,
            },
          }}
        >
          {experiences.map((exp, index) => (
            <Step
              key={exp.title}
              active={true}
              sx={{
                '& .MuiStepLabel-root': {
                  padding: '24px 0',
                },
                '& .MuiStepContent-root': {
                  borderColor: colors.borderPrimary,
                  marginLeft: '12px',
                },
                '& .MuiStepLabel-label': {
                  color: colors.textPrimary,
                  fontWeight: 600,
                  fontSize: '1.25rem',
                },
                '& .MuiStepIcon-root': {
                  color: colors.primary,
                  '&.Mui-active': {
                    color: colors.primary,
                  },
                  '&.Mui-completed': {
                    color: colors.primary,
                  },
                },
              }}
            >
              <StepLabel>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Box>
                    <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                      <Typography variant="h6" component="span">
                        {exp.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="span"
                        sx={{
                          color: colors.primary,
                          fontWeight: 500,
                        }}
                      >
                        @ {exp.company}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: colors.textSecondary,
                        mb: 2,
                      }}
                    >
                      {exp.period}
                    </Typography>
                  </Box>
                </motion.div>
              </StepLabel>
              <StepContent>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Box
                    sx={{
                      backgroundColor: colors.backgroundElevated,
                      borderRadius: 2,
                      p: 3,
                      mb: 3,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: colors.textSecondary,
                        mb: 3,
                        lineHeight: 1.8,
                      }}
                    >
                      {exp.description}
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: colors.textPrimary,
                          mb: 2,
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          '&::before': {
                            content: '""',
                            display: 'block',
                            width: 4,
                            height: 20,
                            backgroundColor: colors.primary,
                            marginRight: 2,
                            borderRadius: 4,
                          }
                        }}
                      >
                        Technologies Used
                      </Typography>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          flexWrap: 'wrap', 
                          gap: 1,
                          '& .MuiChip-root': {
                            transition: 'all 0.3s ease',
                            padding: '4px 2px',
                            height: '28px',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: `0 4px 8px ${colors.shadowPrimary}`,
                            }
                          }
                        }}
                      >
                        {exp.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: colors.primary,
                              color: '#fff',
                              fontWeight: 600,
                              fontSize: '0.8rem',
                              borderRadius: '6px',
                              letterSpacing: '0.02em',
                              '&:hover': {
                                backgroundColor: `${colors.primaryDark}`,
                                transform: 'translateY(-2px)',
                              },
                              '& .MuiChip-label': {
                                padding: '0 8px',
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: colors.textPrimary,
                          mb: 2,
                          fontWeight: 600,
                        }}
                      >
                        Key Achievements:
                      </Typography>
                      {exp.achievements.map((achievement, i) => (
                        <Typography
                          key={i}
                          variant="body2"
                          sx={{
                            color: colors.textSecondary,
                            mb: 1,
                            pl: 2,
                            position: 'relative',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              left: 0,
                              top: '0.5em',
                              width: 4,
                              height: 4,
                              borderRadius: '50%',
                              backgroundColor: colors.primary,
                            },
                          }}
                        >
                          {achievement}
                        </Typography>
                      ))}
                    </Box>
                    
                    <ImageCarousel images={exp.images} />
                  </Box>
                </motion.div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Container>
    </Box>
  );
};

export default About;
