import { Stack } from "@mui/material";
import './heroGallery.css';
import HeroCard from "./heroCard";
import { useTranslation } from "react-i18next";
import content from '../../data/profile.json';

const HeroGallery = () => {
    const { t } = useTranslation();
    const heroLocale = "hero";

    return (
        <>
            <Stack
                className='layoutMarginX'
                position='relative'
            >
                {/* Tech stack 01 */}
                <img 
                    src="/images/icons/tech-stack-01.png" 
                    alt="Tech stack"
                    className="techStackOne"
                    style={{
                        position: 'absolute',
                        left: '7.5%',
                        top: '10%',
                        rotate: '30deg',
                        animation: 'rotateAnimation 2s infinite'
                    }}
                />

                {/* Tech stack 02 */}
                <img 
                    src="/images/icons/tech-stack-02.png" 
                    alt="Tech stack"
                    className="techStackTwo"
                    style={{
                        position: 'absolute',
                        top: '30%',
                        right: '25%',
                        animation: 'translateAnimation 3s infinite linear'
                    }}
                />

                {/* Tech stack 03 */}
                <img 
                    src="/images/icons/tech-stack-03.png" 
                    alt="Tech stack"
                    className="techStackThree"
                    style={{
                        position: 'absolute',
                        top: '38%',
                        left: '20%',
                        animation: 'bounceAnimation 1s infinite'
                    }}
                />

                {/* My Image */}
                <img 
                    src="/images/my photos/hero.png" 
                    alt="My image"
                    style={{
                        width: '100%'
                    }}
                />

                {/* Degree */}
                <HeroCard 
                    logo="/images/icons/graduation.png"
                    label={t(`${heroLocale}.degree`)}
                    value={content.hero.degree}
                    cardSX={{
                        position: 'absolute',
                        right: '10%',
                        top: '50%'
                    }}
                />

                {/* Job Role */}
                <HeroCard 
                    logo="/images/icons/role-model.png"
                    label={t(`${heroLocale}.job_role`)}
                    value={content.hero.job_role}
                    cardSX={{
                        position: 'absolute',
                        bottom: -35,
                        left: '10%',
                    }}
                />
            </Stack>
        </>
    );
}

export default HeroGallery;