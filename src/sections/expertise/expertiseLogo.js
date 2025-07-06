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
                    width={80}
                />

                <Typography
                    fontWeight={600}
                    fontSize={14}
                    lineHeight={1.25}
                    pt={2}
                    color="#888888"
                    textAlign='center'
                >
                    {label}
                </Typography>
            </Stack>
        </>
    );
}

export default ExpertiseLogo;