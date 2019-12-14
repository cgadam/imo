import React, { useEffect, useState } from 'react';
import config from '../../../../config';

const Features = () => {
  const [features, setFeatures] = useState([]);
  const getFeatureTile = ({ title, description, imgUrl, index }) => {
    return (
      <li key={index}>
        <div className="feature-image">
          <img alt={title} src={imgUrl}></img>
        </div>
        <div>
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{__html: description.replace(/\n/g, '<br>')}}></p>
        </div>
      </li>
    );
  };
  useEffect(() => {
    const initializeFeatures = async () => {
      const configuredFeatures = config.features;
      const imagesUrls = await Promise.all(
        configuredFeatures.map(({ getImg }) => getImg())
      );
      const featureTiles = configuredFeatures.map(
        ({ title, description }, index) =>
          getFeatureTile({
            title,
            description,
            imgUrl: imagesUrls[index].default,
            index,
          })
      );
      setFeatures(featureTiles);
    };
    initializeFeatures();
  }, []);

  return features ? (
    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Mas detalles</h2>
          <p>
            Los materiales y tecnologías de primera calidad están presentes en
            cada producto.
          </p>
        </header>
        <ul className="features">{features}</ul>
      </div>
    </section>
  ) : null;
};

export default Features;
