import { Stack, useTheme } from "@mui/material";
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TitleComponent from "../../components/titleComponent";
import { useTranslation } from "react-i18next";
import AcademicTimelineElement from "./academicTimelineElement";
import content from '../../data/profile.json';

const AcademicLayout = () => {
    const {t} = useTranslation();

    const theme = useTheme();

    return (
        <>
            <div className="layoutPaddingTop"></div>

            <Stack
                pt={{xs: 5, md: 10}}
                pb={5}
                className="layoutMarginX"
                borderRadius={8}
                sx={{
                    backgroundColor: theme.components.MuiContainer.styleOverrides.root.backgroundColor
                }}
            >
                <TitleComponent 
                    title={t('academic')}
                    richText={false}
                    px={1}
                />

                <Stack
                    mt={{xs: 0, md: 5}}
                >
                    <VerticalTimeline
                        lineColor='white'
                        animate={false}
                    >
                        {
                            content.academic.map((item, index) => {
                                return <AcademicTimelineElement 
                                    key={index}
                                    date={item.date}
                                    major={item.major}
                                    school={item.school}
                                    description={item.description}
                                    index={index}
                                />
                            })
                        }
                    </VerticalTimeline>
                </Stack>
            </Stack>
        </>
    );
}

export default AcademicLayout;