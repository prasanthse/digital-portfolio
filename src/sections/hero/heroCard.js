import { Avatar, Card, Stack, Typography } from "@mui/material";

const HeroCard = ({
    label,
    value,
    logo,
    cardSX,
    width=100
}) => {
    return (
        <>
            <Card
                elevation={10}
                sx={{
                    borderRadius: {xs: 4, md: 2, lg: 4},
                    position: 'absolute',
                    display: 'inline-block',
                    width: 'fit-content',
                    ...cardSX
                }}
            >
                <Stack
                    p={{xs: 2, md: 1, lg: 2}}
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    bgcolor='white'
                >
                    <Avatar 
                        alt="country" 
                        src={logo}
                        sx={{
                            width: {xs: 40, md: 20, lg: 40},
                            height: {xs: 40, md: 20, lg: 40}
                        }}
                    />

                    <Stack
                        direction='column'
                        justifyContent='space-between'
                        alignItems='start'
                        px={1}
                    >
                        <Typography 
                            fontWeight={600}
                            fontSize={{xs: 16, md: 12, lg: 16}}
                        >
                            {label}
                        </Typography>

                        <Typography 
                            fontSize={{xs: 10, md: 8, lg: 10}}
                            mt={-0.5}
                            color="#222222"
                            width={width}
                            style={{ wordWrap: "break-word" }}
                        >
                            {value}
                        </Typography>
                    </Stack>
                </Stack>
            </Card>
        </>
    );
}

export default HeroCard;