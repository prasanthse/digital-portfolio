import { useCallback } from "react";
import ReviewCard from "./reviewCard";
import content from '../../data/profile.json';
import CarouselComponent from "../../components/carouselComponent";

const ReviewsList = () => {
    const getReviewsArray = useCallback(() => {
        const array = [];

        for(let i = 0; i < content.reviews.length; i++){
            array.push(
                <ReviewCard item={content.reviews[i]}/>
            )
        }

        return array;
    }, [content]);

    return (
        <>
            {
                window.innerWidth < 600
                ?
                <CarouselComponent 
                    list={getReviewsArray()}
                    speed={3000}
                    slidesToShow={1}
                    centerMode={false}
                    breakpointXsBreakpoint={1}
                    breakpointSmBreakpoint={1}
                    breakpointMdBreakpoint={1}
                    breakpointLgBreakpoint={1}
                    breakpointXlBreakpoint={1}
                />
                :
                <CarouselComponent 
                    list={getReviewsArray()}
                    speed={3000}
                    slidesToShow={1}
                    centerMode={true}
                    breakpointXsBreakpoint={1}
                    breakpointSmBreakpoint={1}
                    breakpointMdBreakpoint={1}
                    breakpointLgBreakpoint={1}
                    breakpointXlBreakpoint={1}
                />
            }
        </>
    );
}

export default ReviewsList;