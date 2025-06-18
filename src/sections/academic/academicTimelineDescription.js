import { Card, Stack, Typography, useTheme } from "@mui/material";

const AcademicTimelineDescription = ({
    major,
    school,
    description
}) => {
    const theme = useTheme();

    return (
        <>
            <Card
                elevation={0}
                sx={{
                    borderRadius: '16px',
                    p: 5
                }}
            >
                <Stack
                    direction='column'
                    justifyContent='start'
                    alignItems='start'
                >
                    <h3 
                        style={{
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 600
                        }}
                    >
                        {major}
                    </h3>

                    <h4 
                        style={{
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 400,
                            fontSize: 12,
                            color:"#888888",
                            marginTop: -15
                        }}
                    >
                        {school}
                    </h4>

                    <p
                        style={{
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 300,
                            color:"#222222",
                            fontSize: 14,
                            lineHeight: 2,
                            marginTop: 1
                        }}
                    >
                        {description}
                    </p>
                </Stack>
            </Card>
        </>
    );
}

export default AcademicTimelineDescription;