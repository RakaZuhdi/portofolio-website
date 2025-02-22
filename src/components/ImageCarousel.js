import React, { useState, useEffect, useCallback } from 'react';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import useThemeColors from '../hooks/useThemeColors';

const ImageCarousel = ({ images }) => {
  const colors = useThemeColors();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleZoom = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
    setIsPaused(true);
  };

  useEffect(() => {
    if (!isPaused && images.length > 1) {
      const timer = setInterval(() => {
        handleNext();
      }, 20000); // Change image every 5 seconds

      return () => clearInterval(timer);
    }
  }, [handleNext, isPaused, images.length]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '400px',
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: colors.backgroundElevated,
          border: `1px solid ${colors.borderPrimary}`,
          mb: 3,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.backgroundElevated,
              }}
            >
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].description}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  padding: '40px 20px 20px',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: '#fff',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    fontWeight: 500,
                  }}
                >
                  {images[currentIndex].description}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <IconButton
              onClick={handlePrev}
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: `${colors.backgroundPrimary}dd`,
                backdropFilter: 'blur(4px)',
                zIndex: 2,
                '&:hover': {
                  backgroundColor: colors.backgroundPrimary,
                },
              }}
            >
              <ChevronLeftIcon sx={{ color: colors.textPrimary }} />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: `${colors.backgroundPrimary}dd`,
                backdropFilter: 'blur(4px)',
                zIndex: 2,
                '&:hover': {
                  backgroundColor: colors.backgroundPrimary,
                },
              }}
            >
              <ChevronRightIcon sx={{ color: colors.textPrimary }} />
            </IconButton>
          </>
        )}

        <IconButton
          onClick={handleZoom}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            backgroundColor: `${colors.backgroundPrimary}dd`,
            backdropFilter: 'blur(4px)',
            zIndex: 2,
            '&:hover': {
              backgroundColor: colors.backgroundPrimary,
            },
          }}
        >
          <ZoomInIcon sx={{ color: colors.textPrimary }} />
        </IconButton>
      </Box>

      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setIsPaused(false);
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '90vw',
            height: '90vh',
            backgroundColor: 'transparent',
          }}
        >
          <IconButton
            onClick={() => {
              setIsModalOpen(false);
              setIsPaused(false);
            }}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              zIndex: 2,
              backgroundColor: `${colors.backgroundPrimary}dd`,
              backdropFilter: 'blur(4px)',
              '&:hover': {
                backgroundColor: colors.backgroundPrimary,
              },
            }}
          >
            <CloseIcon sx={{ color: colors.textPrimary }} />
          </IconButton>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.backgroundElevated,
            }}
          >
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].description}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                padding: '40px 20px 20px',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: '#fff',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  fontWeight: 500,
                }}
              >
                {images[currentIndex].description}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ImageCarousel;
