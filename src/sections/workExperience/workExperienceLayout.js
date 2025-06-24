import { Stack } from "@mui/material";
import TitleComponent from "../../components/titleComponent";
import { useTranslation } from "react-i18next";
import WorkExperienceListView from "./workExperienceListView";

const WorkExperienceLayout = () => {
    const {t} = useTranslation();

    return (
        <>
            <Stack
                direction='column'
                alignItems='start'
                justifyContent='center'
                className="layoutPaddingTop layoutMarginX"
            >
                <TitleComponent 
                    title={t('work_experience')}
                    pb={5}
                    textAlign="left"
                    richText={false}
                />

                <WorkExperienceListView />
            </Stack>
        </>
    );
}

export default WorkExperienceLayout;