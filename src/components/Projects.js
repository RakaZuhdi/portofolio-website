import React from 'react';
import {Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, IconButton, Stack} from '@mui/material';
import {motion} from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {Link, useNavigate} from 'react-router-dom';
import useThemeColors from '../hooks/useThemeColors';

const Projects = () => {
    const colors = useThemeColors();
    const navigate = useNavigate();

    const projects = [
        {
            id: 'containerized-IEC60870-5-104-server-application-for-smart-grid-cluster-controller',
            title: 'Containerized IEC60870-5-104 Server Application for Smart Grid Cluster Controller',
            description: 'I built a containerized IEC 60870-5-104 server for Smart Grid Cluster Controllers, enabling real-time data exchange with **SCADA systems** using **Node-RED, Docker, and InfluxDB. The system translates JSON objects and ASDUs**, supporting monitoring, automation, and remote control** for smarter grid management.',
            image: 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/random/Screenshot+2025-02-23+at+19.19.14.png',
            technologies: ['Node-RED', 'Docker', 'InfluxDB', 'ArangoDB', 'json-iec104-server', 'lib60870-C', 'C Programming Language', 'Linux', 'WINPP104', 'Visual Studio Code', 'PuTTY'],
            featured: true
        },
        {
            id: 'dashboard-video-analytic-G20',
            title: 'Dashboard Video Analytic G20',
            description: 'My first exposure to computer vision tech...',
            image: 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/G20/Screenshot+2025-02-23+at+23.07.16.png',
            technologies: ['Node-RED', 'Docker', 'InfluxDB', 'ArangoDB', 'json-iec104-server', 'lib60870-C', 'C Programming Language', 'Linux', 'WINPP104', 'Visual Studio Code', 'PuTTY'],
            featured: true
        },
        {
            id: 'patjarmerah',
            title: 'Patjarmerah: Homepage, Mobile Apps, and Admin Dashboard Development',
            description: 'Mobile app and web dashboard development',
            image: 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/projects/Patjar+Merah/Screenshot+2025-02-24+at+12.57.47.png',
            technologies: ['ReactJS', 'NodeJS', 'React Native', 'MySQL', 'AWS'],
            featured: true
        },
    ];

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99],
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
                backgroundColor: colors.backgroundPrimary,
                pt: {xs: 10, md: 12},
                pb: {xs: 6, md: 8},
            }}
        >
            <Container maxWidth="lg">
                <motion.div variants={itemVariants}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: {xs: '2rem', md: '2.5rem'},
                            fontWeight: 700,
                            color: colors.textPrimary,
                            mb: 1,
                            textAlign: 'center',
                        }}
                    >
                        Featured Projects
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: colors.textSecondary,
                            mb: 6,
                            textAlign: 'center',
                            maxWidth: '650px',
                            mx: 'auto',
                        }}
                    >
                        A selection of my work. Some project source codes are not publicly available. For inquiries, please contact me at rakazhp@gmail.com                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <Grid item xs={12} md={6} lg={4} key={project.id}>
                            <motion.div variants={itemVariants}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        backgroundColor: colors.backgroundElevated,
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease',
                                        border: `1px solid ${colors.primary}20`,
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: `0 12px 24px ${colors.shadowPrimary}`,
                                            '& .project-image': {
                                                transform: 'scale(1.05)',
                                            },
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            paddingTop: '56.25%',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => navigate(`/projects/${project.id}`)}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={project.image}
                                            alt={project.title}
                                            className="project-image"
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.5s ease',
                                            }}
                                        />
                                    </Box>
                                    <CardContent sx={{flexGrow: 1, p: 3}}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: colors.textPrimary,
                                                fontWeight: 600,
                                                mb: 1,
                                                cursor: 'pointer',
                                            }}
                                            onClick={() => navigate(`/projects/${project.id}`)}
                                        >
                                            {project.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: colors.textSecondary,
                                                mb: 2,
                                                lineHeight: 1.6,
                                                height: '3.2em',
                                                overflow: 'hidden',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                            }}
                                        >
                                            {project.description}
                                        </Typography>
                                        <Box sx={{mb: 3}}>
                                            {project.technologies.map((tech) => (
                                                <Chip
                                                    key={tech}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        mr: 1,
                                                        mb: 1,
                                                        backgroundColor: `${colors.primary}15`,
                                                        color: colors.primary,
                                                        fontWeight: 500,
                                                        '&:hover': {
                                                            backgroundColor: `${colors.primary}25`,
                                                        },
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                        <Stack direction="row" spacing={1} justifyContent="flex-end">
                                            {project.github && (
                                                <IconButton
                                                    size="small"
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{
                                                        color: colors.textSecondary,
                                                        '&:hover': {
                                                            color: colors.primary,
                                                            transform: 'translateY(-2px)',
                                                        },
                                                        transition: 'all 0.2s ease',
                                                    }}
                                                >
                                                    <GitHubIcon fontSize="small"/>
                                                </IconButton>
                                            )}
                                            {project.demo && (
                                                <IconButton
                                                    size="small"
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{
                                                        color: colors.textSecondary,
                                                        '&:hover': {
                                                            color: colors.primary,
                                                            transform: 'translateY(-2px)',
                                                        },
                                                        transition: 'all 0.2s ease',
                                                    }}
                                                >
                                                    <OpenInNewIcon fontSize="small"/>
                                                </IconButton>
                                            )}
                                        </Stack>
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

export default Projects;
