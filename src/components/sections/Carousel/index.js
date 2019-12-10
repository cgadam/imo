import React, { useEffect, useState } from 'react';
import config from '../../../../config';
import Carousel from './Carousel';

const CarouselSection = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getCarouselImages = async () => {
      let imagesResolved = await Promise.all(config.carousel.map((getImgSrc) =>
        getImgSrc()
      ));
      imagesResolved = imagesResolved.map((imgResolved) => imgResolved.default);
      setImages(imagesResolved);
    }
    getCarouselImages();;
  }, []);

  return images.length > 0 ? (
    <section>
      <Carousel images={images}></Carousel>
    </section>
  ) : null;
};

export default CarouselSection;