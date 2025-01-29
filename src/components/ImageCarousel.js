import React, { useState } from 'react';
import { Box, MobileStepper, Button, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import CloseIcon from '@mui/icons-material/Close';

const ImageCarousel = ({ images }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', mb: 2 }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '250px',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: '#1a1a1a',
          border: '1px solid rgba(100,255,218,0.1)',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeStep}
            src={images[activeStep]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
            onClick={toggleZoom}
          />
        </AnimatePresence>
        <IconButton
          onClick={toggleZoom}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#64ffda',
            backgroundColor: 'rgba(26, 26, 26, 0.7)',
            '&:hover': {
              backgroundColor: 'rgba(26, 26, 26, 0.9)',
            },
          }}
        >
          <ZoomInIcon />
        </IconButton>
      </Box>

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          backgroundColor: 'transparent',
          padding: '8px 0',
          '& .MuiMobileStepper-dot': {
            backgroundColor: 'rgba(100,255,218,0.3)',
          },
          '& .MuiMobileStepper-dotActive': {
            backgroundColor: '#64ffda',
          },
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              color: '#64ffda',
              '&.Mui-disabled': {
                color: 'rgba(100,255,218,0.3)',
              },
            }}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              color: '#64ffda',
              '&.Mui-disabled': {
                color: 'rgba(100,255,218,0.3)',
              },
            }}
          >
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />

      {isZoomed && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1300,
          }}
          onClick={toggleZoom}
        >
          <IconButton
            onClick={toggleZoom}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              color: '#fff',
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={images[activeStep]}
            style={{
              maxWidth: '90%',
              maxHeight: '90vh',
              objectFit: 'contain',
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default ImageCarousel;
