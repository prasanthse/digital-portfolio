import { useEffect } from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllProjectsList = ({area, imgList}) => {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);

    return (
        <>
            <ImageList
                sx={{ width: '100%' }}
                variant="quilted"
                cols={imgList.length > 1 ? 2 : 1}
                rowHeight={window.innerWidth < 600 ? 200 : 400}
            >
                {
                    imgList.map((item, index) => (
                        <Link 
                            to={`/project/${area}/${index + 1}`}
                            key={index} 
                        >
                            <ImageListItem 
                                data-aos="zoom-in"
                                data-aos-once={true}
                            >
                                <img
                                    srcSet={`${item.thumbnail}?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.thumbnail}?w=400&h=400&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{
                                        borderRadius: '16px',
                                        "&:hover": {
                                            transform: 'scale(0.2)'
                                        }
                                    }}
                                />

                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={item.tag_line}
                                    sx={{
                                        borderRadius: '0px 0px 16px 16px'
                                    }}
                                />
                            </ImageListItem>
                        </Link>
                    ))
                }
            </ImageList>
        </>
    );
}

export default AllProjectsList;