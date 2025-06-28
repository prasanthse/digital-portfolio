import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ButtonComponent from '../components/buttonComponent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ErrorView = ({
    icon=null, 
    errorTitle="",
    errorDescription="",
    actionTxt="",
    action=null
}) => {
    const {t} = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <Stack
                direction='column'
                justifyContent='center'
                alignItems='center'
                width='100%'
                height='100vh'
                spacing={2}
            >
                {/* Icon */}
                {
                    icon
                    ?
                    <Box
                        width={{xs: 200, md: 300}}
                        data-aos="zoom-in"
                    >
                        <img 
                            src={icon} 
                            alt="error" 
                            width='100%'
                        />
                    </Box>
                    :
                    <></>
                }

                {/* Title */}
                <Typography
                    color="black"
                    fontWeight={700}
                    fontSize={{xs: 20, md: 24, lg: 32}}
                    textAlign='center'
                    lineHeight={1.25}
                    width='90%'
                    data-aos="slide-up"
                >
                    {errorTitle ?? t(`errors.general.title`)}
                </Typography>

                {/* Description */}
                <Typography
                    color="#222222"
                    fontWeight={300}
                    fontSize={{xs: 14, md: 14, lg: 14}}
                    textAlign='center'
                    lineHeight={1.5}
                    width={{xs: '90%', md: '75%', lg: '50%'}}
                    data-aos="fade-down"
                >
                    {errorDescription ?? t(`errors.general.description`)}
                </Typography>

                {/* Action */}
                {
                    action
                    ?
                    <Box pt={5} data-aos="fade-up">
                        <ButtonComponent 
                            label={actionTxt}
                            onClick={action}
                        />
                    </Box>
                    :
                    <></>
                }
            </Stack>
        </>
    );
}

export default ErrorView;