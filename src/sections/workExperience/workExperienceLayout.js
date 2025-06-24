import { Stack, useTheme } from "@mui/material";
import TitleComponent from "../../components/titleComponent";
import { useTranslation } from "react-i18next";
import WorkExperienceListView from "./workExperienceListView";

const WorkExperienceLayout = () => {
    const {t} = useTranslation();

    const theme = useTheme();

    return (
        <>
            <div className="layoutPaddingTop"></div>

            <Stack sx={{backgroundColor: theme.components.MuiContainer.styleOverrides.root.backgroundColor}}>
                <Stack
                    direction='column'
                    alignItems='start'
                    justifyContent='center'
                    className="layoutMarginX"
                    pt={{xs: 5, md: 10}}
                    pb={5}
                >
                    <TitleComponent 
                        title={t('work_experience')}
                        pb={5}
                        textAlign="left"
                        richText={false}
                    />

                    <WorkExperienceListView />
                </Stack>
            </Stack>
        </>
    );
}

export default WorkExperienceLayout;