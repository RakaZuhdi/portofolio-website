import React from 'react';
import { Box, Container, Typography, Stepper, Step, StepLabel, StepContent, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import useThemeColors from '../hooks/useThemeColors';
import ImageCarousel from './ImageCarousel';

const About = () => {
  const colors = useThemeColors();

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading development of web applications using React and Node.js. Implemented CI/CD pipelines and improved application performance by 40%.',
      achievements: [
        'Developed scalable microservices architecture',
        'Led a team of 5 developers',
        'Reduced deployment time by 60%'
      ],
      images: [
        '/images/about/software-engineer.jpg',
        '/images/about/team.jpg',
        '/images/about/deployment.jpg'
      ]
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Startup Inc.',
      period: '2021 - 2022',
      description: 'Worked on the company\'s main product using React and TypeScript. Collaborated with designers to implement pixel-perfect UI.',
      achievements: [
        'Built reusable component library',
        'Improved page load time by 30%',
        'Implemented responsive designs'
      ],
      images: [
        '/images/about/frontend-developer.jpg',
        '/images/about/designers.jpg',
        '/images/about/responsive-design.jpg'
      ]
    },
    {
      title: 'Computer Science Degree',
      company: 'University',
      period: '2018 - 2022',
      description: 'Studied Computer Science with focus on web technologies and software engineering.',
      achievements: [
        'GPA: 3.8/4.0',
        'Led University Coding Club',
        'Won Hackathon 2021'
      ],
      images: [
        '/images/about/university.jpg',
        '/images/about/coding-club.jpg',
        '/images/about/hackathon.jpg'
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
      <Container maxWidth="md">
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

        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Stepper orientation="vertical">
            {experiences.map((exp, index) => (
              <Step key={exp.title} active={true} expanded={true}>
                <StepLabel
                  StepIconComponent={() => (
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        backgroundColor: colors.primary,
                        boxShadow: `0 0 0 4px ${colors.primaryLight}`,
                      }}
                    />
                  )}
                >
                  <motion.div
                    variants={itemVariants}
                    custom={index}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: colors.textPrimary,
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: colors.primary,
                        fontWeight: 500,
                      }}
                    >
                      {exp.company} • {exp.period}
                    </Typography>
                  </motion.div>
                </StepLabel>
                <StepContent>
                  <motion.div variants={itemVariants}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        mt: 2,
                        mb: 4,
                        backgroundColor: colors.backgroundElevated,
                        border: `1px solid ${colors.borderPrimary}`,
                        borderRadius: 2,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: colors.textSecondary,
                          mb: 2,
                          lineHeight: 1.7,
                        }}
                      >
                        {exp.description}
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 3 }}>
                        {exp.achievements.map((achievement, i) => (
                          <Typography
                            key={i}
                            component="li"
                            variant="body1"
                            sx={{
                              color: colors.textSecondary,
                              mb: 1,
                              '&::marker': {
                                color: colors.primary,
                              },
                            }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Box>
                      <ImageCarousel images={exp.images} />
                    </Paper>
                  </motion.div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
