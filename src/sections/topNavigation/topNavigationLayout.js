import { Grid, useTheme } from "@mui/material";
import TopNavigationBar from "./topNavigationBar";

const TopNavigationLayout = () => {
    const theme = useTheme();

    return (
        <>
            <Grid 
                width='100%' 
                bgcolor={theme.palette.secondary.main}
                py={2}
            >
                <TopNavigationBar />
            </Grid>
        </>
    );
}

export default TopNavigationLayout;