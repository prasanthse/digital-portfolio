import { Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const FooterLayout = () => {
    const theme = useTheme();

    return (
        <>
            <Stack
                direction='row'
                justifyContent={{xs: 'center', md: 'end'}}
                alignItems='center'
                width='100%'
                py={3}
                sx={{
                    backgroundColor: theme.palette.primary.main
                }}
            >
                {/* Developer */}
                <Stack
                    direction='column'
                    justifyContent='center'
                    alignItems={{xs: 'center', md: 'end'}}
                    pr={{xs: 0, md: 10}}
                >
                    <Typography
                        fontWeight={900}
                        fontSize={14}
                        textAlign={{xs: 'center', md: 'right'}}
                        color="white"
                        textTransform='uppercase'
                    >
                        Credits to
                    </Typography>

                    <Link
                        to="mailto:prasanth@techserw.com"
                        style={{ 
                            textDecoration: 'none'
                        }}
                    >
                        <Typography
                            fontWeight={600}
                            fontSize={14}
                            textAlign={{xs: 'center', md: 'right'}}
                            color="white"
                            sx={{
                                '&: hover': {
                                    transform: 'scale(1.1)'
                                }
                            }}
                        >
                            Sivakumar Prasanth
                        </Typography>
                    </Link>

                    <Typography
                        fontWeight={400}
                        fontSize={10}
                        textAlign={{xs: 'center', md: 'right'}}
                        color="white"
                    >
                        Developer
                    </Typography>
                </Stack>
            </Stack>
        </>
    );
}

export default FooterLayout;