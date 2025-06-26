import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const LatestProjectCard = ({item, index}) => {
    return(
        <>
            <Link to={`/project/${index + 1}`}>
                <Box 
                    sx={{
                        backgroundImage:`url(${item.thumbnail})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "100%",
                        aspectRatio: '1 / 0.5',
                        borderRadius: '16px',
                        "&:hover": {
                            transform: 'scale(0.95)'
                        }
                    }}
                />
            </Link>
        </>
    );
}

export default LatestProjectCard;