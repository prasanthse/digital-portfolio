import { Stack, Typography } from "@mui/material";

const HeroGallery = () => {
    return (
        <>
            <Stack
                className='layoutMarginX'
                pt={5}
            >
                <img 
                    src="/images/my photos/hero.png" 
                    alt="My photo"
                    style={{
                        width: '100%'
                    }}
                />
            </Stack>
        </>
    );
}

export default HeroGallery;