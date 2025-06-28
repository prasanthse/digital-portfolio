import { Grid } from "@mui/material";
import content from '../../../data/profile.json';
import FeaturedProjectCard from "./featuredProjectCard";
import { getFeaturedProjects } from "../../../utils/utils";

const FeaturedProjectsCardList = () => {
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
                    getFeaturedProjects(content.projects).slice(0, 3).map((item, index) => {
                        return <Grid
                            key={index}
                            size={{ xs: 12, md: 4 }}
                        >
                            <FeaturedProjectCard item={item}/>
                        </Grid>
                    })
                }
            </Grid>
        </>
    );
}

export default FeaturedProjectsCardList;