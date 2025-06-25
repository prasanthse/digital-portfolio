import { Avatar, Card, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography, useTheme } from "@mui/material";
import GTranslateIcon from '@mui/icons-material/GTranslate';

const LanguagesCard = ({
    label,
    list,
    logo,
    cardSX
}) => {
    const theme = useTheme();

    return (
        <>
            <Card
                elevation={10}
                sx={{
                    borderRadius: {xs: 2, md: 2, lg: 4},
                    position: 'absolute',
                    display: 'inline-block',
                    width: 'fit-content',
                    ...cardSX
                }}
            >
                <Stack
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    p={{xs: 0.75, md: 1, lg: 2}}
                >
                    <Avatar 
                        alt="language" 
                        src={logo}
                        sx={{
                            width: {xs: 20, md: 30, lg: 40},
                            height: {xs: 20, md: 30, lg: 40}
                        }}
                    />

                    {/* Title */}
                    <Typography 
                        fontWeight={600}
                        fontSize={{xs: 10, md: 12, lg: 16}}
                        pt={1}
                    >
                        {label}
                    </Typography>

                    <List sx={{ width: '100%' }}>
                        {
                            list.map((item, index) => {
                                return <ListItem 
                                    key={index}
                                    sx={{
                                        py: 0
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar 
                                            alt={item.language}
                                            sx={{ 
                                                width: {xs: 22, md: 25, lg: 35}, 
                                                height: {xs: 22, md: 25, lg: 35},
                                                color: theme.palette.primary.main,
                                                backgroundColor: 'white',
                                                border: `1px solid black`
                                            }}
                                        >
                                            {item.language[0]}
                                        </Avatar>
                                    </ListItemAvatar>

                                    <ListItemText 
                                        primary={item.language}
                                        secondary={item.proficiency}
                                        slotProps={{
                                            primary: {
                                                fontSize: {xs: 10, md: 12, lg: 14},
                                                color: 'black',
                                                fontWeight: 600
                                            },
                                            secondary: {
                                                fontSize: {xs: 8, md: 8, lg: 10},
                                                color: "#222222"
                                            }
                                        }}
                                    />
                                </ListItem>
                            })
                        }
                    </List>
                </Stack>
            </Card>
        </>
    );
}

export default LanguagesCard;