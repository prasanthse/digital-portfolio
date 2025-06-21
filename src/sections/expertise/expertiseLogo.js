import { Stack, Typography } from '@mui/material';

const ExpertiseLogo = ({
    logo,
    label
}) => {
    return (
        <>
            <Stack
                direction='column'
                justifyContent='end'
                alignItems='center'
                height={150}
            >
                <img 
                    src={logo} 
                    alt={label} 
                    width={100}
                />

                <Typography
                    fontWeight={600}
                    pt={2}
                    color="#888888"
                >
                    {label}
                </Typography>
            </Stack>
        </>
    );
}

export default ExpertiseLogo;