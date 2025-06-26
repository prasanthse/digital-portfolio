import { Grid } from "@mui/material";
import ReviewsList from "./reviewsList";
import PublicationsList from "./publicationsList";
import content from '../../data/profile.json';

const ReviewsNPublicationsLayout = () => {
    return (
        <>
            <Grid
                direction={{xs: 'column-reverse', md: 'row'}}
                justifyContent='center'
                alignItems='center'
                container
                className="layoutMarginX layoutPaddingTop"
                mt={{xs: -5, md: 0, lg: 4}}
            >
                {
                    content.reviews.length > 0 && content.publications.length > 0
                    ?
                    <>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <ReviewsList />
                        </Grid>

                        <Grid size={{ xs: 12, md: 1 }}></Grid>

                        <Grid size={{ xs: 12, md: 5 }}>
                            <PublicationsList />
                        </Grid>
                    </>
                    :
                    content.reviews.length > 0 && content.publications.length === 0
                    ?
                    <>
                        <Grid size={{ xs: 12 }}>
                            <ReviewsList />
                        </Grid>
                    </>
                    :
                    <>
                        <Grid size={{ xs: 12 }}>
                            <PublicationsList />
                        </Grid>
                    </>
                }
            </Grid>
        </>
    );
}

export default ReviewsNPublicationsLayout;