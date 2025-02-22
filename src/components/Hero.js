import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import useThemeColors from '../hooks/useThemeColors';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Hero = () => {
  const colors = useThemeColors();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: colors.backgroundPrimary,
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '50%',
          height: '50%',
          background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '40%',
          height: '40%',
          background: `radial-gradient(circle, ${colors.primary}15 0%, transparent 70%)`,
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            textAlign: 'center',
            py: { xs: 8, md: 12 },
          }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                color: colors.textPrimary,
                mb: 2,
                letterSpacing: '-0.02em',
              }}
            >
              Muhammad Raka Zuhdi
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 500,
                color: colors.primary,
                mb: 4,
                letterSpacing: '0.02em',
              }}
            >
              Full Stack Developer
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: colors.textSecondary,
                maxWidth: '600px',
                mx: 'auto',
                mb: 6,
                lineHeight: 1.8,
              }}
            >
              Passionate about creating efficient and scalable applications.
              Specialized in full-stack development and computer vision solutions.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="outlined"
              onClick={() => navigate('/about')}
              sx={{
                borderColor: colors.primary,
                color: colors.primary,
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                fontSize: '1.1rem',
                textTransform: 'none',
                '&:hover': {
                  borderColor: colors.primary,
                  backgroundColor: `${colors.primary}10`,
                },
              }}
            >
              View My Journey
            </Button>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          color: colors.textSecondary,
          cursor: 'pointer',
          zIndex: 1,
        }}
      >
        <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
      </Box>
    </Box>
  );
};

export default Hero;
