import ExpertiseLogo from "./expertiseLogo";
import content from '../../data/profile.json';
import CarouselComponent from "../../components/carouselComponent";
import TitleComponent from "../../components/titleComponent";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Box, Stack } from "@mui/material";

const ExpertiseLayout = () => {
    const {t} = useTranslation();

    const getLogoArray = useCallback(() => {
        const array = [];

        for(let i = 0; i < content.expertise.length; i++){
            array.push(
                <ExpertiseLogo 
                    logo={`${process.env.PUBLIC_URL}/${content.expertise[i].path}`}
                    label={content.expertise[i].label}
                />
            )
        }

        return array;
    }, [content]);

    return (
        <>
            <div className="layoutPaddingTop"></div>

            <TitleComponent 
                title={t('expertise')}
                px={1}
                pb={2}
            />

            <Stack
                direction='row'
                justifyContent='center'
                alignItems='center'
                margin='auto'
                sx={{
                    width: {xs: '90%', md: '100%'}
                }}
            >
                <CarouselComponent 
                    list={getLogoArray()}
                    width="90%"
                />
            </Stack>
        </>
    );
}

export default ExpertiseLayout;