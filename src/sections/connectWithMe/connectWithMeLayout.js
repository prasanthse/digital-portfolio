import { Stack, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import ConnectWithMeLogos from "./connectWithMeLogos";

const ConnectWithMeLayout = () => {
    const {t} = useTranslation();

    const theme = useTheme();

    return (
        <>
            <Stack
                direction='column'
                justifyContent='center'
                alignItems='start'
                pt={3}
                width='100%'
                sx={{
                    background: `linear-gradient(90deg,rgb(255, 255, 255) 0%, rgb(255, 255, 255) 40%, ${theme.palette.primary.main})`
                }}
            >
                <div className="layoutMarginX">
                    <Typography
                        fontWeight={600}
                        fontSize={{xs: 16, md: 12, lg: 16}}
                        pb={1}
                        className="layoutPaddingX"
                    >
                        {t(`connect_with_me`)}
                    </Typography>
                </div>

                <ConnectWithMeLogos />
            </Stack>
        </>
    );
}

export default ConnectWithMeLayout;