import { Avatar, IconButton, Stack } from "@mui/material";
import content from '../../data/profile.json';

const ConnectWithMeLogos = () => {
    const getLogos = (label, src, width, link) => 
    <IconButton 
        aria-label={label}
        onClick={() => {
            window.open(link, '_blank');
        }}
        className="onMouseOver"
        sx={{
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);'
        }}
    >
        <Avatar 
            alt={label} 
            src={src} 
            sx={{
                width: width,
                height: width
            }}
        />
    </IconButton>

    return (
        <>
            <Stack
                direction='row'
                justifyContent='start'
                alignItems='center'
                spacing={1}
                className="layoutMarginX"
                pl={5}
                pb={2}
            >
                {getLogos("Email", "/images/connect me/gmail.png", 20, content.connect_me.email)}
                {getLogos("Upwork", "/images/connect me/upwork.png", 30, content.connect_me.other)}
                {getLogos("Github", "/images/connect me/github.png", 40, content.connect_me.github)}
                {getLogos("Medium", "/images/connect me/medium.png", 50, content.connect_me.medium)}
                {getLogos("Linkedin", "/images/connect me/linkedin.png", 60, content.connect_me.linkedIn)}
            </Stack>
        </>
    );
}

export default ConnectWithMeLogos;