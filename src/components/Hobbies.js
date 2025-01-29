import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import useThemeColors from '../hooks/useThemeColors';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CodeIcon from '@mui/icons-material/Code';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Hobbies = () => {
  const colors = useThemeColors();

  const hobbies = [
    {
      icon: <SportsEsportsIcon sx={{ fontSize: 40 }} />,
      title: 'Gaming',
      description: 'From strategy games to RPGs, I love immersing myself in virtual worlds and solving complex puzzles.',
      color: '#FF6B6B'
    },
    {
      icon: <MenuBookIcon sx={{ fontSize: 40 }} />,
      title: 'Reading',
      description: 'Tech blogs, sci-fi novels, and philosophy books - always expanding my knowledge and imagination.',
      color: '#4ECDC4'
    },
    {
      icon: <FlightTakeoffIcon sx={{ fontSize: 40 }} />,
      title: 'Traveling',
      description: 'Exploring new cultures, trying local cuisines, and capturing memories around the world.',
      color: '#45B7D1'
    },
    {
      icon: <MusicNoteIcon sx={{ fontSize: 40 }} />,
      title: 'Music',
      description: 'Playing guitar, discovering new genres, and creating playlists for every mood.',
      color: '#96CEB4'
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: 'Side Projects',
      description: 'Building fun apps and experimenting with new technologies in my free time.',
      color: '#FFD93D'
    },
    {
      icon: <CameraAltIcon sx={{ fontSize: 40 }} />,
      title: 'Photography',
      description: 'Capturing moments, street photography, and editing to tell visual stories.',
      color: '#FF9A8B'
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
          left: '-20%',
          bottom: '-20%',
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
            When I'm Not Coding
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
            My Hobbies & Interests
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {hobbies.map((hobby, index) => (
            <Grid item xs={12} sm={6} md={4} key={hobby.title}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: colors.backgroundElevated,
                    border: `1px solid ${colors.borderPrimary}`,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 24px ${colors.shadowPrimary}`,
                      '& .hobby-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 4,
                    }}
                  >
                    <Box
                      className="hobby-icon"
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: `${hobby.color}20`,
                        color: hobby.color,
                        mb: 3,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {hobby.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: colors.textPrimary,
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {hobby.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.textSecondary,
                        lineHeight: 1.6,
                      }}
                    >
                      {hobby.description}
                    </Typography>
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

export default Hobbies;
