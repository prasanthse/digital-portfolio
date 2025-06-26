import { Grid } from "@mui/material";
import SoftSkills from "./softSkills";
import LanguagesGallery from "./languagesGallery";
import content from '../../data/profile.json';

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
                {
                    content.languages.length > 0 && content.soft_skills.list.length > 0
                    ?
                    <>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <SoftSkills />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <LanguagesGallery />
                        </Grid>
                    </>
                    :
                    content.languages.length > 0 && content.soft_skills.list.length === 0
                    ?
                    <>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <LanguagesGallery />
                        </Grid>
                    </>
                    :
                    <>
                        <Grid size={{ xs: 12 }}>
                            <SoftSkills />
                        </Grid>
                    </>
                }
            </Grid>
        </>
    );
}

export default SoftSkillsNLanguagesLayout;