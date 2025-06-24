import ExpertiseLogo from "./expertiseLogo";
import content from '../../data/profile.json';
import CarouselComponent from "../../components/carouselComponent";
import TitleComponent from "../../components/titleComponent";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

const ExpertiseLayout = () => {
    const {t} = useTranslation();

    const getLogoArray = useCallback(() => {
        const array = [];

        for(let i = 0; i < content.expertise.length; i++){
            array.push(
                <ExpertiseLogo 
                    logo={content.expertise[i].path}
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

            <CarouselComponent 
                list={getLogoArray()}
            />
        </>
    );
}

export default ExpertiseLayout;