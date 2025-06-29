import { SpeedDial } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const SpeedScroll = () => {
    return (
        <>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ 
                    position: 'fixed', 
                    bottom: 30, 
                    right: 30,
                    zIndex: 999
                }}
                icon={<ArrowUpwardIcon />}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
        </>
    );
}

export default SpeedScroll;