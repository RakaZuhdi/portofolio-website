import React from 'react';
import { Box, Typography, Container, Button, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import SelfPortrait from '../pictures/self-portrait.jpeg';
import EmptyAvatar from '../pictures/empty-avatar.jpg';

const Hero = () => {
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

  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
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
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          width: '50%',
          height: '50%',
          left: '-10%',
          bottom: '-10%',
          background: 'radial-gradient(circle, rgba(100,255,218,0.05) 0%, rgba(100,255,218,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    color: '#64ffda',
                    mb: 2,
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  Hi, my name is
                </Typography>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    color: '#fff',
                    mb: 2,
                  }}
                >
                  Muhammad Raka Zuhdi
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    color: '#8892b0',
                    mb: 3,
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.3,
                  }}
                >
                  Building digital experiences that inspire.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#8892b0',
                    mb: 5,
                    maxWidth: '540px',
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    opacity: 0.9
                  }}
                >
                  I'm a Full Stack Developer specializing in crafting exceptional digital experiences. 
                  Currently focused on building accessible, human-centered applications that solve real-world problems.
                </Typography>
              </motion.div>

              <Box
                component={motion.div}
                variants={itemVariants}
                sx={{ display: 'flex', gap: '1.5rem' }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    color: '#64ffda',
                    borderColor: '#64ffda',
                    padding: '0.8rem 2rem',
                    borderRadius: '4px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    borderWidth: '1.5px',
                    '&:hover': {
                      borderColor: '#64ffda',
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="text"
                  sx={{
                    color: '#8892b0',
                    padding: '0.8rem 2rem',
                    borderRadius: '4px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: 'rgba(136, 146, 176, 0.1)',
                      transform: 'translateY(-2px)',
                      color: '#64ffda',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <motion.div
              variants={itemVariants}
              style={{
                position: 'relative',
                padding: '20px'
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    width: '100%',
                    height: '100%',
                    border: '2px solid #64ffda',
                    borderRadius: '4px',
                    zIndex: 0,
                    transition: 'all 0.3s ease-in-out'
                  },
                  '&:hover::before': {
                    transform: 'translate(-10px, -10px)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '40px',
                    left: '40px',
                    width: '100%',
                    height: '100%',
                    border: '2px solid rgba(100,255,218,0.3)',
                    borderRadius: '4px',
                    zIndex: 0,
                    transition: 'all 0.3s ease-in-out'
                  },
                  '&:hover::after': {
                    transform: 'translate(-20px, -20px)',
                  }
                }}
              >
                <Box
                  component="img"
                  src={EmptyAvatar}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '450px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    filter: 'grayscale(30%)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 10px 30px -15px rgba(0,0,0,0.5)',
                    border: '1px solid rgba(100,255,218,0.2)',
                    backgroundColor: '#1a1a1a',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      transform: 'scale(1.02)',
                      boxShadow: '0 20px 40px -20px rgba(0,0,0,0.7)',
                      borderColor: 'rgba(100,255,218,0.4)'
                    }
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
