import { Grid, Stack } from "@mui/material";
import content from '../../../data/profile.json';
import LatestProjectCard from "./latestProjectCard";

const LatestProjectsCardList = () => {
    return(
        <>
            <Grid
                direction={{xs: 'column', md: 'row'}}
                justifyContent='center'
                alignItems='center'
                spacing={{xs: 1, md: 1.5, lg: 2}}
                width='100%'
                container
            >
                {
                    content.projects.latest.slice(0, 3).map((item, index) => {
                        return <Grid
                            key={index}
                            size={{ xs: 12, md: 4 }}
                        >
                            <LatestProjectCard 
                                item={item}
                                index={index}
                            />
                        </Grid>
                    })
                }
            </Grid>
        </>
    );
}

export default LatestProjectsCardList;