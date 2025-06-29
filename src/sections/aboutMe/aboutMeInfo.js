import { Box, Stack, useTheme } from "@mui/material";
import content from '../../data/profile.json';
import AboutMeInfoCard from "./aboutMeInfoCard";

const AboutMeInfo = () => {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    bgcolor: theme.palette.secondary.main,
                    width: {xs: '100%', md: '75%'},
                    borderRadius: 4
                }}
            >
                <Stack
                    direction='column'
                    spacing={2}
                    p={{xs: 3, md: 5}}
                >
                    {
                        content.about_me.info.map((item, index) => {
                            return <AboutMeInfoCard 
                                key={index}
                                label={item.label}
                                value={item.value}
                                logo={`${process.env.PUBLIC_URL}/${item.path}`}
                                width='100%'
                                elevation={0}
                                index={index}
                                cardSX={{
                                    width: '100%'
                                }}
                            />
                        })
                    }
                </Stack>
            </Box>
        </>
    );
}

export default AboutMeInfo;