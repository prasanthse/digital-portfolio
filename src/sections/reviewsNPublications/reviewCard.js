import { Avatar, Box, Card, Divider, Rating, Stack, Typography, useTheme } from "@mui/material";

const ReviewCard = ({item}) => {
    const theme = useTheme();

    return (
        <>
            <Stack
                direction='column'
                justifyContent='start'
                alignItems='center'
                position='relative'
                pt={5}
                px={{xs: 1, md: 2}}
            >
                {/* Icon */}
                <Avatar 
                    alt="avatar"
                    src={`${process.env.PUBLIC_URL}/${item.icon}`}
                    sx={{
                        width: {xs: 50, md: 75},
                        height: {xs: 50, md: 75},
                        position: 'absolute',
                        mt: {xs: -3, md: -5}
                    }}
                />

                {/* Review, Rating, Reviewer & Source */}
                <Card
                    elevation={3}
                    sx={{
                        px: 5,
                        pt: 8,
                        pb: 2,
                        borderRadius: 4,
                        height: 250,
                        mb: 2
                    }}
                >
                    <Stack
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                    >
                        {/* Rating */}
                        {
                            item.rating === 0
                            ?
                            <></>
                            :
                            <Rating 
                                name="half-rating" 
                                defaultValue={item.rating} 
                                precision={0.5} 
                                size="large"
                                readOnly
                                sx={{
                                    mb: 1.5
                                }}
                            />
                        }
                        
                        {/* Review */}
                        <Box
                            className="hideScrollBar"
                            sx={{
                                maxHeight: 140,
                                overflowY: 'auto'
                            }}
                        >
                            <Typography
                                color="#222222"
                                fontWeight={300}
                                fontSize={{xs: 14, md: 12, lg: 14}}
                                lineHeight={2}
                                textAlign='center'
                            >
                                {item.review}
                            </Typography>
                        </Box>

                        <Divider sx={{width: '100%', py: 1.5}}/>

                        {/* Reviewer */}
                        <Typography
                            color={theme.palette.primary.main}
                            fontWeight={800}
                            fontSize={{xs: 14, md: 12, lg: 20}}
                            textAlign='center'
                            pt={2}
                        >
                            {item.reviewer_name}
                        </Typography>

                        {/* Source */}
                        <Typography
                            color="#888888"
                            fontWeight={500}
                            fontSize={{xs: 14, md: 12, lg: 12}}
                            textAlign='center'
                        >
                            {item.source}
                        </Typography>
                    </Stack>
                </Card>
            </Stack>
        </>
    );
}

export default ReviewCard;