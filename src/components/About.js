import React from 'react';
import { Box, Container, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Stepper, Step, StepLabel, StepContent, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ImageCarousel from './ImageCarousel';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const timelineSteps = [
    {
      label: 'Bachelor in Computer Science',
      date: '2018 - 2022',
      icon: <SchoolIcon />,
      description: `During my time at the University of Indonesia, I discovered my passion for software development. 
      I specialized in web technologies and artificial intelligence, maintaining a strong academic record while 
      participating in various hackathons and coding competitions. Key achievements include:`,
      highlights: [
        'Led a team of 4 in developing a machine learning-based health monitoring system',
        'Won first place in the University Hackathon 2021',
        'Published a research paper on AI applications in healthcare',
        'Served as president of the Computer Science Student Association'
      ],
      images: [
        '/images/university1.jpg',
        '/images/university2.jpg',
        '/images/hackathon1.jpg',
        '/images/research1.jpg'
      ]
    },
    {
      label: 'Software Engineering Intern',
      date: 'Summer 2021',
      icon: <RocketLaunchIcon />,
      description: `Completed an intensive internship at a leading tech startup, where I gained hands-on experience 
      with modern development practices and contributed to real-world projects. Key responsibilities included:`,
      highlights: [
        'Developed and maintained RESTful APIs using Node.js and Express',
        'Implemented new features in the company\'s React-based dashboard',
        'Collaborated with senior developers on optimizing database queries',
        'Participated in daily stand-ups and agile development processes'
      ],
      images: [
        '/images/internship1.jpg',
        '/images/internship2.jpg',
        '/images/project1.jpg'
      ]
    },
    {
      label: 'Junior Full Stack Developer',
      date: '2022 - 2023',
      icon: <LightbulbIcon />,
      description: `Started my professional journey at an innovative tech company, where I quickly grew from a junior 
      developer to taking on more responsibilities. Notable achievements include:`,
      highlights: [
        'Architected and implemented a new microservice using Node.js and MongoDB',
        'Reduced API response times by 40% through optimization',
        'Mentored two intern developers',
        'Led the migration of legacy systems to modern React architecture'
      ],
      images: [
        '/images/junior1.jpg',
        '/images/junior2.jpg',
        '/images/project2.jpg',
        '/images/team1.jpg'
      ]
    },
    {
      label: 'Senior Full Stack Developer',
      date: '2023 - Present',
      icon: <StarIcon />,
      description: `Currently working as a Senior Full Stack Developer, leading technical initiatives and mentoring 
      junior developers. Key responsibilities and achievements:`,
      highlights: [
        'Lead a team of 6 developers across multiple projects',
        'Architected and implemented cloud-native solutions using AWS',
        'Introduced automated testing practices, achieving 90% code coverage',
        'Spearheaded the adoption of TypeScript across all new projects'
      ],
      images: [
        '/images/senior1.jpg',
        '/images/senior2.jpg',
        '/images/team2.jpg',
        '/images/project3.jpg'
      ]
    }
  ];

  const skills = [
    'JavaScript (ES6+)',
    'React.js',
    'Node.js',
    'Python',
    'TypeScript',
    'GraphQL',
    'MongoDB',
    'PostgreSQL',
    'AWS',
    'Docker'
  ];

  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
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
          background: 'radial-gradient(circle, rgba(100,255,218,0.1) 0%, rgba(100,255,218,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  color: '#fff',
                  mb: 4,
                  fontWeight: 600,
                  textAlign: 'center',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                My Journey
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div variants={itemVariants}>
              <Stepper orientation="vertical" sx={{
                '.MuiStepLabel-label': {
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '1.2rem',
                },
                '.MuiStepLabel-label.Mui-active': {
                  color: '#64ffda',
                },
                '.MuiStepIcon-root': {
                  color: '#2d2d2d',
                  border: '2px solid #64ffda',
                  borderRadius: '50%',
                },
                '.MuiStepIcon-root.Mui-active': {
                  color: '#64ffda',
                },
                '.MuiStepIcon-root.Mui-completed': {
                  color: '#64ffda',
                },
                '.MuiStepConnector-line': {
                  borderColor: 'rgba(100,255,218,0.2)',
                },
              }}>
                {timelineSteps.map((step, index) => (
                  <Step key={step.label} active={true}>
                    <StepLabel
                      icon={step.icon}
                      optional={
                        <Typography variant="caption" sx={{ color: '#8892b0' }}>
                          {step.date}
                        </Typography>
                      }
                    >
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ color: '#8892b0', mb: 2 }}>
                          {step.description}
                        </Typography>
                        <ImageCarousel images={step.images} />
                        <List>
                          {step.highlights.map((highlight, i) => (
                            <ListItem key={i} sx={{ color: '#8892b0', py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: '32px' }}>
                                <Typography sx={{ color: '#64ffda' }}>▹</Typography>
                              </ListItemIcon>
                              <ListItemText primary={highlight} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  backgroundColor: 'rgba(45, 45, 45, 0.5)',
                  borderRadius: '8px',
                  p: 4,
                  border: '1px solid rgba(100,255,218,0.1)',
                  backdropFilter: 'blur(10px)',
                  position: 'sticky',
                  top: '100px',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#fff',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <CodeIcon sx={{ color: '#64ffda' }} />
                  Technical Skills
                </Typography>
                <Grid container spacing={2}>
                  {skills.map((skill, index) => (
                    <Grid item xs={6} key={index}>
                      <Typography
                        sx={{
                          color: '#8892b0',
                          fontSize: '0.9rem',
                          display: 'flex',
                          alignItems: 'center',
                          '&::before': {
                            content: '"▹"',
                            color: '#64ffda',
                            marginRight: '8px',
                          },
                        }}
                      >
                        {skill}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
