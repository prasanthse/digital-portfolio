import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarGroup, Box, Divider, Drawer, IconButton, Stack, Tooltip, Typography, useTheme } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LaunchIcon from '@mui/icons-material/Launch';

const carouselSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    centerMode: false,
    pauseOnHover: true,
    swipeToSlide: true,
    vertical: true,
    speed: 1000,
    autoplay: true,
    className: "center",
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    className: "slider variable-width"
};

const WorkExperienceListRow = ({item, lastItem}) => {
    const theme = useTheme();

    const groupRef = useRef(null);

    const [drawerState, setDrawerState] = useState(false);

    useEffect(() => {
        const groupNode = groupRef.current;

        if (!groupNode) return;

        const handleClick = (e) => {
            const target = e.target;

            if (target?.innerText?.startsWith('+')) {
                setDrawerState(true);
            }
        };

        groupNode.addEventListener('click', handleClick);

        return () => groupNode.removeEventListener('click', handleClick);
    }, []);

    return (
        <>
            <Stack
                direction='column'
                alignItems='start'
                justifyContent='center'
                width='100%'
            >
                {/* Title, Duration and Tech Stacks */}
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    width='100%'
                >
                    {/* Title, and Duration */}
                    <Stack
                        direction='column'
                        alignItems='start'
                        justifyContent='center'
                        spacing={0.5}
                    >
                        {/* Title */}
                        <Typography
                            fontWeight={400}
                            fontSize={18}
                        >
                            {item.role}
                        </Typography>

                        {/* Duration */}
                        <Typography
                            fontWeight={400}
                            fontSize={12}
                            color="#666666"
                        >
                            {item.duration}
                        </Typography>
                    </Stack>

                    {/* Tech Stacks */}
                    <AvatarGroup 
                        max={4}
                        spacing={6}
                        sx={{
                            '& .MuiAvatar-root': {
                                border: '1px solid #EEEEEE'
                            },
                            '& .MuiAvatarGroup-avatar': {
                                backgroundColor: 'white',
                                color: theme.palette.primary.main,
                                fontWeight: 'bold',
                                "&: hover": {
                                    cursor: 'pointer',
                                    transform: 'scale(1.1)'
                                }
                            }
                        }}
                        ref={groupRef}
                    >
                        {
                            item.teck_stacks.map((logoItem, index) => {
                                return <Tooltip key={index} title={logoItem.label}>
                                    <Avatar 
                                        sx={{ 
                                            backgroundColor: 'white'
                                        }}
                                    >
                                        <img 
                                            src={logoItem.path}
                                            alt={logoItem.label}
                                            style={{
                                                width: '70%',
                                                borderRadius: '50%'
                                            }}
                                        />
                                    </Avatar>
                                </Tooltip>
                            })
                        }
                    </AvatarGroup>
                </Stack>

                {/* Images, Description and Link */}
                <Stack
                    direction={{xs: 'column', md: 'row'}}
                    justifyContent={{xs: 'center', md: 'space-between'}}
                    alignItems='start'
                >
                    {/* Images, and Description */}
                    <Stack
                        direction={{xs: 'column', md: 'row'}}
                        justifyContent='start'
                        alignItems={{xs: 'center', md: 'start'}}
                    >
                        {/* Images */}
                        <Stack
                            direction='row'
                            justifyContent='start'
                            alignItems='center'
                        >
                            {
                                item.company.images.length > 0
                                ?
                                <>
                                {
                                    item.company.images.length === 1
                                    ?
                                    <Box
                                        width={250}
                                        height={141}
                                        my={3}
                                    >
                                        <img 
                                            alt='Working still'
                                            src={item.company.images[0]} 
                                            width='100%'
                                            style={{
                                                borderRadius: '16px'
                                            }}
                                        />
                                    </Box>
                                    :
                                    <Box
                                        my={3}
                                        sx={{
                                            width: 250,
                                            height: 141
                                        }}
                                    >
                                        <div className="slider-container">
                                            <Slider {...carouselSettings}>
                                                {
                                                    item.company.images.map((companyImg, index) => {
                                                        return <div key={index}>
                                                            <Box>
                                                                <img 
                                                                    alt={`Working still ` + index} 
                                                                    src={companyImg} 
                                                                    width='100%'
                                                                    style={{
                                                                        borderRadius: '16px'
                                                                    }}
                                                                />
                                                            </Box>
                                                        </div>
                                                    })
                                                }
                                            </Slider>
                                        </div>
                                    </Box>
                                }
                                </>
                                :
                                <></>
                            }
                        </Stack>

                        {/* Description */}
                        <Typography
                            fontWeight={300}
                            fontSize={{xs: 14, md: 12, lg: 14}}
                            textAlign='justify'
                            lineHeight={2}
                            color="#222222"
                            pt={2}
                            pl={{xs: 0, md: item.company.images.length > 0 ? 4 : 0}}
                        >
                            {item.description}
                        </Typography>
                    </Stack>

                    {/* Link */}
                    {
                        item.company.link.trim().length > 0
                        ?
                         <Stack
                            direction='column'
                            alignItems='center'
                            justifyContent='center'
                            pl={{xs: 0, md: 5, lg: 10}}
                            py={{xs: 2, md: 0}}
                            display='flex'
                            margin='auto'
                        >
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
                                    }
                                }}
                                onClick={() => {
                                    window.open(item.company.link, "_blank");
                                }}
                            >
                                <LaunchIcon />
                            </IconButton>
                        </Stack>
                        :
                        <></>
                    }
                </Stack>

                {
                    lastItem
                    ?
                    <></>
                    :
                    <Divider sx={{width: '100%', mt: 2}}/>
                }
            </Stack>

            {/* Tech Stacks List */}
            <Drawer 
                anchor="bottom"
                open={drawerState} 
                onClose={() => setDrawerState(false)}
                slotProps={{
                    backdrop: {
                        invisible: true
                    },
                    paper: {
                        elevation: 10,
                        square: false,
                        style: {
                            borderRadius: '32px',
                            bottom: 10,
                            marginLeft: 10,
                            marginRight: 10,
                            zIndex: 1
                        }
                    },
                }}
            >
                <Stack
                    direction='row'
                    justifyContent={{xs: 'start', md: 'center'}}
                    alignItems='center'
                    width='100%'
                    px={2}
                    spacing={2}
                    sx={{
                        overflowX: 'scroll'
                    }}
                    className="hideScrollBar"
                >
                    {
                        item.teck_stacks.map((logoItem, index) => {
                            return <Tooltip key={index} title={logoItem.label}>
                                <Avatar 
                                    sx={{
                                        backgroundColor: 'white',
                                        width: {xs: 50, md: 70, lg: 100}, 
                                        height: {xs: 50, md: 70, lg: 100}, 
                                        py: 3
                                    }}
                                >
                                    <img 
                                        src={logoItem.path}
                                        alt={logoItem.label}
                                        style={{
                                            width: '70%',
                                            borderRadius: '50%'
                                        }}
                                    />
                                </Avatar>
                            </Tooltip>
                        })
                    }
                </Stack>
            </Drawer>
        </>
    );
}

export default WorkExperienceListRow;