import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import TitleComponent from "../../../components/titleComponent";
import FeaturedProjectsCardList from "./featuredProjectsCardList";
import ButtonComponent from '../../../components/buttonComponent';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FeaturedProjectsLayout = () => {
    const {t} = useTranslation();

    const navigate = useNavigate();

    const seeAllProjects = useCallback(() => {
        navigate('/project');
    }, []);

    return(
        <>
            <div className="layoutPaddingTop"></div>

            <TitleComponent 
                title={t('projects.featured_projects')}
                px={1}
                pb={5}
            />

            <Stack className="layoutMarginX">
                <Stack
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    width='100%'
                    spacing={5}
                > 
                    <FeaturedProjectsCardList />
                    
                    <ButtonComponent 
                        label={t(`projects.see_all`)}
                        onClick={seeAllProjects}
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

export default FeaturedProjectsLayout;