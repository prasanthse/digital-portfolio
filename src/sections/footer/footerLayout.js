import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const FooterLayout = () => {
    const theme = useTheme();

    return (
        <>
            <Stack
                direction={{xs: 'column-reverse', md: 'row'}}
                justifyContent={{xs: 'center', md: 'space-between'}}
                alignItems='center'
                width='100%'
                pt={10}
                pb={2}
                sx={{
                    background: `linear-gradient(180deg, rgb(255, 255, 255) 1%, ${theme.palette.primary.main})`
                }}
            >
                <Link
                    to="https://github.com/prasanthse/digital-portfolio.git"
                    style={{ 
                        textDecoration: 'none'
                    }}
                >
                    <Typography
                        fontWeight={900}
                        fontSize={12}
                        textAlign={{xs: 'center', md: 'right'}}
                        color="white"
                        textTransform='uppercase'
                        pl={{xs: 0, md: 10}}
                        sx={{
                            '&: hover': {
                                transform: 'scale(1.1)'
                            }
                        }}
                    >
                        © 2025 Prasanth. Open source and reusable.
                    </Typography>
                </Link>

                <Typography
                    fontWeight={900}
                    fontSize={60}
                    textAlign='center'
                    color="white"
                    textTransform='uppercase'
                    ml={{xs: 0, md: -10}}
                >
                    RESUME
                </Typography>

                {/* Developer */}
                <Stack
                    direction='column'
                    justifyContent='center'
                    alignItems={{xs: 'center', md: 'end'}}
                    pr={{xs: 0, md: 10}}
                    pb={{xs: 3, md: 0}}
                >
                    <Typography
                        fontWeight={900}
                        fontSize={12}
                        textAlign={{xs: 'center', md: 'right'}}
                        color="white"
                        textTransform='uppercase'
                    >
                        Proudly Developed by
                    </Typography>

                    <Link
                        to="mailto:prasanth@techserw.com"
                        style={{ 
                            textDecoration: 'none'
                        }}
                    >
                        <Typography
                            fontWeight={600}
                            fontSize={12}
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
                </Stack>
            </Stack>
        </>
    );
}

export default FooterLayout;