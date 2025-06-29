import { Card, Stack, useTheme } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AcademicTimelineDescription = ({
    major,
    school,
    description,
    index
}) => {
    const theme = useTheme();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <Card
                elevation={0}
                sx={{
                    borderRadius: '16px',
                    p: 5
                }}
                data-aos={index %2 === 0 ? "flip-left" : "flip-right"}
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
                            textAlign: 'justify',
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