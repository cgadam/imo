import React from 'react';
import LazyInView from '../../utils/LazyInView';
import GIF from '../../utils/GIF';

const PromoGIF = () => {
  return (
    <section>
      <LazyInView className="blackBackground">
        <GIF
          getSrc={() => import('../../../assets/images/gif/imo-gif-1.gif')}
        />
      </LazyInView>
    </section>
  );
};

export default PromoGIF;
