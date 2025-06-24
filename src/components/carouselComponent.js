import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = ({
  list,
  autoplay=true,
  vertical=false,
  speed=500
}) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    centerMode: true,
    pauseOnHover: true,
    swipeToSlide: true,
    vertical: vertical,
    speed: speed,
    autoplay: autoplay,
    className: "center",
    slidesToShow: 5,
    slidesToScroll: 1,
    rows: 1,
    className: "slider variable-width",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5
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