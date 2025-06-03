import { Box, Drawer, IconButton, List, ListItem, ListItemButton, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/buttonComponent";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const TopNavigationBar = () => {
    const { t } = useTranslation();
    const topNavigationLocale = "top_navigation";

    const navOptions = [
        {label: 'home', to: '/'},
        {label: 'about', to: '#about'},
        {label: 'projects', to: '#projects'}
    ];

    const [drawerState, setDrawerState] = useState(false);

    const [activeHash, setActiveHash] = useState('/');

    const navigate = useNavigate();

    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash || '/');
        };

        window.addEventListener('hashchange', handleHashChange);

        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const clickNavigate = useCallback((hash) => {
        setActiveHash(hash);
        navigate(hash);
    }, []);

    const contactMe = useCallback(() => {

    }, []);

    const toggleDrawer = useCallback((status) => {
        setDrawerState(status);
    }, []);

    const selectNavOptionInMobile = useCallback((hash) => {
        toggleDrawer(false);
        clickNavigate(hash);
    }, []);

    return (
        <>
            <Box>
                <Stack 
                    direction='row' 
                    justifyContent='space-between' 
                    alignItems='center'
                    bgcolor='white'
                    py={1}
                    px={5}
                    borderRadius={5}
                    className="layoutMarginX"
                >
                    <Link to='/'>
                        <img 
                            src="/logo.png" 
                            alt="Logo" 
                            width={80}
                            style={{
                                cursor: 'pointer'
                            }}
                        />
                    </Link>

                    {/* PC View */}
                    <Stack
                        direction='row' 
                        justifyContent='space-between' 
                        alignItems='center'
                        sx={{
                            display: {xs: 'none', md: 'flex'}
                        }}
                    >
                        <Stack
                            direction='row' 
                            justifyContent='space-between' 
                            alignItems='center'
                        >
                            {
                                navOptions.map((item, index) => {
                                    return <Link 
                                        key={index}
                                        onClick={() => clickNavigate(item.to)}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'black'
                                        }}
                                    >
                                        <Typography 
                                            px={3}
                                            className="onMouseOver"
                                            fontWeight={activeHash == item.to ? 600 : 300}
                                            style={{
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {t(`${topNavigationLocale}.${item.label}`)}
                                        </Typography>
                                    </Link>
                                })
                            }
                        </Stack>

                        <ButtonComponent 
                            label={t(`${topNavigationLocale}.contact`)}
                            onClick={contactMe}
                            sx={{
                                ml: {md: 5, lg: 10}
                            }}
                        />
                    </Stack>

                    {/* Mobile View */}
                    <IconButton
                        onClick={() => toggleDrawer(true)}
                        sx={{
                            display: {xs: 'flex', md: 'none'}
                        }}
                    >
                        <MenuIcon fontSize='large' />
                    </IconButton>

                    <Drawer 
                        anchor="right"
                        open={drawerState} 
                        onClose={() => toggleDrawer(false)}
                    >
                        <List>
                            {
                                navOptions.map((item, index) => {
                                    return <ListItem 
                                        disablePadding
                                        key={index}
                                    >
                                        <ListItemButton
                                            onClick={() => selectNavOptionInMobile(item.to)}
                                        >
                                            <Typography 
                                                py={2}
                                                px={5}
                                                className="onMouseOver"
                                                fontWeight={activeHash == item.to ? 600 : 300}
                                                style={{
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {t(`${topNavigationLocale}.${item.label}`)}
                                            </Typography>
                                        </ListItemButton>
                                    </ListItem>
                                })
                            }
                        </List>
                    </Drawer>
                </Stack>
            </Box>
        </>
    );
}

export default TopNavigationBar;