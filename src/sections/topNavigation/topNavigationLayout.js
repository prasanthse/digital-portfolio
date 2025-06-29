import { Grid, useTheme } from "@mui/material";
import TopNavigationBar from "./topNavigationBar";

const TopNavigationLayout = () => {
    const theme = useTheme();

    return (
        <>
            <Grid 
                width='100%' 
                py={2}
                position='fixed'
                zIndex={1000}
            >
                <TopNavigationBar />
            </Grid>
        </>
    );
}

export default TopNavigationLayout;