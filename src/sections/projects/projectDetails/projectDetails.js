import { Avatar, Box, Card, Grid, IconButton, ListItem, ListItemIcon, ListItemText, Rating, Stack, Tooltip, Typography, useTheme } from "@mui/material";
import ErrorView from '../../../components/errorView';
import YouTube from 'react-youtube';
import { useCallback, useEffect, useRef, useState } from "react";
import AboutMeInfoCard from "../../aboutMe/aboutMeInfoCard";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import FooterLayout from "../../../sections/footer/footerLayout";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GalleryImage = (imgPath, index) => {
    return <img 
        key={index}
        src={`${process.env.PUBLIC_URL}/${imgPath}`} 
        alt="Gallery" 
        width='100%'
        style={{
            borderRadius: '16px',
            maxHeight: '500px'
        }}
    />
}

const SubHeading = (heading) => {
    return <Typography
        fontWeight={600}
        fontSize={{xs: 16, md: 20, lg: 24}}
    >
        {heading}
    </Typography>
}

const Platform = (icon, label, link) => {
    return <Link
        to={link}
        style={{ 
            textDecoration: 'none'
        }}
    >
        <Card
            elevation={5}
            sx={{
                "&:hover": {
                    transform: 'scale(0.9)'
                }
            }}
        >
            <Stack
                direction='column'
                justifyContent='center'
                alignItems='center'
                px={5}
                py={2}
                spacing={2}
            >
                <Box
                    sx={{
                        width: 40,
                        height: 40
                    }}
                >
                    <img 
                        src={`${process.env.PUBLIC_URL}/${icon}`}
                        alt={label}
                        width='100%'
                    />
                </Box>

                <Typography 
                    fontWeight={600}
                    fontSize={{xs: 14, md: 12, lg: 14}}
                >
                    {label}
                </Typography>
            </Stack>
        </Card>
    </Link>
}

const mobileMargin = 5;
const pcMargin = 7;

