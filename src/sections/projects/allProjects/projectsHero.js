import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useCallback, useEffect } from "react";
import content from '../../../data/profile.json';
import ButtonComponent from "../../../components/buttonComponent";
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectsHero = () => {
    const theme = useTheme();

    const {t} = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const getTitlePrefix = useCallback(() => {
        const title = content.projects_overview.title;

        const lastWordIndex = title.lastIndexOf(' ');
        return title.substring(0, lastWordIndex);
    }, []);
    
    const getTitleSuffix = useCallback(() => {
        const title = content.projects_overview.title;

        const lastWordIndex = title.lastIndexOf(' ');
        return title.substring(lastWordIndex);
    }, []);

    const startNewProject = useCallback(() => {
        window.location.href = content.lets_start_a_project;
    }, []);

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: theme.palette.secondary.main,
                    pt: 15
                }}
            >
                <Stack
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    pt={{xs: 5, md: 10}}
                    className="layoutMarginX"
                    spacing={{xs: 2, md: 4}}
                >
                    {/* Title */}
                    <Typography
                        fontWeight={700}
                        fontSize={{xs: 40, md: 60, lg: 90}}
                        lineHeight={1}
                        textAlign="center"
                        data-aos="zoom-in"
                    >
                        {getTitlePrefix()} <span style={{color: theme.palette.primary.main}}>{getTitleSuffix()}</span>
                    </Typography>

                    {/* Description */}
                    <Typography
                        color="#222222"
                        fontWeight={300}
                        fontSize={{xs: 14, md: 12, lg: 14}}
                        lineHeight={2}
                        textAlign='center'
                    >
                        {content.projects_overview.description}
                    </Typography>

                    {/* Start a project */}
                    <ButtonComponent 
                        label={t(`projects.start_new_project`)}
                        onClick={startNewProject}
                        sx={{
                            mt: {xs: 2, md: 2, lg: 5},
                            mb: {xs: 5, md: 5, lg: 0}
                        }}
                    />

                    {/* Insights */}
                    <Stack
                        direction='row'
                        justifyContent={{xs: 'start', md: 'center'}}
                        alignItems='center'
                        sx={{
                            overflowX: 'scroll',
                            overflowY: 'hidden',
                            width: {xs: '100%', md: '75%'}
                        }}
                        className="hideScrollBar"
                        spacing={5}
                        pt={3}
                    >
                        {
                            content.projects_overview.insights.map((item, index) => {
                                return <Stack
                                    key={index}
                                    direction='column'
                                    justifyContent='center'
                                    alignItems='center'
                                    data-aos="slide-up"
                                    data-aos-delay={100 * index}
                                >
                                    {/* Value */}
                                    <Typography
                                        color="black"
                                        fontWeight={700}
                                        fontSize={{xs: 20, md: 24, lg: 32}}
                                        textAlign='center'
                                    >
                                        {item.value}
                                    </Typography>

                                    {/* Label */}
                                    <Typography
                                        color="#222222"
                                        fontWeight={300}
                                        fontSize={{xs: 14, md: 12, lg: 14}}
                                        textAlign='center'
                                    >
                                        {item.label}
                                    </Typography>
                                </Stack>
                            })
                        }
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}

export default ProjectsHero;