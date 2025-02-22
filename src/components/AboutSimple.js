import React from 'react';
import {Box, Typography, Container, Grid, Paper, Stepper, Step, StepLabel, StepContent} from '@mui/material';
import {motion} from 'framer-motion';
import useThemeColors from '../hooks/useThemeColors';

const AboutSimple = () => {
    const colors = useThemeColors();

    const experiences = [
        {
            title: 'Full Stack and Mobile App Developer',
            company: 'Komune Studio',
            period: '2022 - Present',
            description: 'Currently, a full stack developer specializing in web applications and computer vision solutions.',
            skills: [
                'React', 'Node.js', 'Python', 'TensorFlow',
                'Docker', 'AWS', 'MongoDB', 'PostgreSQL',
                'OpenCV', 'YOLOv8', 'FastAPI', 'Swift', 'Jenkins', 'Unity'
            ]
        },
        {
            title: "Bachelor's Thesis",
            company: 'Power Systems & Power Economics Laboratory at Fachhochschule Südwestfalen',
            period: 'February 2023 - July 2023',
            description: 'Continued the IEC60870-5-104 communication server development and testing for the Smart Grid Cluster Controller (SGCC).',
            skills: [
                'Node-RED', 'InfluxDB', 'C', 'IEC60870-5-104 (IEC104)', 'Docker', 'WINPP104', 'MongoDB'
            ]
        },
        {
            title: 'Research Intern',
            company: 'Power Systems & Power Economics Laboratory at Fachhochschule Südwestfalen',
            period: 'March 2022 - August 2022',
            description: 'Developed an IEC60870-5-104 server for the Smart Grid Cluster Controller (SGCC).',
            skills: [
                'Node-RED', 'InfluxDB', 'C', 'IEC60870-5-104 (IEC104)', 'Docker', 'WINPP104', 'MongoDB'
            ]
        },
        {
            title: "B.Eng. in Industrial Engineering",
            company: 'Fachhochschule Südwestfalen',
            period: 'April 2020 - July 2023',
            description: "Completed Bachelor's of Engineering in Industrial Engineering as part of the Swiss German University's double degree program. ",
        },
        {
            title: "B.S. in Information Technology (Sarjana Komputer)",
            company: 'Swiss German University',
            period: 'July 2019 - July 2023',
            description: 'Bachelor\'s degree with focus on software engineering and artificial intelligence.',
            skills: ['Algorithms', 'Machine Learning', 'Web Development']
        },
    ];

    return (
        <Container maxWidth="lg">
            <Box
                component={motion.div}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                sx={{py: 8}}
            >
                {/*<Paper*/}
                {/*  elevation={0}*/}
                {/*  sx={{*/}
                {/*    p: 4,*/}
                {/*    backgroundColor: `${colors.backgroundElevated}`,*/}
                {/*    borderRadius: 2,*/}
                {/*    border: `1px solid ${colors.borderPrimary}`,*/}
                {/*    mb: 4,*/}
                {/*  }}*/}
                {/*>*/}
                {/*  <Typography*/}
                {/*    variant="h4"*/}
                {/*    sx={{*/}
                {/*      color: colors.primary,*/}
                {/*      fontWeight: 600,*/}
                {/*      mb: 2,*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    John Doe*/}
                {/*  </Typography>*/}
                {/*  <Typography*/}
                {/*    variant="h6"*/}
                {/*    sx={{*/}
                {/*      color: colors.textPrimary,*/}
                {/*      mb: 3,*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Full Stack Developer*/}
                {/*  </Typography>*/}
                {/*  <Typography*/}
                {/*    variant="body1"*/}
                {/*    sx={{*/}
                {/*      color: colors.textPrimary,*/}
                {/*      lineHeight: 1.8,*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Passionate developer with expertise in full-stack development and computer vision solutions.*/}
                {/*    Focused on creating efficient and scalable applications that solve real-world problems.*/}
                {/*  </Typography>*/}
                {/*</Paper>*/}

                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        backgroundColor: `${colors.backgroundElevated}`,
                        borderRadius: 2,
                        border: `1px solid ${colors.borderPrimary}`,
                    }}
                >
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                            color: colors.textPrimary,
                            fontWeight: 600,
                            mb: 4,
                        }}
                    >
                        Experience & Education
                    </Typography>

                    <Stepper orientation="vertical" sx={{
                        '& .MuiStepConnector-line': {
                            borderLeftColor: `${colors.primary}40`,
                        },
                        '& .MuiStepLabel-iconContainer': {
                            '& .MuiStepIcon-root': {
                                color: colors.primary,
                            },
                        },
                    }}>
                        {experiences.map((exp, index) => (
                            <Step key={index} active={true} expanded={true}>
                                <StepLabel>
                                    <Box sx={{mb: 1}}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: colors.textPrimary,
                                                fontWeight: 600,
                                                mb: 0.5,
                                            }}
                                        >
                                            {exp.title}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: colors.textSecondary,
                                                fontWeight: 600,
                                                fontSize: '1.1rem',
                                                mb: 0.5,
                                            }}
                                        >
                                            {exp.company}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: colors.textSecondary,
                                                fontWeight: 500,
                                                fontSize: '0.9rem',
                                            }}
                                        >
                                            {exp.period}
                                        </Typography>
                                    </Box>
                                </StepLabel>
                                <StepContent>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: colors.textPrimary,
                                            mb: 2,
                                        }}
                                    >
                                        {exp.description}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: 1,
                                            mb: 3,
                                        }}
                                    >
                                        {exp?.skills?.map((skill) => (
                                            <Paper
                                                key={skill}
                                                component={motion.div}
                                                whileHover={{y: -2}}
                                                sx={{
                                                    px: 1.5,
                                                    py: 0.5,
                                                    backgroundColor: `${colors.primary}15`,
                                                    color: colors.primary,
                                                    borderRadius: '6px',
                                                    fontSize: '0.8rem',
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {skill}
                                            </Paper>
                                        ))}
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Paper>
            </Box>
        </Container>
    );
};

export default AboutSimple;
