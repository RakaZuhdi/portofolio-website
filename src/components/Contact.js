import React from 'react';
import { Container, Typography, Box, TextField, Button, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: '#1a1a1a',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '50%',
          height: '50%',
          left: '-10%',
          bottom: '-10%',
          background: 'radial-gradient(circle, rgba(100,255,218,0.05) 0%, rgba(100,255,218,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: 'white',
              marginBottom: 2,
              textAlign: 'center',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              background: 'linear-gradient(90deg, #fff 0%, #8892b0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))'
            }}
          >
            Get In Touch
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#8892b0',
              marginBottom: 6,
              textAlign: 'center',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}
          >
            I'm currently open for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(45, 45, 45, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(100,255,218,0.1)',
              borderRadius: '24px',
              padding: { xs: 3, md: 6 },
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.2)',
            }}
          >
            <Box
              component="form"
              noValidate
              sx={{
                '& .MuiTextField-root': {
                  mb: 3,
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(100,255,218,0.2)',
                    borderRadius: '12px',
                  },
                  '&:hover fieldset': {
                    borderColor: '#64ffda',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#64ffda',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#8892b0',
                },
                '& .MuiOutlinedInput-input': {
                  color: 'white',
                },
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Name"
                    name="name"
                    autoComplete="name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Subject"
                    name="subject"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 4,
                  backgroundColor: '#64ffda',
                  color: '#1a1a1a',
                  padding: '12px',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 4px 14px 0 rgba(100,255,218,0.39)',
                  '&:hover': {
                    backgroundColor: '#4db3a4',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px 0 rgba(100,255,218,0.39)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              mt: 6,
            }}
          >
            <IconButton
              href="#"
              target="_blank"
              sx={{
                color: '#64ffda',
                border: '2px solid #64ffda',
                padding: '12px',
                '&:hover': {
                  backgroundColor: 'rgba(100,255,218,0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <GitHubIcon sx={{ fontSize: 28 }} />
            </IconButton>
            <IconButton
              href="#"
              target="_blank"
              sx={{
                color: '#64ffda',
                border: '2px solid #64ffda',
                padding: '12px',
                '&:hover': {
                  backgroundColor: 'rgba(100,255,218,0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <LinkedInIcon sx={{ fontSize: 28 }} />
            </IconButton>
            <IconButton
              href="mailto:your.email@example.com"
              sx={{
                color: '#64ffda',
                border: '2px solid #64ffda',
                padding: '12px',
                '&:hover': {
                  backgroundColor: 'rgba(100,255,218,0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <EmailIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
