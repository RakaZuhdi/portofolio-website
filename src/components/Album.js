import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Modal, IconButton, Tabs, Tab } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import useThemeColors from '../hooks/useThemeColors';
import CloseIcon from '@mui/icons-material/Close';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const Album = () => {
  const colors = useThemeColors();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(null);

  const albums = [
    {
      title: 'Komune Studio Projects',
      description: 'Leading innovative solutions and mentoring team members',
      images: [
        {
          url: 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/random/5X5.JPG',
          caption: 'Team collaboration session on computer vision project',
          tags: ['Team Work', 'Computer Vision', 'Leadership']
        },
        {
          url: 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/random/5X5.JPG',
          caption: 'Presenting project results to stakeholders',
          tags: ['Presentation', 'Communication', 'Project Management']
        },
        {
          url: 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/random/5X5.JPG',
          caption: 'Working on CI/CD pipeline implementation',
          tags: ['DevOps', 'Automation', 'Infrastructure']
        }
      ]
    },
    {
      title: 'Frontend Development at Telkom',
      description: 'Creating responsive and user-friendly interfaces',
      images: [
        {
          url: 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/random/5X5.JPG',
          caption: 'Team planning session for new UI components',
          tags: ['UI/UX', 'Planning', 'Design']
        },
        {
          url: 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/random/5X5.JPG',
          caption: 'Code review and pair programming',
          tags: ['Code Review', 'Collaboration', 'Best Practices']
        },
        {
          url: 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/random/5X5.JPG',
          caption: 'Sprint retrospective meeting',
          tags: ['Agile', 'Team Building', 'Process Improvement']
        }
      ]
    },
    {
      title: 'University Achievements',
      description: 'Academic excellence and extracurricular activities',
      images: [
        {
          url: 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/random/5X5.JPG',
          caption: 'Graduation ceremony at Binus University',
          tags: ['Achievement', 'Education', 'Milestone']
        },
        {
          url: 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/random/5X5.JPG',
          caption: 'Winning hackathon presentation',
          tags: ['Competition', 'Innovation', 'Success']
        },
        {
          url: 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/random/5X5.JPG',
          caption: 'Leading the university coding club workshop',
          tags: ['Leadership', 'Teaching', 'Community']
        }
      ]
    }
  ];

  const handleNext = (e) => {
    e.stopPropagation();
    const currentAlbum = albums.find(album => 
      album.images.some(img => img.url === selectedImage?.url)
    );
    const currentIndex = currentAlbum.images.findIndex(img => img.url === selectedImage?.url);
    const nextImage = currentAlbum.images[(currentIndex + 1) % currentAlbum.images.length];
    setSelectedImage(nextImage);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const currentAlbum = albums.find(album => 
      album.images.some(img => img.url === selectedImage?.url)
    );
    const currentIndex = currentAlbum.images.findIndex(img => img.url === selectedImage?.url);
    const prevImage = currentAlbum.images[(currentIndex - 1 + currentAlbum.images.length) % currentAlbum.images.length];
    setSelectedImage(prevImage);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: colors.backgroundPrimary,
        pt: { xs: 8, md: 0 }, // Account for navbar
      }}
    >
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            backgroundColor: colors.backgroundPrimary,
            borderBottom: `1px solid ${colors.borderPrimary}`,
            pt: { xs: 2, md: 10 },
            pb: 2,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              sx={{
                color: colors.primary,
                fontWeight: 600,
                mb: 3,
                textAlign: 'center'
              }}
            >
              Journey Through Moments
            </Typography>

            <Tabs
              value={activeTab}
              onChange={(e, newValue) => setActiveTab(newValue)}
              variant="fullWidth"
              sx={{
                '& .MuiTab-root': {
                  color: colors.textSecondary,
                  '&.Mui-selected': {
                    color: colors.primary,
                  }
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: colors.primary,
                }
              }}
            >
              {albums.map((album, index) => (
                <Tab key={index} label={album.title} />
              ))}
            </Tabs>
          </Container>
        </Box>

        <Box
          sx={{
            flex: 1,
            overflow: 'auto',
            py: 4,
          }}
        >
          <Container maxWidth="lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: colors.textSecondary,
                    mb: 4,
                    textAlign: 'center',
                    fontStyle: 'italic'
                  }}
                >
                  {albums[activeTab].description}
                </Typography>
                <Grid container spacing={3}>
                  {albums[activeTab].images.map((image, imageIndex) => (
                    <Grid item xs={12} sm={6} md={4} key={imageIndex}>
                      <motion.div variants={itemVariants}>
                        <Paper
                          component={motion.div}
                          whileHover={{ scale: 1.02 }}
                          onHoverStart={() => setHoveredImage(image)}
                          onHoverEnd={() => setHoveredImage(null)}
                          sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            backgroundColor: colors.backgroundElevated,
                            borderRadius: 2,
                            border: `1px solid ${colors.borderPrimary}`,
                            transition: 'all 0.3s ease',
                            height: '100%',
                          }}
                        >
                          <Box
                            sx={{
                              position: 'relative',
                              paddingTop: '75%',
                              overflow: 'hidden',
                            }}
                            onClick={() => setSelectedImage(image)}
                          >
                            <img
                              src={image.url}
                              alt={image.caption}
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.3s ease',
                              }}
                            />
                            <Box
                              sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: hoveredImage === image ? 'rgba(0,0,0,0.3)' : 'transparent',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {hoveredImage === image && (
                                <ZoomInIcon
                                  sx={{
                                    color: '#fff',
                                    fontSize: '2rem',
                                    opacity: 0.8,
                                  }}
                                />
                              )}
                            </Box>
                          </Box>
                          <Box sx={{ p: 2 }}>
                            <Typography
                              variant="body2"
                              sx={{
                                color: colors.textPrimary,
                                fontWeight: 500,
                                mb: 1,
                              }}
                            >
                              {image.caption}
                            </Typography>
                            <Box
                              sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 0.5,
                              }}
                            >
                              {image.tags.map((tag, tagIndex) => (
                                <Typography
                                  key={tagIndex}
                                  variant="caption"
                                  sx={{
                                    color: colors.primary,
                                    backgroundColor: `${colors.primary}15`,
                                    px: 1,
                                    py: 0.25,
                                    borderRadius: 1,
                                    fontSize: '0.7rem',
                                  }}
                                >
                                  {tag}
                                </Typography>
                              ))}
                            </Box>
                          </Box>
                        </Paper>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </AnimatePresence>
          </Container>
        </Box>
      </Box>

      <Modal
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
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
            onClick={() => setSelectedImage(null)}
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
              borderRadius: 2,
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                position: 'absolute',
                left: 16,
                backgroundColor: `${colors.backgroundPrimary}dd`,
                backdropFilter: 'blur(4px)',
                '&:hover': {
                  backgroundColor: colors.backgroundPrimary,
                },
              }}
            >
              <NavigateBeforeIcon sx={{ color: colors.textPrimary }} />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: 16,
                backgroundColor: `${colors.backgroundPrimary}dd`,
                backdropFilter: 'blur(4px)',
                '&:hover': {
                  backgroundColor: colors.backgroundPrimary,
                },
              }}
            >
              <NavigateNextIcon sx={{ color: colors.textPrimary }} />
            </IconButton>
            <img
              src={selectedImage?.url}
              alt={selectedImage?.caption}
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
                p: 3,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: '#fff',
                  textAlign: 'center',
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                {selectedImage?.caption}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: 1,
                }}
              >
                {selectedImage?.tags.map((tag, index) => (
                  <Typography
                    key={index}
                    variant="caption"
                    sx={{
                      color: '#fff',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    {tag}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Album;
