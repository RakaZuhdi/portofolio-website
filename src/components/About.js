import React from 'react';
import { Box, Container, Typography, Stepper, Step, StepLabel, StepContent, Paper, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import useThemeColors from '../hooks/useThemeColors';
import ImageCarousel from './ImageCarousel';

let FH_9 = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/fh/IMG_4962.jpeg'
let FH_2 = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/fh/IMG_4980.JPG'
let FH_3 = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/fh/IMG_4998.jpeg'
let FH_4 = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/fh/IMG_5081.jpeg'
let FH_5 = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/fh/IMG_5145.jpeg'
let FH_6 = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/fh/IMG_7027.jpeg'
let FH_7 = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/fh/IMG_7070.jpeg'
let FH_8 = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/fh/IMG_7277.jpeg'
let FH_1 = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/fh/IMG_7303.jpeg'

let Komune4 = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/komune-studio/IMG_0931.jpeg'
let Komune1 ='https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/komune-studio/Komune_1.JPG'
let Komune2 = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/komune-studio/Komune_2.jpg'
let Komune3 = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/komune-studio/Komune_3.jpg'

let SGU_1 = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/sgu/ed6c5d87-288e-47cf-8620-2789a14e1724.jpg'
let SGU_2 = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/sgu/IMG_0059.JPG'
let SGU_3 = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/sgu/IMG_0060.JPG'
let SGU_4 = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/sgu/IMG_9698.jpeg'

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
        'Supervised and trained 5 interns for full stack and mobile development.',
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
          description: "New's Eve Intense Game Night on the Office."
        },
        {
          url: Komune2,
          description: "Interns Day!"
        },
        {
          url: Komune3,
          description: 'Badminton tournament day!'
        },
        {
          url: Komune4,
          description: 'Presenting our work to students on an Swiss German University workshop event A.K.A intern hunting.'
        },
      ]
    },
    {
      title: "Internship, Bachelor's Thesis, and Double Degree Student",
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
          url: FH_8,
          description: "Group picture with Professor Dr.-Ing. Egon Ortjohann and his research assistant, Andreas Schmelter, Dipl.-Ing."
        },
        {
          url: FH_2,
          description: "A group photo with the Frau Andrea Wil from the office of student affairs."
        },
        {
          url: FH_3,
          description: "Post final exam group photo #1"
        },
        {
          url: FH_4,
          description: "Post final exam group photo #2"
        },
        {
          url: FH_5,
          description: "Before presenting the internship project proposal."
        },
        {
          url: FH_6,
          description: "Studying my the IEC 60870-5-104 protocol in the comfort of my own office."
        },
        {
          url: FH_7,
          description: "Picture with fellow Indonesian lab members and my supervisor."
        },
        {
          url: FH_9,
          description: "First time arriving at the campus."
        },
        {
          url: FH_1,
          description: "Post lab project final presentation"
        }
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
          url: SGU_1,
          description: "Graduating with S.Kom (Sarjana Komputer) and B.Eng (Bachelor's of Engineering)."
        },
        {
          url: SGU_2,
          description: 'Post final thesis presentation day 2'
        },
        {
          url: SGU_3,
          description: 'Post final thesis presentation day 2'
        },
        {
          url: SGU_4,
          description: 'Post official 2019 batch group picture.'
        },
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
