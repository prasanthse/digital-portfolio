import { useState } from "react";
import { Box, Tab, Tabs, useTheme } from "@mui/material";
import content from '../../../data/profile.json';
import AllProjectsList from "./allProjectsList";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
    >
        {
            value === index && <Box 
                className="layoutMarginX"
                sx={{ 
                    pt: 2,
                    pb: 5,
                    backgroundColor: 'white'
                }}
            >
                {children}
            </Box>
        }
    </div>
  );
}

const AllProjectsTabs = () => {
    const theme = useTheme();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box 
                sx={{ 
                    maxWidth: '100%', 
                    backgroundColor: theme.palette.secondary.main,
                    pt: 8
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    textColor="primary"
                    indicatorColor="primary"
                    className="layoutMarginX"
                >
                    {
                        content.projects.map((item, index) => {
                            return <Tab 
                                key={index}
                                label={`${item.area} (${content.projects[index].list.length})`}
                                value={index}
                            />
                        })
                    }
                </Tabs>
            </Box>

            {
                content.projects.map((item, index) => {
                    return  <CustomTabPanel 
                        key={index}
                        value={value} 
                        index={index}
                    >
                        <AllProjectsList 
                            area={item.area}
                            imgList={item.list}
                        />
                    </CustomTabPanel>
                })
            }
        </>
    );
}

export default AllProjectsTabs;