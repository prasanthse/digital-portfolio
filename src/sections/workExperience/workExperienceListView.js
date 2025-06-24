import { Stack } from "@mui/material";
import WorkExperienceListRow from "./workExperinceListRow";
import content from '../../data/profile.json';

const WorkExperienceListView = () => {
    return (
        <>
            <Stack
                direction='column'
                alignItems='start'
                justifyContent='center'
                width='100%'
                spacing={4}
            >
                {
                    content.work_experience.map((item, index) => {
                        return <WorkExperienceListRow key={index} item={item}/>
                    })
                }
            </Stack>
        </>
    );
}

export default WorkExperienceListView;