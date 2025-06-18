import { Typography, useTheme } from "@mui/material";
import { useCallback } from "react";

const TitleComponent = ({
    title,
    textAlign="center",
    richText=true,
    ...other
}) => {
    const theme = useTheme();

    const getTitlePrefix = useCallback(() => {
        const lastWordIndex = title.lastIndexOf(' ');
        return title.substring(0, lastWordIndex);
    }, [title]);

    const getTitleSuffix = useCallback(() => {
        const lastWordIndex = title.lastIndexOf(' ');
        return title.substring(lastWordIndex);
    }, [title]);

    return(
        <>
            <Typography
                fontWeight={700}
                fontSize={{xs: 30, md: 40, lg: 60}}
                lineHeight={1.25}
                textAlign={textAlign}
                {...other}
            >
                {getTitlePrefix()} <span style={{color: richText ? theme.palette.primary.main : 'black'}}>{getTitleSuffix()}</span>
            </Typography>
        </>
    );
}

export default TitleComponent;