import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box sx={{ 
      backgroundColor: 'rgba(26, 26, 26, 0.95)',
      height: '100%',
      backdropFilter: 'blur(10px)',
      borderLeft: '1px solid rgba(100, 255, 218, 0.1)'
    }}>
      <List sx={{ pt: 2 }}>
        {pages.map((page) => (
          <ListItem 
            button 
            component={Link} 
            to={page.path}
            key={page.name}
            onClick={handleDrawerToggle}
            sx={{
              color: isActiveRoute(page.path) ? '#64ffda' : '#8892b0',
              my: 1,
              mx: 2,
              borderRadius: '12px',
              background: isActiveRoute(page.path) ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
              transition: 'all 0.3s ease',
              position: 'relative',
              '&:hover': {
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                transform: 'translateX(8px)',
              },
              ...(isActiveRoute(page.path) && {
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '40%',
                  height: '4px',
                  background: 'radial-gradient(circle at center, rgba(100, 255, 218, 0.8) 0%, rgba(100, 255, 218, 0) 70%)',
                  filter: 'blur(4px)',
                  animation: 'glow 1.5s ease-in-out infinite alternate',
                }
              })
            }}
          >
            <ListItemText 
              primary={page.name} 
              primaryTypographyProps={{
                sx: {
                  fontSize: '1.1rem',
                  fontWeight: isActiveRoute(page.path) ? 600 : 400,
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          background: 'rgba(26, 26, 26, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(100, 255, 218, 0.1)',
          '@keyframes glow': {
            '0%': {
              filter: 'blur(4px) brightness(1)',
            },
            '100%': {
              filter: 'blur(4px) brightness(1.5)',
            }
          }
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/"
            sx={{ 
              background: 'linear-gradient(90deg, #64ffda, #4db3a4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
              fontSize: '1.5rem',
              textDecoration: 'none',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              }
            }}
          >
            MRZ
          </Typography>
          {isMobile ? (
            <IconButton
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ 
                color: '#64ffda',
                border: '2px solid rgba(100, 255, 218, 0.2)',
                borderRadius: '12px',
                padding: '8px',
                '&:hover': {
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  borderColor: '#64ffda',
                },
                transition: 'all 0.3s ease'
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {pages.map((page) => (
                <Box
                  key={page.name}
                  sx={{
                    position: 'relative',
                    '&::after': isActiveRoute(page.path) ? {
                      content: '""',
                      position: 'absolute',
                      bottom: '-20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '80%',
                      height: '6px',
                      background: 'radial-gradient(circle at center, rgba(100, 255, 218, 0.8) 0%, rgba(100, 255, 218, 0) 70%)',
                      filter: 'blur(4px)',
                      animation: 'glow 1.5s ease-in-out infinite alternate',
                    } : {}
                  }}
                >
                  <Typography
                    component={Link}
                    to={page.path}
                    sx={{
                      color: isActiveRoute(page.path) ? '#64ffda' : '#8892b0',
                      textDecoration: 'none',
                      px: 3,
                      py: 1,
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: isActiveRoute(page.path) ? 600 : 500,
                      background: isActiveRoute(page.path) ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#64ffda',
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {page.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: '240px',
            backgroundColor: 'transparent',
          }
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxShadow: '-8px 0 32px rgba(0,0,0,0.3)',
          }
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar /> {/* Spacer for fixed AppBar */}
    </>
  );
};

export default Navbar;
