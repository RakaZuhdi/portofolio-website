import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ImageCarousel from './ImageCarousel';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Project data - in a real app, this would come from an API or database
  const projects = {
    'modern-portfolio': {
      title: 'Modern Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Material-UI. Features smooth animations and modern design trends.',
      longDescription: `This portfolio website showcases my work and skills through a modern, intuitive interface. 
      Built with React.js and Material-UI, it features smooth animations, responsive design, and a dark theme with 
      elegant accents. The site includes multiple sections such as About, Projects, and Contact, each designed to 
      provide visitors with a comprehensive view of my capabilities and experience.`,
      technologies: ['React', 'Material-UI', 'Framer Motion', 'React Router', 'Responsive Design'],
      features: [
        'Smooth page transitions and animations',
        'Responsive design for all devices',
        'Dark theme with modern aesthetics',
        'Interactive project showcases',
        'Contact form with validation',
        'Performance optimized images and assets'
      ],
      challenges: [
        'Implementing smooth animations while maintaining performance',
        'Creating a responsive design that works across all devices',
        'Optimizing image loading and performance',
        'Ensuring accessibility standards are met'
      ],
      images: [
        '/images/portfolio1.jpg',
        '/images/portfolio2.jpg',
        '/images/portfolio3.jpg',
        '/images/portfolio4.jpg'
      ],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://yourportfolio.com'
    },
    'ai-chatbot': {
      title: 'AI Chatbot Platform',
      description: 'An intelligent chatbot platform powered by machine learning, providing real-time customer support.',
      longDescription: `The AI Chatbot Platform is a sophisticated solution that leverages machine learning to provide 
      intelligent customer support. Built with Python and TensorFlow for the backend and React for the frontend, 
      it features real-time communication, natural language processing, and a seamless user interface.`,
      technologies: ['Python', 'TensorFlow', 'Node.js', 'WebSocket', 'React', 'MongoDB'],
      features: [
        'Real-time chat functionality',
        'Natural Language Processing',
        'Multi-language support',
        'Customizable responses',
        'Analytics dashboard',
        'Integration with popular platforms'
      ],
      challenges: [
        'Implementing real-time communication with WebSocket',
        'Training the ML model for accurate responses',
        'Handling multiple concurrent chat sessions',
        'Optimizing response times'
      ],
      images: [
        '/images/chatbot1.jpg',
        '/images/chatbot2.jpg',
        '/images/chatbot3.jpg',
        '/images/chatbot4.jpg'
      ],
      github: 'https://github.com/yourusername/ai-chatbot',
      demo: 'https://aichatbot-demo.com'
    },
    'e-commerce': {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management and secure payment processing.',
      longDescription: `This comprehensive e-commerce platform provides businesses with everything they need to run 
      their online store. Built with Next.js and MongoDB, it features real-time inventory management, secure payment 
      processing with Stripe, and AWS integration for scalable hosting and media storage.`,
      technologies: ['Next.js', 'MongoDB', 'Stripe', 'AWS', 'Redux', 'Node.js'],
      features: [
        'Real-time inventory management',
        'Secure payment processing',
        'User authentication and authorization',
        'Admin dashboard',
        'Order tracking system',
        'Product search and filtering'
      ],
      challenges: [
        'Implementing secure payment processing',
        'Managing real-time inventory updates',
        'Optimizing database queries for performance',
        'Building a responsive admin interface'
      ],
      images: [
        '/images/ecommerce1.jpg',
        '/images/ecommerce2.jpg',
        '/images/ecommerce3.jpg',
        '/images/ecommerce4.jpg'
      ],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://ecommerce-demo.com'
    }
  };

  const project = projects[id];

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

  if (!project) {
    return (
      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
      }}>
        <Typography variant="h4" sx={{ color: '#fff' }}>Sorry this page is still in development...</Typography>
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
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div variants={itemVariants}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/projects')}
            sx={{
              color: '#64ffda',
              mb: 4,
              '&:hover': {
                backgroundColor: 'rgba(100,255,218,0.1)',
              },
            }}
          >
            Back to Projects
          </Button>
        </motion.div>

        <Grid container spacing={6}>
          <Grid item xs={12} md={8}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  color: '#fff',
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 600,
                }}
              >
                {project.title}
              </Typography>

              <Typography
                sx={{
                  color: '#8892b0',
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                {project.longDescription}
              </Typography>

              <Box sx={{ mb: 6 }}>
                <ImageCarousel images={project.images} />
              </Box>

              <Typography
                variant="h5"
                sx={{
                  color: '#fff',
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                Key Features
              </Typography>
              <Box sx={{ mb: 4 }}>
                {project.features.map((feature, index) => (
                  <Typography
                    key={index}
                    sx={{
                      color: '#8892b0',
                      display: 'flex',
                      alignItems: 'center',
                      mb: 1,
                      '&::before': {
                        content: '"▹"',
                        color: '#64ffda',
                        marginRight: '8px',
                      },
                    }}
                  >
                    {feature}
                  </Typography>
                ))}
              </Box>

              <Typography
                variant="h5"
                sx={{
                  color: '#fff',
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                Technical Challenges
              </Typography>
              <Box sx={{ mb: 4 }}>
                {project.challenges.map((challenge, index) => (
                  <Typography
                    key={index}
                    sx={{
                      color: '#8892b0',
                      display: 'flex',
                      alignItems: 'center',
                      mb: 1,
                      '&::before': {
                        content: '"▹"',
                        color: '#64ffda',
                        marginRight: '8px',
                      },
                    }}
                  >
                    {challenge}
                  </Typography>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  backgroundColor: 'rgba(45, 45, 45, 0.5)',
                  borderRadius: '8px',
                  p: 3,
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
                    fontWeight: 600,
                  }}
                >
                  Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        color: '#64ffda',
                        borderRadius: '4px',
                        '&:hover': {
                          backgroundColor: 'rgba(100, 255, 218, 0.2)',
                        },
                      }}
                    />
                  ))}
                </Box>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                  <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#64ffda',
                      borderColor: '#64ffda',
                      '&:hover': {
                        borderColor: '#64ffda',
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      },
                    }}
                  >
                    View Code
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<LaunchIcon />}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: '#64ffda',
                      color: '#1a1a1a',
                      '&:hover': {
                        backgroundColor: '#4db3a4',
                      },
                    }}
                  >
                    Live Demo
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectDetail;
