import React from 'react';

import Layout from '../components/layout/Layout';

import {
  Banner, 
  Benefits,
  PromoGIF,
  Products,
  Carousel,
  Features,
} from '../components/sections';

const IndexPage = () => (
  <Layout>
    <Banner />
    <Benefits />
    <PromoGIF />
    <Products />
    <Carousel />
    <Features />

{
  /*
  <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
 
  */
}   
    

 </Layout>
);

export default IndexPage;
