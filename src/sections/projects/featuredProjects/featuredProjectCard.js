import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const FeaturedProjectCard = ({item}) => {
    return(
        <>
            <Link to={`/project/${item.area}/${item.id + 1}`}>
                <Box 
                    sx={{
                        backgroundImage:`url(${process.env.PUBLIC_URL}/${item.thumbnail})`,
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

export default FeaturedProjectCard;