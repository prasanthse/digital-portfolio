import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import content from '../../data/profile.json'
import ButtonComponent from "../../components/buttonComponent";
import { useCallback } from "react";
import TitleComponent from "../../components/titleComponent";

const AboutMeDescription = () => {
    const {t} = useTranslation();

    const hireMe = useCallback(() => {
        window.location.href = content.hire_me;
    }, []);

    return (
        <>
            <Stack
                direction='column'
                justifyContent='center'
                alignItems='start'
                width='100%'
            >
                <TitleComponent 
                    title={t('about_me')}
                    textAlign="left"
                />

                <Typography
                    fontWeight={300}
                    fontSize={{xs: 14, md: 12, lg: 14}}
                    lineHeight={2}
                    textAlign='justify'
                    color="#222222"
                    mt={{xs: 1, md: 2}}
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