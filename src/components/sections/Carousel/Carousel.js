import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = ({images}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const slides = images.map((imgSrc, i) =>   
    <div key={i}>
      <img style={{
        width: '100%',
      }}src={imgSrc} alt='image'></img>
    </div>
  );
  return (
    <Slider {...settings}>
    { slides }
    </Slider>
  );
};

export default Carousel;