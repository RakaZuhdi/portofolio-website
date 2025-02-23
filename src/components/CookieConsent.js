import React, { useState, useEffect } from 'react';
import { Snackbar, Button, Typography, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CookieIcon from '@mui/icons-material/Cookie';
import { motion, AnimatePresence } from 'framer-motion';
import useThemeColors from '../hooks/useThemeColors';

const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const colors = useThemeColors();

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show the popup after a short delay
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          sx={{ mb: 2 }}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 2,
                borderRadius: 2,
                backgroundColor: colors.backgroundElevated,
                border: `1px solid ${colors.primary}20`,
                boxShadow: `0 8px 32px ${colors.shadowPrimary}`,
                maxWidth: 440,
              }}
            >
              <CookieIcon 
                sx={{ 
                  color: colors.primary,
                  fontSize: 28 
                }} 
              />
              
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: colors.textPrimary,
                    fontWeight: 500,
                    mb: 0.5,
                  }}
                >
                  Please accept my cookie!
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: colors.textSecondary,
                    mb: 1.5,
                    pr: 2,
                  }}
                >
                  This website uses cookies to enhance your browsing experience and analyze site traffic.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={handleAccept}
                    sx={{
                      textTransform: 'none',
                      px: 2,
                      borderRadius: 1.5,
                      '&:hover': {
                        transform: 'translateY(-1px)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={handleClose}
                    sx={{
                      textTransform: 'none',
                      px: 2,
                      borderRadius: 1.5,
                      borderColor: `${colors.textSecondary}40`,
                      color: colors.textSecondary,
                      '&:hover': {
                        borderColor: colors.textSecondary,
                        backgroundColor: `${colors.textSecondary}10`,
                        transform: 'translateY(-1px)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Decline
                  </Button>
                </Box>
              </Box>

              <IconButton
                size="small"
                onClick={handleClose}
                sx={{
                  color: colors.textSecondary,
                  alignSelf: 'flex-start',
                  '&:hover': {
                    color: colors.textPrimary,
                  },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          </motion.div>
        </Snackbar>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
