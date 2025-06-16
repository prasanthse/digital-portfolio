import { Stack, Typography } from "@mui/material";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../components/buttonComponent";

const HeroWelcome = () => {
    const { t } = useTranslation();
    const heroLocale = "hero";

    const hireMe = useCallback(() => {
    
    }, []);

    return (
        <>
            <Stack
                direction='column'
                alignItems='start'
                textAlign='left'
                justifyContent='center'
                className='layoutMarginX'
                pt={{xs: 10, md: 5}}
                pl={5}
            >
                {/* Welcome */}
                <Typography
                    fontWeight={800}
                    fontSize={{xs: 60, md: 30, lg: 60}}
                    lineHeight={0.75}
                    pb={{xs: 3, md: 1, lg: 3}}
                >
                    {t(`${heroLocale}.welcome`)}
                </Typography>

                {/* Name */}
                <Typography
                    fontWeight={800}
                    fontSize={{xs: 60, md: 30, lg: 60}}
                    lineHeight={0.75}
                    pb={{xs: 3, md: 2, lg: 3}}
                >
                   {t(`${heroLocale}.name`)}
                </Typography>

                {/* Description */}
                <Typography
                    color="gray"
                    fontWeight={400}
                    fontSize={{xs: 16, md: 12, lg: 16}}
                    lineHeight={1.5}
                >
                    {t(`${heroLocale}.description`)}
                </Typography>

                {/* Hire Me */}
                <ButtonComponent 
                    label={t(`${heroLocale}.hireMe`)}
                    onClick={hireMe}
                    sx={{
                        mt: {xs: 5, md: 2, lg: 5},
                        mb: {xs: 5, md: 5, lg: 0}
                    }}
                />
            </Stack>
        </>
    );
}

export default HeroWelcome;