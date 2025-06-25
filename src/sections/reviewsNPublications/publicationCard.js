import { Divider, IconButton, Stack, Typography, useTheme } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LaunchIcon from '@mui/icons-material/Launch';

const PublicationCard = ({item}) => {
    const theme = useTheme();

    return (
        <>
            <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
            >
                {/* Title, Date & Type */}
                <Stack
                    direction='column'
                    justifyContent='start'
                    alignItems='start'
                >
                    {/* Title */}
                    <Typography
                        color="black"
                        fontWeight={600}
                        fontSize={{xs: 14, md: 14, lg: 16}}
                        textAlign='left'
                    >
                        {item.title}
                    </Typography>

                    {/* Date & Type */}
                    <Stack
                        direction='row'
                        justifyContent='start'
                        alignItems='center'
                        pb={2}
                        spacing={1}
                    >
                        {/* Type */}
                        <Typography
                            color="#222222"
                            fontWeight={300}
                            fontSize={{xs: 12, md: 12, lg: 14}}
                            textAlign='left'
                        >
                            {item.type}
                        </Typography>

                        {/* Bullet point */}
                        <FiberManualRecordIcon 
                            color="#222222"
                            sx={{
                                width: 5,
                                height: 5
                            }}
                        />

                        {/* Date */}
                        <Typography
                            color="#222222"
                            fontWeight={300}
                            fontSize={{xs: 12, md: 12, lg: 14}}
                            textAlign='left'
                        >
                            {item.date}
                        </Typography>
                    </Stack>
                </Stack>

                {/* Link */}
                <IconButton 
                    aria-label="navigate"
                    size="large"
                    variant="contained"
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        "&:hover": { 
                            backgroundColor: theme.palette.primary.main,
                            transform: 'scale(1.1)'
                        },
                        mr: 1,
                        ml: 1
                    }}
                    onClick={() => {
                        window.open(item.link, "_blank");
                    }}
                >
                    <LaunchIcon />
                </IconButton>
            </Stack>

            <Divider sx={{width: '100%', my: 2}}/>
        </>
    );
} 

export default PublicationCard;