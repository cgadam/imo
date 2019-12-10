import React from 'react';
import Scroll from '../../utils/Scroll';

export default function Banner() {
  return (
    <section id="banner">
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          VER MÁS
        </a>
      </Scroll>
    </section>
  );
}
