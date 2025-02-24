import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Button, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useThemeColors from '../hooks/useThemeColors';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const colors = useThemeColors();

  // Project data - in a real app, this would come from an API or database
  const projects = {
    'containerized-IEC60870-5-104-server-application-for-smart-grid-cluster-controller': {
      title: 'Containerized IEC60870-5-104 Server Application for Smart Grid Cluster Controller',
      description: 'Containerized IEC60870-5-104 Server Application for Smart Grid Cluster Controller',
      longDescription: [
          "The advancement of smart grids requires efficient, real-time communication between power systems and control centers. This thesis develops a containerized IEC 60870-5-104 server application to enhance data exchange between Smart Grid Cluster Controllers (SGCCs) and SCADA systems. Initially started as an internship, the project evolved into a bachelor's thesis, addressing challenges in real-time monitoring, interoperability, and automation.",
          'Using Docker, Node-RED, InfluxDB, and ArangoDB, the system ensures scalability, modularity, and easy deployment. It leverages IEC 60870-5-104, a standard protocol for power grid communication, utilizing Application Service Data Units (ASDUs) to structure messages. The system implements three key ASDU types: Measured Short Value ASDU (Type 36) for real-time sensor data, Single Command ASDU (Type 45) for simple on/off controls, and Double Command ASDU (Type 46) for multi-state operations.',
          'The research implements three key ASDU types to facilitate efficient communication. Measured Short Value ASDU (Type 36) is used to send real-time measurement data, such as voltage, current, and power levels, from SGCCs to the control room, enabling continuous monitoring of the power grid. Single Command ASDU (Type 45) allows the control center to send binary on/off commands to remote devices, such as circuit breakers or alarms, ensuring immediate execution of control actions. Meanwhile, Double Command ASDU (Type 46) enables more complex multi-state operations, such as adjusting power regulators or voltage controllers, which require finer control rather than just switching between two states.',
          'Each ASDU carries essential metadata to ensure structured and efficient communication. The Cause of Transmission (COT) field specifies the reason for sending a message, such as a periodic update or an event trigger. The Common Address (CA) identifies the SGCC associated with the data, while the Information Object Address (IOA) pinpoints the exact device or measurement being referenced. These structured elements enable precise and reliable data exchange between the control center and SGCCs, ensuring seamless grid operation.',
          'The server--JSON IEC Server leverages the lib60870-C library to handle IEC 104 message transmission. When the server receives a JSON object, it translates it into an ASDU and sends it over the IEC 104 protocol. Conversely, when it receives an ASDU, it converts it back into a JSON object that can be processed by Node-RED. This design enables seamless integration with modern web-based applications and monitoring systems, eliminating the need for direct IEC 104 message handling at the application level.',
          'The JSON IEC Server plays a crucial role in translating between JSON objects and IEC 60870-5-104 ASDUs (Application Service Data Units) for seamless communication between Smart Grid Cluster Controllers (SGCCs) and SCADA systems. This server, built using the json-iec104-server implementation, acts as a bridge that converts JSON-formatted data into IEC 104 ASDUs and vice versa, allowing for efficient data exchange in modern smart grid systems.'
      ],
      technologies: ['Node-RED', 'Docker', 'InfluxDB', 'ArangoDB', 'json-iec104-server', 'lib60870-C', 'C Programming Language', 'Linux', 'WINPP104', 'Visual Studio Code', 'PuTTY'],
      features: [
        'Real-time data exchange using IEC 60870-5-104 protocol',
        'Containerized architecture for easy deployment and scalability',
        'Integration with Node-RED for flow-based automation',
        'Storage and retrieval of measurement data using InfluxDB',
        'Hierarchical data management with ArangoDB',
        'Translation of JSON objects to and from ASDUs using json-iec104-server',
        'Support for Short Measured Value, Single Command, and Double Command ASDUs',
        'Automated alert system for threshold-based monitoring',
        'SCADA system interoperability using lib60870-C',
        'Remote device control through Single and Double Command ASDUs',
        'Docker-based microservices architecture',
        'Logging and monitoring of IEC 104 messages for debugging and analysis'
      ],
      // images: [
      //   'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/ar1.jpg',
      //   'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/ar2.jpg'
      // ],
      links: [
        { title: 'Thesis Work', url: 'https://drive.google.com/file/d/1I4C9vRYLjv_XWQruDRB3_t4Dkosu85_3/view?usp=sharing', icon: '' },
        { title: 'View Documentation', url: 'https://drive.google.com/file/d/1St2ZE7_SabTLQmZXis-SZEIsKWoNTtzY/view?usp=sharing', icon: 'demo' }
      ],
      github: 'https://github.com/rakaprsdhkra/sgcc',
      demo: 'https://drive.google.com/file/d/1I4C9vRYLjv_XWQruDRB3_t4Dkosu85_3/view?usp=sharing'
    },
    'portfolio': {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my work and skills.',
      longDescription: [
        'Designed and developed a personal portfolio website using React and Material-UI, focusing on creating a clean, modern interface that effectively showcases my work and skills.',
        'Implemented responsive layouts and smooth animations using Framer Motion to enhance the user experience. The website features a dark mode theme and optimized performance for fast loading times.',
        'Utilized AWS S3 for reliable and scalable image hosting, ensuring optimal delivery of visual content across all devices and network conditions.'
      ],
      technologies: [
          'React', 'Material-UI', 'Framer Motion', 'AWS S3', 'React Router'],
      features: [
        'Responsive design for all devices',
        'Dark mode support',
        'Smooth page transitions',
        'Project showcase with detailed views',
        'Optimized image loading'
      ],
      images: [
        'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/portfolio1.jpg',
        'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/portfolio2.jpg'
      ],
      links: [
        { title: 'GitHub Repository', url: 'https://github.com/rakaprsdhkra/portfolio', icon: 'github' },
        { title: 'Live Demo', url: 'https://your-portfolio-url.com', icon: 'demo' }
      ],
      github: 'https://github.com/rakaprsdhkra/portfolio',
      demo: 'https://your-portfolio-url.com'
    },
    'dashboard-video-analytic-G20': {
      title: 'Dashboard Video Analytic G20',
      description: 'Developed an AI-powered surveillance dashboard to monitor and analyze security footage for the G20 event in Bali.',
      longDescription: [
          "My team at Komune Studio using Nodeflux's dataset, we developed an advanced video analytics dashboard to enhance surveillance and security monitoring for the G20 event in Nusa Dua, Bali. The system integrated AI-driven analytics to process real-time video feeds, ensuring efficient security operations for Divtik Polri--Indonesia National Police's IT Division.",
          'In our Computer Vision Surveillance training, we focused on building and deploying AI-driven solutions for face recognition, people counting, vehicle tracking, and license plate recognition. We started by understanding the evolution of AI, from rule-based systems to machine learning and deep learning, and applied this knowledge to real-world surveillance applications. Our team worked extensively with Convolutional Neural Networks (CNNs) and advanced object detection techniques like YOLO and Faster R-CNN to improve accuracy in detecting and identifying faces, vehicles, and crowds in various environments.',
          'For face recognition, we implemented a pipeline that included face detection, feature extraction, and identification. We trained deep learning models to convert facial features into numerical embeddings, allowing us to verify and identify individuals with high accuracy. We addressed key challenges such as variations in lighting, angles, occlusions, and identical faces, improving our model’s robustness. To optimize performance, we tested our models using benchmarks like Top-1 Accuracy, True Positive Rate (TPR), and False Negative Identification Rate (FNIR). Our latest models achieved 98.9% verification accuracy and were tested on large-scale datasets.',
          'Beyond facial recognition, we developed people counting and crowd estimation models, which are essential for security and public event management. We designed algorithms capable of detecting individuals in low to high-density crowds, using heatmap visualization and head detection methods. Our models achieved 91% accuracy in surveillance environments and 88% in medium-density settings, with an MAE (Mean Absolute Error) of 15.51 for low-density and 14 for high-density crowds. These solutions are valuable for monitoring foot traffic in public spaces, event security, and emergency response planning.',
          'In the domain of vehicle tracking, we integrated vehicle detection, classification, and counting to provide structured insights into traffic patterns. Our system was trained to distinguish between cars, buses, trucks, and motorcycles in different environments such as highways, aerial views, and city streets. Our license plate recognition (LPR) system used OCR-based text detection and character recognition to accurately extract plate numbers, even under challenging conditions like low-light, motion blur, and varied camera angles. Our LPR model achieved 89% accuracy with a character error rate (CER) of only 2%, ensuring high reliability in real-world applications.',
          'To further enhance our AI models, we adopted GAN-based data augmentation to improve facial recognition across diverse demographics and Face Image Quality Assessment (FIQA) to ensure high-quality image inputs. Additionally, we explored hybrid analytics to optimize bandwidth usage and computational costs, making our solutions more scalable. One of our most significant achievements was deploying the AI-powered face recognition system at the G20 Summit in Bali 2022, where our technology played a crucial role in identifying and verifying attendees in real-time footage using RTSP from the CCTVs spread around the event area, ensuring high security for the event.',
          'Through this project, we gained valuable hands-on experience in AI-powered surveillance, deep learning model deployment, and real-world security applications. Our work has demonstrated the potential of computer vision in enhancing public safety, optimizing traffic management, and improving law enforcement efficiency, paving the way for future advancements in AI-driven security solutions.'
      ],
      links: [
        { title: 'Video Demo', url: 'https://www.google.com/search?q=g20+command+center&sca_esv=b62d27502791017a&sxsrf=AHTn8zr7QnIx3XHdN1GSZ1uZsD_Dit92yw%3A1740325436208&ei=PEK7Z4e5DJKqseMP1qTliAw&oq=g20+&gs_lp=Egxnd3Mtd2l6LXNlcnAiBGcyMCAqAggAMgQQIxgnMgQQIxgnMgoQABiABBhDGIoFMg4QABiABBiRAhixAxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBUiTFVC-BlibC3ADeACQAQCYAaABoAGdA6oBAzMuMbgBA8gBAPgBAZgCB6ACzwPCAggQABiwAxjvBcICChAjGIAEGCcYigXCAgsQABiABBiRAhiKBcICEBAAGIAEGLEDGEMYgwEYigXCAg0QABiABBixAxhDGIoFwgITEC4YgAQYsQMY0QMYQxjHARiKBZgDAIgGAZAGBZIHAzUuMqAH7CM&sclient=gws-wiz-serp#fpstate=ive&vld=cid:8f836656,vid:GjiAZLNAGC0,st:0',
          icon: 'video' },
      ],
      images: [
          'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/G20/Screenshot+2025-02-23+at+23.07.16.png',
          'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/G20/Screenshot+2025-02-23+at+22.49.09.png',
          'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/G20/Screenshot+2025-02-23+at+22.49.16.png',
          'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/G20/Screenshot+2025-02-23+at+22.49.22.png',
          'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/G20/Screenshot+2025-02-23+at+22.49.28.png',
          'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/G20/Screenshot+2025-02-23+at+22.49.43.png',
          'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/G20/Screenshot+2025-02-23+at+22.49.52.png',
          'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/G20/Screenshot+2025-02-23+at+22.50.00.png',
          'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/G20/Screenshot+2025-02-23+at+22.50.07.png'
      ],
      technologies: [
          "ReactJS",
          "Node.js",
          "PostgreSQL",
          "Python",
          "OpenCV",
          "TensorFlow",
          "PyTorch",
          "YOLO (You Only Look Once)",
          "Convolutional Neural Networks (CNN)",
          "Deep Neural Networks (DNN)",
          "Scikit-learn",
          "NumPy",
          "Pandas",
          "Matplotlib",
          "Albumentations (Image Augmentation)",
          "CUDA & cuDNN (GPU Acceleration)",
          "Flask/FastAPI (AI Model Deployment)",
          "Docker (Containerized AI Deployments)"
      ],
      features: ['Face Recognition',
        'Face Detection',
        'Feature Extraction',
        '1:1 Face Verification',
        '1:N Face Identification',
        'People Counting',
        'Crowd Estimation',
        'Vehicle Detection',
        'Vehicle Classification',
        'Vehicle Counting',
        'License Plate Recognition (LPR)',
        'OCR-based Text Detection',
        'Real-time Object Detection',
        'Deep Learning-based Feature Learning',
        'Heatmap Visualization for Crowd Density',
        'GAN-based Data Augmentation',
        'Face Image Quality Assessment (FIQA)',
        'Hybrid Analytics for Performance Optimization',
        'Low-light and Angle Tolerant Detection',
        'Edge Detection and Image Preprocessing',
        'AI-based Event Security Monitoring',
        'High-accuracy Model Performance Metrics (mAP, TPR, FNIR)',
        'Scalability for Large-scale Surveillance']

    },
      'patjarmerah': {
          title: 'Patjarmerah: Homepage, Mobile Apps, and Admin Dashboard Development',
          longDescription: [
              'My team at Komune Studio developed a mobile application and website dashboard for Patjarmerah, a literacy festival and book market held across Indonesia. The platform streamlined participant registration and event management, achieving over 10,000 app downloads.'
          ],
          images: [
              'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/Patjar+Merah/Screenshot+2025-02-24+at+12.57.47.png',
              'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/Patjar+Merah/Screenshot+2025-02-24+at+12.59.16.png',
              'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/Patjar+Merah/Screenshot+2025-02-24+at+12.58.22.png',
              'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/Patjar+Merah/Screenshot+2025-02-24+at+12.44.09.png',
              'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/Patjar+Merah/Screenshot+2025-02-24+at+12.44.23.png',
              'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/Patjar+Merah/Screenshot+2025-02-24+at+12.43.37.png',
              'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/Patjar+Merah/Screenshot+2025-02-24+at+12.44.38.png',
              'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/Patjar+Merah/Screenshot+2025-02-24+at+12.44.53.png',
              'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/Patjar+Merah/Screenshot+2025-02-24+at+12.45.06.png',
          ],
          links: [
              {
                  title: 'Website',
                  url: 'https://patjarmerah.com',
                  icon: 'video'
              },
          ],
          technologies: ['ReactJS', 'NodeJS', 'React Native', 'MySQL'],
          features: ['Participant Registration System', 'Event Schedule Management', 'Mobile App for Users', 'Admin Dashboard for Event Management', 'User Authentication and Login', 'Push Notifications', 'Ticketing and QR Code Integration', 'Content Management System (CMS)', 'Multilingual Support', 'Analytics and Reporting']
      },
      'dashboard-surveillance-system-for-beacukai': {
          title: 'Dirjen Bea Cukai (Customs Directorate General) at Soekarno-Hatta Airport',
          longDescription: [
              'My team at Komune Studio designed and implemented a surveillance dashboard at Soekarno-Hatta International Airport. This system helped customs officials monitor and identify arriving passengers and automatically alert the officials for wanted passengers, enhancing border security measures.',
              'This project used the same AI-powered surveillance system as the one the Dashboard Video Analytic G20. Please open the link to refer to the project.'
          ],
          images: [
              'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/Bea+Cukai/Screenshot+2025-02-24+at+19.06.19.png',
              'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/Bea+Cukai/Bea+Cukai/Screenshot+2025-02-24+at+19.19.37.png',
              'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/Bea+Cukai/Bea+Cukai/Screenshot+2025-02-24+at+19.19.37.png',
              'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/Bea+Cukai/Bea+Cukai/Screenshot+2025-02-24+at+19.19.58.png',
              'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/Bea+Cukai/Bea+Cukai/Screenshot+2025-02-24+at+19.20.07.png'
          ],
          links: [
              {
                  title: 'Dashboard Video Analytic for G20',
                  url: 'https://portfolio.rakazuhdi.com/projects/dashboard-video-analytic-G20',
                  icon: 'video'
              },
          ],
          technologies: ['ReactJS', 'NodeJS', 'React Native', 'MySQL'],
          features:
              [
                  "Real-time Surveillance Monitoring",
                  "Facial Recognition Integration",
                  "Automated Passenger Screening",
                  "Alert System for Suspicious Activity",
                  "Multi-Camera Integration",
                  "Data Logging and Analytics",
              ]
      }
  };

  const project = projects[id];

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
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  if (!project) {
    return (
      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundPrimary,
      }}>
        <Typography variant="h4" sx={{ color: colors.textPrimary }}>
          Project not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      sx={{
        minHeight: '100vh',
        backgroundColor: colors.backgroundPrimary,
        pt: { xs: 10, md: 12 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <motion.div variants={itemVariants}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/projects')}
            sx={{
              color: colors.primary,
              mb: 4,
              '&:hover': {
                backgroundColor: `${colors.primary}10`,
              },
            }}
          >
            Back to Projects
          </Button>
        </motion.div>

        <Grid container spacing={4}>
          {/* Left Column - Project Info */}
          <Grid item xs={12} md={project?.images ? 7 : 12}>
            <motion.div variants={itemVariants}>

              <Typography
                variant="h2"
                sx={{
                  color: colors.textPrimary,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                }}
              >
                {project.title}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 6 }}>
                {project?.links?.map((link, index) => (
                    <Button
                        key={index}
                        variant="outlined"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={link.icon === 'github' ? <GitHubIcon /> : <OpenInNewIcon />}
                        sx={{
                          borderColor: `${colors.primary}40`,
                          color: colors.primary,
                          '&:hover': {
                            borderColor: colors.primary,
                            backgroundColor: `${colors.primary}10`,
                          },
                        }}
                    >
                      {link.title}
                    </Button>
                ))}
              </Box>
              <Box sx={{ maxWidth: project?.images ? '800px' : '100%', mx: 'auto', mb: 6 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: colors.textSecondary,
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  {project?.longDescription?.map((paragraph, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      paragraph
                      sx={{
                        color: colors.textSecondary,
                        lineHeight: 1.8,
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: colors.textPrimary,
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  Technologies
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project?.technologies?.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        backgroundColor: `${colors.primary}20`,
                        color: colors.primary,
                        '&:hover': {
                          backgroundColor: `${colors.primary}30`,
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: colors.textPrimary,
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  Key Features
                </Typography>
                <Box component="ul" sx={{ color: colors.textSecondary, pl: 2 }}>
                  {project?.features?.map((feature) => (
                    <motion.li
                      key={feature}
                      variants={itemVariants}
                      sx={{ mb: 1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </Box>
              </Box>

              <Box sx={{ mb: 6 }}>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column - Project Images */}
          <Grid item xs={12} md={5}>
            <motion.div variants={itemVariants}>
              {project?.images?.map((image, index) => (
                <Paper
                  key={index}
                  elevation={4}
                  sx={{
                    mb: 3,
                    overflow: 'hidden',
                    borderRadius: 2,
                    border: `1px solid ${colors.primary}20`,
                  }}
                >
                  <Box
                    component="img"
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.02)',
                      },
                    }}
                  />
                </Paper>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectDetail;
