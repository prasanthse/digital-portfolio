import { Stack, Typography } from "@mui/material";
import content from '../../data/profile.json';
import CircleIcon from '@mui/icons-material/Circle';
import './theEnd.css';

const TheEnd = () => {
    return (
        <>
            <Stack
                direction='row'
                justifyContent='center'
                alignItems='center'
                position='relative'
                className="layoutMarginX"
                py={{xs: 15, md: 20}}
            >
                <CircleIcon 
                    color="primary"
                    sx={{
                        position: 'absolute',
                        zIndex: -1,
                        width: 200,
                        height: 200,
                        animation: 'endCircleAnimation 1s infinite'
                    }}
                />

                <Typography 
                    fontWeight={300}
                    fontSize={{xs: 20, md: 20, lg: 30}}
                    lineHeight={1.25}
                    textAlign='center'
                >
                    {content.end}
                </Typography>
            </Stack>
        </>
    );
}

export default TheEnd;