import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import TitleComponent from "../../components/titleComponent";
import LatestProjectsCardList from "./latestProjectsCardList";
import ButtonComponent from '../../components/buttonComponent';
import { useCallback } from "react";

const LatestProjectsLayout = () => {
    const {t} = useTranslation();

    const seeAllProjects = useCallback(() => {

    }, []);

    return(
        <>
            <div className="layoutPaddingTop"></div>

            <TitleComponent 
                title={t('projects.latest_projects')}
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
                    <LatestProjectsCardList />
                    
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

export default LatestProjectsLayout;