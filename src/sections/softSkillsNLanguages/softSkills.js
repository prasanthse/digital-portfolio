import { Avatar, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, useTheme } from "@mui/material";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../components/buttonComponent";
import content from '../../data/profile.json';
import TitleComponent from "../../components/titleComponent";

const SoftSkills = () => {
    const { t } = useTranslation();
    
    const theme = useTheme();

    return (
        <>
            <Stack
                direction='column'
                alignItems='start'
                textAlign='left'
                justifyContent='center'
                className='layoutMarginX layoutPaddingX'
                pt={{xs: 5, md: 5}}
                width={{xs: undefined, md: '80%'}}
                pl={0}
            >
                {/* Title */}
                <TitleComponent 
                    title={t('soft_skills')}
                    pb={2.5}
                    textAlign="left"
                />

                {/* Description */}
                <Typography
                    color="#222222"
                    fontWeight={300}
                    fontSize={{xs: 14, md: 12, lg: 14}}
                    lineHeight={2}
                    textAlign='justify'
                >
                    {content.soft_skills.description}
                </Typography>

                {/* Soft Skills */}
                <List
                    sx={{ 
                        width: '100%'
                    }}
                >
                    {
                        content.soft_skills.list.map((item, index) => {
                            return <ListItem key={index} dense={true}>
                                <ListItemIcon>
                                    <Avatar
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            backgroundColor: theme.palette.primary.main,
                                            fontSize: 12,
                                            fontWeight: 600
                                        }}
                                    >
                                        {index + 1}
                                    </Avatar>
                                </ListItemIcon>
                                
                                <ListItemText 
                                    primary={item} 
                                    slotProps={{
                                        primary: {
                                            fontWeight: 600,
                                            fontSize: {xs: 14, md: 12, lg: 14},
                                            lineHeight: 2,
                                            textAlign: 'left'
                                        }
                                    }}
                                />
                            </ListItem>
                        })
                    }
                </List>
            </Stack>
        </>
    );
}

export default SoftSkills;