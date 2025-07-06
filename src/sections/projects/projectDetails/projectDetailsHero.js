import { Box, Breadcrumbs, Stack, Typography, useTheme } from "@mui/material";
import { useCallback, useEffect, useTransition } from "react";
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ButtonComponent from "../../../components/buttonComponent";
import { useNavigate } from "react-router-dom";

const BreadCrumbText = (text) => {
    return <Typography
        sx={{ 
            color: "black",
            fontWeight: 300,
            fontSize: {xs: 10, md: 14, lg: 14},
            textAlign: 'left'
        }}
    >
        {text}
    </Typography>
}

const BreadCrumbLink = (action, text) => {
    return <ButtonComponent 
        label={text}
        variant="text"
        onClick={action}
        size="medium"
        textColor="black"
        sx={{
            textTransform: 'none',
            p: 0,
            backgroundColor: 'transparent'
        }}
    />
}

const ProjectsDetailsHero = ({title, area, tagLine}) => {
    const theme = useTheme();

    const navigate = useNavigate();

    const {t} = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const getTitlePrefix = useCallback(() => {
        const lastWordIndex = title.lastIndexOf(' ');
        return title.substring(0, lastWordIndex);
    }, [title]);
    
    const getTitleSuffix = useCallback(() => {
        const lastWordIndex = title.lastIndexOf(' ');
        return title.substring(lastWordIndex);
    }, [title]);

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: theme.palette.secondary.main
                }}
            >
                <Stack
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    py={{xs: 4, md: 6}}
                    className="layoutMarginX"
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
                        pt={2}
                    >
                        {tagLine}
                    </Typography>

                    {/* BreadCrumbs */}
                    <Breadcrumbs 
                        aria-label="breadcrumb" 
                        separator="›"
                        sx={{
                            mt: {xs: 2, md: 4}
                        }}
                    >
                        {BreadCrumbLink(() => navigate("/"), t(`projects.projectDetails.breadcrumb.home`))}

                        {BreadCrumbLink(() => navigate("/project"), t(`projects.projectDetails.breadcrumb.projects`))}
                        
                        {BreadCrumbText(area)}
                    </Breadcrumbs>
                </Stack>
            </Box>
        </>
    );
}

export default ProjectsDetailsHero;