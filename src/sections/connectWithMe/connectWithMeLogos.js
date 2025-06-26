import { useEffect, useRef, useState } from "react";
import { Avatar, IconButton, Stack, Tooltip } from "@mui/material";
import content from '../../data/profile.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const minLogoSize = 20;
const maxLogoSize = 70;

const ConnectWithMeLogos = () => {
    const [logoSizeOffset, setLogoSizeOffset] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        if(content){
            setLogoSizeOffset((maxLogoSize - minLogoSize) / content.connect_me.length);
        }
    }, [content]);

    const getLogos = (label, src, width, link) => 
    <IconButton 
        aria-label={label}
        onClick={() => {
            window.open(link, '_blank');
        }}
        className="onMouseOver"
        data-aos="flip-right"
    >
        <Tooltip title={label}>
            <Avatar 
                alt={label} 
                src={src} 
                sx={{
                    width: width,
                    height: width,
                    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);',
                    bgcolor: 'white'
                }}
            />
        </Tooltip>
    </IconButton>

    return (
        <>
            <Stack
                direction='row'
                justifyContent='start'
                alignItems='center'
                spacing={0.75}
                className="layoutMarginX layoutLeft hideScrollBar"
                pb={2}
                sx={{
                    overflowX: 'scroll',
                    width: '85%'
                }}
            >
                {
                    content.connect_me.map((item, index) => {
                        return <div key={index}>
                            {getLogos(item.label, item.path, 20 + (index * logoSizeOffset), item.link)}
                        </div>
                    })
                }
            </Stack>
        </>
    );
}

export default ConnectWithMeLogos;