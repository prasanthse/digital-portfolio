import { Grid } from "@mui/material";
import ReviewsList from "./reviewsList";
import PublicationsList from "./publicationsList";

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
                <Grid size={{ xs: 12, md: 6 }}>
                    <ReviewsList />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <PublicationsList />
                </Grid>
            </Grid>
        </>
    );
}

export default ReviewsNPublicationsLayout;