const ProjectDetails = ({project}) => {
    const theme = useTheme();

    const {t} = useTranslation();

    const [youtubeVideoError, setYoutubeVideoError] = useState(null);

    const OnYoutubeError = useCallback((event) => {
        // The event contains a data property with the error code.
        const errorCode = event.data;

        // Map the YouTube error code to a readable message
        let errorMessage = '';
        
        switch (errorCode) {
            case 2:
                errorMessage = t(`errors.youtube_video.invalid`);
                break;
            case 5:
                errorMessage = t(`errors.youtube_video.player_error`);
                break;
            case 100:
                errorMessage = t(`errors.youtube_video.not_found`);
                break;
            case 101:
            case 150:
                errorMessage = t(`errors.youtube_video.restricted`);
                break;
            default:
                errorMessage = t(`errors.youtube_video.unknown`);
        }

        setYoutubeVideoError(errorMessage);
    }, []);

    const hasYoutubeVideo = useCallback(() => {
        const url = project.gallery.youtube_link;

        return url != undefined && url.trim().length > 0;
    }, [project]);

    const getYoutubeVideoID = useCallback(() => {
        const url = project.gallery.youtube_link;

        var regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)[\w\-]{11}(?:[&?][^\s]*)?$/;
        var match = url.match(regExp);

        if (match) {
            const regExp = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
            return regExp.exec(project.gallery.youtube_link)[3];
        }
        else {
            setYoutubeVideoError(t(`errors.youtube_video.invalid`));

            return null;
        }
    }, [project]);

    const scrollRef = useRef(null);

    const scrollImages = useCallback((scrollOffset) => {
        if (scrollRef.current) {
            scrollRef.current?.scrollBy({
                left: scrollOffset,
                behavior: 'smooth',
            });
        }
    }, [scrollRef]);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const IsReleasesEmpty = useCallback(() => {
        return project.links.webURL.trim().length === 0 
        && project.links.playstore.trim().length === 0 
        && project.links.appstore.trim().length === 0 
        && project.links.other.trim().length === 0;
    }, [project]);

    return (
        <>
            <Box>
                <Stack
                    direction='column'
                    justifyContent='start'
                    alignItems='start'
                    width='100%'
                    pb={10}
                >
                    {/* Youtube */}
                    {
                        hasYoutubeVideo()
                        ?
                        <Box width='100%'>
                            {
                                youtubeVideoError
                                ?
                                <Box width='100%' py={10}>
                                    <ErrorView 
                                        errorDescription={youtubeVideoError}
                                        height="fit-content"
                                        needAnimations={false}
                                    />
                                </Box>
                                :
                                <Box width='100%' sx={{backgroundColor: 'black'}}>
                                    <YouTube 
                                        videoId={getYoutubeVideoID()}
                                        opts={{
                                            width: '100%',
                                            height: window.innerWidth < 600 ? 250 : 500,
                                            playerVars: {
                                                // https://developers.google.com/youtube/player_parameters
                                                autoplay: 0,
                                                color: 'white'
                                            }
                                        }}
                                        onError={OnYoutubeError}
                                        onReady={() => setYoutubeVideoError(null)}
                                    />
                                </Box>
                            }
                        </Box>
                        :
                        <></>
                    }

                    {/* Images, Associated With & Completion Date */}
                    <Grid
                        direction='row'
                        justifyContent='center'
                        alignItems='center'
                        container
                        className="layoutMarginX"
                        mt={{xs: mobileMargin, md: pcMargin}}
                        spacing={{xs: mobileMargin, md: pcMargin}}
                    >
                        {/* Images */}
                        <Grid size={{xs: 12, md: 6, lg: 8}} sx={{position: 'relative'}}>
                            {/* Images */}
                            <Stack
                                direction='row'
                                justifyContent='start'
                                alignItems='start'
                                width='100%'
                                spacing={2}
                                sx={{
                                    overflow: 'scroll',
                                    borderRadius: '16px'
                                }}
                                className="hideScrollBar"
                                ref={scrollRef}
                                data-aos="zoom-in"
                            >
                                {
                                    project.gallery.images.length === 0
                                    ?
                                    GalleryImage(project.thumbnail, 0)
                                    :
                                    project.gallery.images.map((item, index) => {
                                        return GalleryImage(item, index)
                                    })
                                }
                            </Stack>

                            {/* Left & Right Arrow */}
                            {
                                project.gallery.images.length > 1
                                ?
                                <>
                                    {/* Left Arrow */}
                                    <IconButton
                                        onClick={() => scrollImages(-100)}
                                        sx={{
                                            position: 'absolute',
                                            left: -20,
                                            top: {xs: '40%', md: '45%'},
                                            zIndex: 1,
                                            backgroundColor: 'white',
                                            boxShadow: 10,
                                            "&:hover": {
                                                backgroundColor: 'white',
                                                transform: 'scale(1.1)'
                                            }
                                        }}
                                    >
                                        <NavigateBeforeIcon />
                                    </IconButton>

                                    {/* Right Arrow */}
                                    <IconButton
                                        onClick={() => scrollImages(100)}
                                        sx={{
                                            position: 'absolute',
                                            right: -20,
                                            top: {xs: '40%', md: '45%'},
                                            zIndex: 1,
                                            backgroundColor: 'white',
                                            boxShadow: 10,
                                            "&:hover": {
                                                backgroundColor: 'white',
                                                transform: 'scale(1.1)'
                                            }
                                        }}
                                    >
                                        <NavigateNextIcon />
                                    </IconButton>
                                </>
                                :
                                <></>
                            }
                        </Grid>

                        {/* Associated With & Completion Date */}
                        <Grid size={{xs: 12, md: 6, lg: 4}}>
                            <Box
                                sx={{
                                    bgcolor: theme.palette.secondary.main,
                                    width: '100%',
                                    borderRadius: 4
                                }}
                                data-aos="flip-up"
                            >
                                <Stack
                                    direction='column'
                                    spacing={2}
                                    p={{xs: 3, md: 5}}
                                >
                                    {
                                        [
                                            {label: t(`projects.projectDetails.associated`), value: project.associated_with, path: "images/icons/collaboration.png"},
                                            {label: t(`projects.projectDetails.completion`), value: project.released_date, path: "images/icons/completion.png"}
                                        ].map((item, index) => {
                                            return <AboutMeInfoCard 
                                                key={index}
                                                label={item.label}
                                                value={item.value.trim().length > 0 ? item.value : t(`errors.unknown`)}
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
                        </Grid>
                    </Grid>

                    {/* Description */}
                    {
                        project.description.trim().length > 0
                        ?
                        <div 
                            width='100%' 
                            className="layoutMarginX"
                        >
                            <Stack
                                direction='column'
                                justifyContent='center'
                                alignItems='start'
                                width='100%'
                                spacing={2}
                                pt={{xs: mobileMargin, md: pcMargin}}
                            >
                                {SubHeading(t(`projects.projectDetails.about`))}

                                <Typography 
                                    fontSize={{xs: 12, md: 12, lg: 14}}
                                    color="#222222"
                                    width='100%'
                                    textAlign='justify'
                                    style={{ 
                                        wordWrap: "break-word",
                                        lineHeight: 1.5
                                    }}
                                    data-aos="fade-up"
                                >
                                    {project.description}
                                </Typography>
                            </Stack>
                        </div>
                        :
                        <></>
                    }

                    {/* Features */}
                    {
                        project.features.length > 0
                        ?
                        <div 
                            width='100%' 
                            className="layoutMarginX"
                        >
                            <Stack
                                direction='column'
                                justifyContent='center'
                                alignItems='start'
                                width='100%'
                                pt={{xs: mobileMargin, md: pcMargin}}
                                spacing={2}
                            >
                                {SubHeading(t(`projects.projectDetails.features`))}

                                {
                                    project.features.map((item, index) => {
                                        return <ListItem key={index} dense={true} data-aos="fade-up">
                                            <ListItemIcon>
                                                <Avatar
                                                    sx={{
                                                        width: 30,
                                                        height: 30,
                                                        backgroundColor: theme.palette.primary.main,
                                                        fontSize: 12,
                                                        fontWeight: 600
                                                    }}
                                                >
                                                    {index + 1}
                                                </Avatar>
                                            </ListItemIcon>
                                            
                                            <ListItemText 
                                                primary={item} 
                                                slotProps={{
                                                    primary: {
                                                        fontSize: {xs: 12, md: 12, lg: 14},
                                                        color: "#222222",
                                                        width: '100%',
                                                        textAlign: 'left',
                                                        style: { 
                                                            wordWrap: "break-word",
                                                            lineHeight: 1.5
                                                        }
                                                    }
                                                }}
                                            />
                                        </ListItem>
                                    })
                                }
                            </Stack>
                        </div>
                        :
                        <></>
                    }
                    
                    {/* Releases & Technology Stacks */}
                    {
                        IsReleasesEmpty() && project.tech_stacks.length === 0
                        ?
                        <></>
                        :
                        <Grid
                            direction='row'
                            justifyContent='start'
                            alignItems='start'
                            container
                            className="layoutMarginX"
                            pt={{xs: mobileMargin, md: pcMargin}}
                            width='90%'
                            maxWidth='90%'
                            spacing={{xs: mobileMargin, md: pcMargin}}
                        >
                            {/* Releases */}
                            {
                                IsReleasesEmpty()
                                ?
                                <></>
                                :
                                <Grid 
                                    size={{xs: 12, md: project.tech_stacks.length > 0 ? 6 : 12}}
                                >
                                    <Stack
                                        direction='column'
                                        justifyContent='center'
                                        alignItems='start'
                                        spacing={2}
                                    >
                                        {SubHeading(t(`projects.projectDetails.available`))}

                                        <Stack
                                            direction='row'
                                            justifyContent='start'
                                            alignItems='center'
                                            spacing={2}
                                            className="hideScrollBar"
                                            width='90%'
                                            maxWidth='90%'
                                            sx={{
                                                overflowX: 'scroll',
                                                py: 1,
                                                px: 1
                                            }}
                                            data-aos="fade-up"
                                        >
                                            {
                                                project.links.playstore
                                                ?
                                                Platform('images/icons/playstore.png', t(`projects.projectDetails.platforms.playstore`), project.links.playstore)
                                                :
                                                <></>
                                            }

                                            {
                                                project.links.appstore
                                                ?
                                                Platform('images/icons/appstore.png', t(`projects.projectDetails.platforms.appstore`), project.links.appstore)
                                                :
                                                <></>
                                            }

                                            {
                                                project.links.webURL
                                                ?
                                                Platform('images/icons/web-link.png', t(`projects.projectDetails.platforms.webURL`), project.links.webURL)
                                                :
                                                <></>
                                            }

                                            {
                                                project.links.other
                                                ?
                                                Platform('images/icons/other.png', t(`projects.projectDetails.platforms.other`), project.links.other)
                                                :
                                                <></>
                                            }
                                        </Stack>
                                    </Stack>
                                </Grid>
                            }

                            {/* Technology Stacks */}
                            {
                                project.tech_stacks.length > 0
                                ?
                                <Grid size={{xs: 12, md: IsReleasesEmpty() ? 12 : 6}}>
                                    <Stack
                                        direction='column'
                                        justifyContent='center'
                                        alignItems='start'
                                        width='100%'
                                        spacing={2}
                                    >
                                        {SubHeading(t(`projects.projectDetails.tech_stacks`))}

                                        <Stack
                                            direction='row'
                                            justifyContent='start'
                                            alignItems='center'
                                            width='100%'
                                            spacing={2}
                                            sx={{
                                                overflowX: 'scroll',
                                                borderRadius: '16px'
                                            }}
                                            className="hideScrollBar"
                                            data-aos="fade-up"
                                        >
                                            {
                                                project.tech_stacks.map((item, index) => {
                                                    return <Tooltip
                                                        key={index}
                                                        title={item.label}
                                                    >
                                                        <Box
                                                            sx={{
                                                                width: {xs: '80px', md: '100px'}
                                                            }}
                                                        >
                                                            <img 
                                                                src={`${process.env.PUBLIC_URL}/${item.path}`}
                                                                alt={item.label}
                                                                style={{
                                                                    width: '100%'
                                                                }}
                                                            />
                                                        </Box>
                                                    </Tooltip>
                                                })
                                            }
                                        </Stack>
                                    </Stack>
                                </Grid>
                                :
                                <></>
                            }
                        </Grid>
                    }

                    {/* Client */}
                    {
                        project.client.avatar === "" 
                        && project.client.name.trim().length === 0 
                        && project.client.rating === 0 
                        && project.client.review.trim().length === 0
                        ?
                        <></>
                        :
                        <div 
                            width='100%' 
                            className="layoutMarginX"
                        >
                            <Stack
                                direction='column'
                                justifyContent='center'
                                alignItems='start'
                                width='100%'
                                pt={{xs: mobileMargin, md: pcMargin}}
                                data-aos="fade-up"
                            >
                                {SubHeading(t(`projects.projectDetails.client`))}

                                <div style={{marginTop: '16px'}}></div>
                            
                                {/* Avatar */}
                                {
                                    project.client.avatar === ""
                                    ?
                                    <></>
                                    :
                                    <>
                                        {
                                            project.client.link.trim().length > 0
                                            ?
                                            <Link 
                                                to={project.client.link} 
                                                target="_blank"
                                            >
                                                <Avatar 
                                                    src={`${process.env.PUBLIC_URL}/${project.client.avatar}`}
                                                    sx={{
                                                        "&:hover": {
                                                            transform: 'scale(1.1)'
                                                        }
                                                    }}
                                                />
                                            </Link>
                                            :
                                            <Avatar 
                                                src={`${process.env.PUBLIC_URL}/${project.client.avatar}`}
                                            />
                                        }
                                    </>
                                }

                                {/* Name */}
                                {
                                    project.client.name.trim().length === 0
                                    ?
                                    <></>
                                    :
                                    <>
                                        {
                                            project.client.link.trim().length > 0
                                            ?
                                            <Link 
                                                to={project.client.link} 
                                                target="_blank"
                                                style={{ 
                                                    textDecoration: 'none'
                                                }}
                                            >
                                                <Typography 
                                                    fontSize={{xs: 12, md: 12, lg: 14}}
                                                    color="black"
                                                    width='100%'
                                                    textAlign='justify'
                                                    fontWeight={600}
                                                    pt={1}
                                                    pb={2}
                                                    style={{ 
                                                        wordWrap: "break-word",
                                                        lineHeight: 1.5
                                                    }}
                                                >
                                                    {project.client.name}
                                                </Typography>
                                            </Link>
                                            :
                                            <Typography 
                                                fontSize={{xs: 12, md: 12, lg: 14}}
                                                color="black"
                                                width='100%'
                                                textAlign='justify'
                                                fontWeight={600}
                                                pt={1}
                                                pb={2}
                                                style={{ 
                                                    wordWrap: "break-word",
                                                    lineHeight: 1.5
                                                }}
                                            >
                                                {project.client.name}
                                            </Typography>
                                        }
                                    </>
                                }

                                {/* Rating */}
                                {
                                    project.client.rating > 0
                                    ?
                                    <Rating 
                                        name="half-rating" 
                                        precision={0.5} 
                                        value={project.client.rating}
                                        readOnly
                                        size="small"
                                        sx={{
                                            ml: -0.5,
                                            mt: 0,
                                            mb: 1
                                        }}
                                    />
                                    :
                                    <></>
                                }

                                {/* Review */}
                                {
                                    project.client.review.trim().length === 0
                                    ?
                                    <></>
                                    :
                                    <Typography 
                                        fontSize={{xs: 10, md: 10, lg: 12}}
                                        color="#666666"
                                        width='100%'
                                        textAlign='justify'
                                        style={{ 
                                            wordWrap: "break-word",
                                            lineHeight: 1.5
                                        }}
                                    >
                                        <span style={{fontWeight: 900}}>"</span>
                                        <i>{project.client.review}</i>
                                        <span style={{fontWeight: 900}}>"</span>
                                    </Typography>
                                }
                            </Stack>
                        </div>
                    }
                </Stack>
            </Box>

            <FooterLayout />
        </>
    );
}

export default ProjectDetails;