import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Box, useMediaQuery, SwipeableDrawer, List, ListItem, ListItemText, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import useThemeColors from '../hooks/useThemeColors';

const Navbar = () => {
  const colors = useThemeColors();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Album', path: '/album' },
    { name: 'Projects', path: '/projects' },
    // { name: 'Hobbies', path: '/hobbies' },
    // { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        background: scrolled ? colors.backgroundElevated : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? `0 4px 20px ${colors.shadowPrimary}` : 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            position: 'relative',
            fontSize: '2rem',
            fontWeight: 700,
            background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryHover})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            visibility: (isMobile && location.pathname === '/') ? 'hidden' : 'visible',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              background: `radial-gradient(circle, ${colors.primaryLight} 0%, transparent 70%)`,
              opacity: 0.5,
              filter: 'blur(10px)',
              animation: 'glow 2s ease-in-out infinite alternate',
            },
            '@keyframes glow': {
              '0%': {
                opacity: 0.3,
                filter: 'blur(10px)',
              },
              '100%': {
                opacity: 0.7,
                filter: 'blur(15px)',
              },
            },
          }}
        >
          MRZ
        </Box>

        {isMobile ? (
          <Box sx={{ ml: 'auto' }}>
            <IconButton
              onClick={() => setIsOpen(true)}
              sx={{ color: colors.textPrimary }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', gap: 4 }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Box
                  component={Link}
                  to={item.path}
                  sx={{
                    color: isActive(item.path) ? colors.primary : colors.textSecondary,
                    textDecoration: 'none',
                    position: 'relative',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: colors.primary,
                    },
                    ...(isActive(item.path) && {
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100%',
                        height: '30px',
                        background: `radial-gradient(ellipse at center, ${colors.primary} 0%, transparent 80%)`,
                        opacity: 0.4,
                        filter: 'blur(5px)',
                        animation: 'lampLight 2s ease-in-out infinite alternate',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80%',
                        height: '4px',
                        background: colors.primary,
                        borderRadius: '4px',
                        opacity: 0.8,
                      },
                      '@keyframes lampLight': {
                        '0%': {
                          opacity: 0.4,
                          filter: 'blur(5px)',
                        },
                        '100%': {
                          opacity: 0.7,
                          filter: 'blur(8px)',
                        },
                      },
                    }),
                  }}
                >
                  {item.name}
                </Box>
              </motion.div>
            ))}
          </Box>
        )}

        <SwipeableDrawer
          anchor="right"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onOpen={() => setIsOpen(true)}
          sx={{
            '& .MuiDrawer-paper': {
              width: '100%',
              maxWidth: '300px',
              background: colors.backgroundSecondary,
              borderLeft: `1px solid ${colors.borderPrimary}`,
              display: 'flex',
              flexDirection: 'column',
              padding: '20px 0',
              boxShadow: `-10px 0 30px ${colors.shadowPrimary}`,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: 3,
              pb: 2,
              borderBottom: `1px solid ${colors.borderPrimary}`,
            }}
          >
            <Typography
              sx={{
                fontSize: '1.5rem',
                fontWeight: 600,
                background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryHover})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Menu
            </Typography>
            <IconButton
              onClick={() => setIsOpen(false)}
              sx={{
                color: colors.textPrimary,
                '&:hover': {
                  backgroundColor: colors.hover,
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ flex: 1, mt: 2 }}>
            <AnimatePresence>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ListItem
                    component={Link}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    sx={{
                      color: isActive(item.path) ? colors.primary : colors.textSecondary,
                      position: 'relative',
                      mx: 2,
                      my: 1,
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: colors.backgroundElevated,
                        transform: 'translateX(8px)',
                      },
                      ...(isActive(item.path) && {
                        backgroundColor: colors.backgroundElevated,
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: '-20px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '4px',
                          height: '50%',
                          background: `linear-gradient(to bottom, ${colors.primary}, ${colors.primaryHover})`,
                          borderRadius: '4px',
                        },
                      }),
                    }}
                  >
                    <ListItemText 
                      primary={item.name}
                      primaryTypographyProps={{
                        sx: {
                          fontWeight: isActive(item.path) ? 600 : 400,
                          fontSize: '1.1rem',
                        }
                      }}
                    />
                  </ListItem>
                </motion.div>
              ))}
            </AnimatePresence>
          </List>

          <Box
            sx={{
              p: 3,
              mt: 2,
              borderTop: `1px solid ${colors.borderPrimary}`,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: colors.textSecondary,
                mb: 2,
              }}
            >
              Let's work together
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              onClick={() => setIsOpen(false)}
              sx={{
                backgroundColor: colors.primary,
                color: colors.backgroundPrimary,
                px: 4,
                py: 1,
                borderRadius: '8px',
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: colors.primaryHover,
                },
              }}
            >
              Contact Me
            </Button>
          </Box>
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
