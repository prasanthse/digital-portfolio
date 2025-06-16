import { Stack } from "@mui/material";
import './heroGallery.css';
import HeroCard from "./heroCard";
import { useTranslation } from "react-i18next";

const HeroGallery = () => {
    const { t } = useTranslation();
    const heroLocale = "hero";

    return (
        <>
            <Stack
                className='layoutMarginX'
                pt={5}
                bgcolor='red'
            >
                {/* Tech stack 01 */}
                <img 
                    src="/images/hero icons/tech-stack-01.png" 
                    alt="Tech stack"
                    className="techStackOne"
                    style={{
                        position: 'absolute',
                        transform: 'translate(10px, 0px)',
                        rotate: '30deg',
                        animation: 'rotateAnimation 2s infinite'
                    }}
                />

                {/* Tech stack 02 */}
                <img 
                    src="/images/hero icons/tech-stack-02.png" 
                    alt="Tech stack"
                    style={{
                        width: '50px',
                        position: 'absolute',
                        right: 0,
                        transform: 'translate(-200px, 100px)',
                        transformOrigin: 'center',
                        animation: 'translateAnimation 3s infinite linear'
                    }}
                />

                {/* Tech stack 03 */}
                <img 
                    src="/images/hero icons/tech-stack-03.png" 
                    alt="Tech stack"
                    style={{
                        width: '75px',
                        position: 'absolute',
                        transform: 'translate(75px, 150px)',
                        animation: 'bounceAnimation 3s infinite'
                    }}
                />

                {/* My Image */}
                <img 
                    src="/images/my photos/hero.png" 
                    alt="My photo"
                    style={{
                        width: '100%'
                    }}
                />

                {/* Date of birth */}
                <HeroCard 
                    logo="/images/hero icons/birthday.png"
                    label={t(`${heroLocale}.dob`)}
                    value="1996/03/15"
                    cardSX={{
                        transform: 'translate(375px, 175px)',
                    }}
                />

                {/* Country */}
                <HeroCard 
                    logo="/images/hero icons/country.png"
                    label={t(`${heroLocale}.country`)}
                    value="Sri Lanka"
                    cardSX={{
                        transform: 'translate(-50px, 370px)',
                    }}
                />
            </Stack>
        </>
    );
}

export default HeroGallery;