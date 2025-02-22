import React, { useState, useEffect } from 'react';
import { AppBar, Box, Container, IconButton, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation, useNavigate } from 'react-router-dom';
import useThemeColors from '../hooks/useThemeColors';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const colors = useThemeColors();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Experience & Education', path: '/about' },
    { name: 'Moments', path: '/album' },
    { name: 'Projects', path: '/projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <AppBar
      component={motion.div}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      position="fixed"
      sx={{
        background: scrolled ? colors.backgroundPrimary : 'transparent',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 2,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => navigate('/')}
              sx={{
                color: colors.textPrimary,
                fontSize: '1.2rem',
                fontWeight: 700,
                textTransform: 'none',
                letterSpacing: '-0.02em',
                '&:hover': {
                  background: 'transparent',
                  color: colors.primary,
                },
              }}
            >
              Raka
            </Button>
          </motion.div>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
            }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => navigate(item.path)}
                  sx={{
                    color: isActive(item.path) ? colors.primary : colors.textSecondary,
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    px: 2,
                    py: 1,
                    borderRadius: '8px',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: isActive(item.path) ? '100%' : '0%',
                      height: '2px',
                      backgroundColor: colors.primary,
                      transition: 'all 0.3s ease',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover': {
                      background: 'transparent',
                      color: colors.primary,
                      '&::after': {
                        width: '100%',
                      },
                    },
                  }}
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: 'none' },
              color: colors.textPrimary,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '300px',
            background: colors.backgroundPrimary,
            borderLeft: `1px solid ${colors.primary}20`,
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mb: 2,
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ color: colors.textPrimary }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            <AnimatePresence>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ListItem
                    button
                    onClick={() => {
                      navigate(item.path);
                      handleDrawerToggle();
                    }}
                    sx={{
                      mb: 1,
                      borderRadius: '8px',
                      backgroundColor: isActive(item.path) ? `${colors.primary}10` : 'transparent',
                      '&:hover': {
                        backgroundColor: `${colors.primary}20`,
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.name}
                      sx={{
                        color: isActive(item.path) ? colors.primary : colors.textSecondary,
                        '& .MuiListItemText-primary': {
                          fontSize: '1.1rem',
                          fontWeight: isActive(item.path) ? 600 : 500,
                        },
                      }}
                    />
                  </ListItem>
                </motion.div>
              ))}
            </AnimatePresence>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
