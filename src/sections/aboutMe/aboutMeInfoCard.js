import { BorderStyle } from "@mui/icons-material";
import { Avatar, Box, Card, Stack, Typography, useTheme } from "@mui/material";

const AboutMeInfoCard = ({
    label,
    value,
    logo,
    cardSX,
    index
}) => {
    const theme = useTheme();

    return (
        <>
            <Card
                elevation={0}
                sx={{
                    borderRadius: {xs: 4, md: 2, lg: 4},
                    ...cardSX
                }}
            >
                <Stack
                    p={{xs: 2, md: 1, lg: 2}}
                    direction='row'
                    justifyContent='start'
                    alignItems='center'
                    bgcolor='white'
                    sx={{
                        borderRadius: '8px'
                    }}
                >
                    <Avatar 
                        alt="country" 
                        src={logo}
                        sx={{
                            width: {xs: 40, md: 40, lg: 60},
                            height: {xs: 40, md: 40, lg: 60}
                        }}
                    />

                    <Stack
                        direction='column'
                        justifyContent='space-between'
                        alignItems='start'
                        px={1}
                        ml={2.5}
                    >
                        <Typography 
                            fontWeight={600}
                            fontSize={{xs: 16, md: 12, lg: 18}}
                            lineHeight={1.25}
                        >
                            {label}
                        </Typography>

                        <Typography 
                            fontSize={{xs: 10, md: 8, lg: 12}}
                            mt={-0.1}
                            color="#222222"
                            width='100%'
                            style={{ 
                                wordWrap: "break-word",
                                lineHeight: 1.25
                            }}
                        >
                            {value}
                        </Typography>
                    </Stack>
                </Stack>
            </Card>
        </>
    );
}

export default AboutMeInfoCard;