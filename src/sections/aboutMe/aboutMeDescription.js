import { Stack, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import content from '../../data/profile.json'
import ButtonComponent from "../../components/buttonComponent";
import { useCallback } from "react";

const AboutMeDescription = () => {
    const {t} = useTranslation();

    const theme = useTheme();

    const hireMe = useCallback(() => {
        
    }, []);

    return (
        <>
            <Stack
                direction='column'
                justifyContent='center'
                alignItems='start'
                width='100%'
            >
                <Typography
                    fontWeight={700}
                    fontSize={{xs: 30, md: 40, lg: 60}}
                    lineHeight={1.25}
                    textAlign='left'
                >
                    {t('about_me.prefix')}
                </Typography>

                <Typography
                    fontWeight={700}
                    fontSize={{xs: 30, md: 40, lg: 60}}
                    lineHeight={1.25}
                    textAlign='left'
                    mb={{xs: 1, md: 2}}
                    color={theme.palette.primary.main}
                >
                    {t('about_me.suffix')}
                </Typography>

                <Typography
                    fontWeight={300}
                    fontSize={{xs: 14, md: 12, lg: 14}}
                    lineHeight={2}
                    textAlign='left'
                    color="#222222"
                    mb={{xs: 2, md: 4}}
                >
                    {content.about_me.description}
                </Typography>

                {/* Hire Me */}
                <Stack width='100%'>
                    <ButtonComponent 
                        label={t(`hero.hireMe`)}
                        onClick={hireMe}
                        sx={{
                            mb: {xs: 4, md: 0},
                            width: 'fit-content'
                        }}
                    />
                </Stack>
            </Stack>
        </>
    );
}

export default AboutMeDescription;