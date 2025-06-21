import { Grid, Stack } from "@mui/material";
import AboutMeInfo from "./aboutMeInfo";
import AboutMeDescription from "./aboutMeDescription";

const AboutMeLayout = () => {
    return (
        <>
            <Stack
                width='100%'
                className="layoutPaddingTop"
            >
                <div className="layoutMarginX">
                    <Grid
                        direction={{xs: 'column-reverse', md: 'row'}}
                        justifyContent='center'
                        alignItems='center'
                        container
                    >
                        <Grid size={{xs: 12, md: 6, lg: 5}}>
                            <AboutMeInfo />
                        </Grid>

                        <Grid size={{xs: 12, md: 6, lg: 7}}>
                            <AboutMeDescription />
                        </Grid>
                    </Grid>
                </div>
            </Stack>
        </>
    );
}

export default AboutMeLayout;