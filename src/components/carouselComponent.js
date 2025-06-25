import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = ({
  list,
  autoplay=true,
  vertical=false,
  centerMode=true,
  speed=500,
  slidesToShow=5,
  breakpointXsBreakpoint=2,
  breakpointSmBreakpoint=2,
  breakpointMdBreakpoint=2,
  breakpointLgBreakpoint=5,
  breakpointXlBreakpoint=6
}) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    centerMode: centerMode,
    pauseOnHover: true,
    swipeToSlide: true,
    vertical: vertical,
    speed: speed,
    autoplay: autoplay,
    className: "center",
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    rows: 1,
    className: "slider variable-width",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: breakpointXsBreakpoint
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: breakpointSmBreakpoint
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: breakpointMdBreakpoint
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: breakpointLgBreakpoint
        }
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: breakpointXlBreakpoint
        }
      }
    ]
  };

  return(
    <>
      <div 
        className="slider-container" 
        style={{
          width: '90%',
          margin: 'auto'
        }}
      >
        <Slider {...settings}>
          {
            list.map((item, index) => {
              return <div key={index}>{item}</div>
            })
          }
        </Slider>
      </div>
    </>
  );
}

export default CarouselComponent;