import { Grid } from "@mui/material";
import TopNavigationBar from "./topNavigationBar";

const TopNavigationLayout = () => {
    return (
        <>
            <Grid 
                width='100%' 
                bgcolor='#fdf0ed'
                py={2}
            >
                <TopNavigationBar />
            </Grid>
        </>
    );
}

export default TopNavigationLayout;