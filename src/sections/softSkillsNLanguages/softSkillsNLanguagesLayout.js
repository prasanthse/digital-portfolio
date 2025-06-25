import { Grid } from "@mui/material";
import SoftSkills from "./softSkills";
import LanguagesGallery from "./languagesGallery";

const SoftSkillsNLanguagesLayout = () => {
    return (
        <>
            <Grid
                direction={{xs: 'column-reverse', md: 'row'}}
                justifyContent='center'
                alignItems='center'
                container
                className="layoutPaddingTop"
            >
                <Grid size={{ xs: 12, md: 6 }}>
                    <SoftSkills />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <LanguagesGallery />
                </Grid>
            </Grid>
        </>
    );
}

export default SoftSkillsNLanguagesLayout;