import { Grid, useTheme } from "@mui/material";
import HeroWelcome from "./heroWelcome";
import HeroGallery from "./heroGallery";

const HeroLayout = () => {
    const theme = useTheme();

    return (
        <>
            <Grid
                direction={{xs: 'column-reverse', md: 'row'}}
                justifyContent='center'
                alignItems='center'
                container
                bgcolor={theme.palette.secondary.main}
            >
                <Grid size={{ xs: 12, md: 6 }}>
                    <HeroWelcome />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <HeroGallery />
                </Grid>
            </Grid>
        </>
    );
}

export default HeroLayout;