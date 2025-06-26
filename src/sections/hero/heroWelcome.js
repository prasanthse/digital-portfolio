import { Stack, Typography } from "@mui/material";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../components/buttonComponent";
import content from '../../data/profile.json';

const HeroWelcome = () => {
    const { t } = useTranslation();
    const heroLocale = "hero";

    const hireMe = useCallback(() => {
        window.location.href = content.hire_me;
    }, []);

    return (
        <>
            <Stack
                direction='column'
                alignItems='start'
                textAlign='left'
                justifyContent='center'
                className='layoutMarginX layoutPaddingX'
                pt={{xs: 10, md: 5}}
            >
                {/* Welcome */}
                <Typography
                    fontWeight={800}
                    fontSize={{xs: 30, md: 30, lg: 60}}
                    lineHeight={0.75}
                    pb={{xs: 1.5, md: 1, lg: 3}}
                >
                    {t(`${heroLocale}.welcome`)}
                </Typography>

                {/* Name */}
                <Typography
                    fontWeight={800}
                    fontSize={{xs: 30, md: 30, lg: 60}}
                    lineHeight={1}
                    pb={{xs: 2, md: 2, lg: 3}}
                >
                   {content.hero.name}
                </Typography>

                {/* Description */}
                <Typography
                    color="#222222"
                    fontWeight={300}
                    fontSize={{xs: 14, md: 12, lg: 14}}
                    lineHeight={2}
                    textAlign='justify'
                >
                    {content.hero.about}
                </Typography>

                {/* Hire Me */}
                <ButtonComponent 
                    label={t(`${heroLocale}.hireMe`)}
                    onClick={hireMe}
                    sx={{
                        mt: {xs: 2, md: 2, lg: 5},
                        mb: {xs: 5, md: 5, lg: 0}
                    }}
                />
            </Stack>
        </>
    );
}

export default HeroWelcome;