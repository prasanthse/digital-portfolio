import { Avatar, Card, Stack, Typography } from "@mui/material";

const HeroCard = ({
    label,
    value,
    logo,
    cardSX
}) => {
    return (
        <>
            <Card
                elevation={10}
                sx={{
                    borderRadius: 4,
                    position: 'absolute',
                    display: 'inline-block',
                    width: 'fit-content',
                    ...cardSX
                }}
            >
                <Stack
                    p={2}
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    bgcolor='white'
                >
                    <Avatar alt="country" src={logo} />

                    <Stack
                        direction='column'
                        justifyContent='space-between'
                        alignItems='start'
                        px={1}
                    >
                        <Typography fontWeight={600}>
                            {label}
                        </Typography>

                        <Typography 
                            fontSize={10} 
                            mt={-0.5}
                            color="#222222"
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