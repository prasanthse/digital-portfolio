import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import AcademicTimelineDescription from "./academicTimelineDescription";

import './academic.css';

const AcademicTimelineElement = ({
    date,
    major,
    school,
    description,
    index
}) => {
    const {t} = useTranslation();

    const theme = useTheme();

    return (
        <>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ 
                    background: 'transparent', 
                    color: 'black',
                    boxShadow: 'none'
                }}
                contentArrowStyle={{ 
                    borderRight: `10px solid ${theme.palette.primary.main}` 
                }}
                date={date}
                dateClassName="custom-date"
                iconStyle={{ 
                    background: index % 2 === 0 ? theme.palette.primary.main : 'white', 
                    color: 'white'
                }}
                icon={
                    <RadioButtonCheckedIcon 
                        sx={{
                            color: index % 2 === 0 ? 'white' : theme.palette.primary.main
                        }}
                    />
                }
            >
                <AcademicTimelineDescription 
                    major={major}
                    school={school}
                    description={description}
                />
            </VerticalTimelineElement>
        </>
    );
}

export default AcademicTimelineElement;