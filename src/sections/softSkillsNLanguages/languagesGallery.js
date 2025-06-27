import { Box, Stack, useTheme } from "@mui/material";
import './languages.css';
import LanguagesCard from "./languagesCard";
import { useTranslation } from "react-i18next";
import content from '../../data/profile.json';

const LanguagesGallery = () => {
    const { t } = useTranslation();

    const theme = useTheme();

    return (
        <>
            <Stack
                className='layoutMarginX'
                position='relative'
            >
                {/* My Image */}
                <img 
                    src={`${process.env.PUBLIC_URL}/${content.my_images.languages_section}`}
                    alt="My image"
                    style={{
                        width: '100%'
                    }}
                />

                {/* Language */}
                <LanguagesCard 
                    logo={`${process.env.PUBLIC_URL}/images/icons/languages.png`}
                    label={t(`languages`)}
                    list={content.languages}
                    cardSX={{
                        position: 'absolute',
                        bottom: 50,
                        left: {xs: '5%', md: '-60px', lg: '-20px'},
                        animation: 'languageAnimation 1s infinite'
                    }}
                />

                <Box
                    sx={{
                        width: '100%',
                        height: 100,
                        background: `linear-gradient(90deg,rgb(255, 255, 255) 0%, rgb(255, 255, 255) 1%, ${theme.palette.primary.main})`,
                        position: 'absolute',
                        bottom: 0,
                        zIndex: -1
                    }}
                />
            </Stack>
        </>
    );
}

export default LanguagesGallery;