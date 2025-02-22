import React from 'react';
import {Box, Typography, Container, Grid, Paper, Stepper, Step, StepLabel, StepContent, IconButton, Stack} from '@mui/material';
import {motion} from 'framer-motion';
import useThemeColors from '../hooks/useThemeColors';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SchoolIcon from '@mui/icons-material/School';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import BiotechIcon from '@mui/icons-material/Biotech';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ColorlibConnector = styled(StepConnector)(({ theme, colors }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: `${colors.primary}40`,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: `${colors.primary}40`,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: '100%',
    borderLeft: `2px solid ${colors.primary}40`,
    backgroundColor: 'transparent',
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1f2940' : '#fff',
  zIndex: 1,
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.3s ease',
  border: '2px solid transparent',
  overflow: 'hidden',
  ...(ownerState.active && {
    borderColor: theme.palette.primary.main,
    boxShadow: '0 4px 10px 0 rgba(33, 150, 243, 0.3)',
  }),
  ...(ownerState.completed && {
    borderColor: theme.palette.primary.main,
  }),
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 6px 15px 0 rgba(33, 150, 243, 0.35)',
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;
  const colors = useThemeColors();

  const icons = {
    1: <img src={KS_ICON} alt="Komune Studio" />,
    2:  <img src={SELF_ICON} alt="Self-employed icon" />,
    3:  <img src={FH_ICON} alt="FH Südwestfalen" />,
    4:  <img src={FH_ICON} alt="FH Südwestfalen" />,
    5: <img src={FH_ICON} alt="FH Südwestfalen" />,
    6: <img src={SGU_ICON} alt="Swiss German University" />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

let FH_ICON = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/icons/fachhochschule_s_dwestfalen_logo.jpeg'
let SGU_ICON = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/icons/logo-sgu-square.jpg'
let KS_ICON  = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/icons/komune_studio_software_house_logo.jpeg'
let SELF_ICON = 'https://portfolio-raka.s3.ap-southeast-2.amazonaws.com/icons/images.png'

const AboutSimple = () => {
    const colors = useThemeColors();

    const experiences = [
        {
            title: 'Full Stack Developer',
            company: 'Komune Studio',
            period: 'August 2023 - Present',
            description: 'Working as a full stack developer in a software house company, focusing on web and mobile development.',
            link: 'https://komunestudio.com',
            skills: [
                'ReactJS', 'Node.js', 'Python', 'MongoDB',
                'PostgreSQL', 'Docker', 'AWS', 'TypeScript',
                'Unix', 'Kotlin', 'Android Java', 'React Native'
            ]
        },
        {
            title: 'Part Time Full Stack Developer Freelancer',
            company: 'Self-employed',
            period: 'July 2024 - Present',
            description: 'Currently, a full stack developer specializing in web applications and computer vision solutions.',
            skills: [
                'ReactJS', 'Node.js', 'Python', 'TensorFlow',
                'Docker', 'AWS', 'MongoDB', 'PostgreSQL',
                'OpenCV', 'YOLOv8', 'FastAPI', 'Swift', 'Jenkins', 'Unity',
                'Unix', 'Kotlin', 'Android Java', 'React Native', 'SparkAR'
            ]
        },
        {
            title: "Bachelor's Thesis",
            company: 'Power Systems & Power Economics Laboratory at Fachhochschule Südwestfalen',
            period: 'February 2023 - July 2023',
            link: 'https://drive.google.com/file/d/1I4C9vRYLjv_XWQruDRB3_t4Dkosu85_3/view?usp=sharing',
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
            ],
            link: 'https://drive.google.com/file/d/11VVA5NnoFijUIQ2LJ3Syr9q4LE7Kmu4p/view?usp=sharing'
        },
        {
            title: "B.Eng. in Industrial Engineering",
            company: 'Fachhochschule Südwestfalen',
            period: 'April 2020 - July 2023',
            description: "Completed B.Eng. in Industrial Engineering as part of the Swiss German University's double degree program. ",
        },
        {
            title: "B.S. in Information Technology (Sarjana Komputer)",
            company: 'Swiss German University',
            period: 'July 2019 - July 2023',
            description: 'Completed B.S. in Information Technology focusing on computer science.',
            skills: [
                'C++', 'MySQL', 'Unix', 'Elastic Stack', 'AWS', 'PostgreSQL',
                'Java', 'PHP', 'YoloV8', 'OpenCV', 'Python', 'Wazuh', 'Kali Linux',
                'C#', 'Unity', 'Flutter', 'Node.js', 'Odoo', 'Swift', 'Kotlin'
            ]
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

                    <Stepper 
                        orientation="vertical" 
                        connector={<ColorlibConnector colors={colors}/>}
                        sx={{
                            '& .MuiStepLabel-iconContainer': {
                                pr: 3,
                            },
                            '& .MuiStepConnector-line': {
                                borderLeftColor: `${colors.primary}40`,
                            },
                        }}
                    >
                        {experiences.map((exp, index) => (
                            <Step key={index} active={true} expanded={true}>
                                <StepLabel StepIconComponent={ColorlibStepIcon} icon={index + 1}>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Typography variant="h6" sx={{ fontWeight: 600, color: colors.textPrimary }}>
                                            {exp.title}
                                        </Typography>
                                        {exp.link && (
                                            <IconButton 
                                                href={exp.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                size="small"
                                                sx={{ 
                                                    color: colors.primary,
                                                    '&:hover': {
                                                        color: colors.primaryLight,
                                                        transform: 'translateY(-2px)',
                                                    },
                                                    transition: 'all 0.2s ease-in-out',
                                                }}
                                            >
                                                <OpenInNewIcon fontSize="small" />
                                            </IconButton>
                                        )}
                                    </Stack>
                                    <Typography variant="subtitle1" sx={{ color: colors.textSecondary, fontWeight: 600 }}>
                                        {exp.company}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: colors.textSecondary }}>
                                        {exp.period}
                                    </Typography>
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
