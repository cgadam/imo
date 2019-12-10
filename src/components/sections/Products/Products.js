import React, { useState, useEffect } from 'react';
import config from '../../../../config';

const getSpotLightSection = ({title, description, imgSrc}) => {
  return (
    <section key={title} className="spotlight">
      <div className="image">
        <img src={imgSrc} alt="GIF" />
      </div>
      <div className="content">
        <h2>
          <b>{title}</b>
        </h2>
        <p>
          {description}
        </p>
      </div>
    </section>
  );
};

const Products = () => {
  const [productsInfo, setProductsInfo] = useState([]);
  useEffect(() => {
    const { products } = config;
    const loadProductInfo = async () => {
      const deferProductInfo = await Promise.all(products.map(async (productInfo) => {
        const { imgSrc } = productInfo;
        const delayedImgSrc = await imgSrc();
        return {
          ...productInfo,
          imgSrc: delayedImgSrc.default,
        };
      }));
      setProductsInfo(deferProductInfo);
    };
    loadProductInfo();
  }, []);
  if (productsInfo.length === 0)
    return null;
  
  const products = productsInfo.map((productInfo) => getSpotLightSection(productInfo));

  return (
    <section id="two" className="wrapper alt style2">
      <div style={{
        textAlign: 'center',
        backgroundColor: 'black',
        margin: 0,
        height: '4em',
      }}>
        <h2 style={{
          margin: 0,
          fontSize: '30px',
        }}><b>Productos</b></h2>
      </div>
      { products }
    </section>
  );
};

export default Products;
