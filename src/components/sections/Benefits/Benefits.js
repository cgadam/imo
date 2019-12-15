import React, { useEffect, useState } from 'react';
import config from '../../../../config';

export default function Benefits() {
  const [beneficios, setBeneficios] = useState([]);
  useEffect(() => {
    const loadBeneficios = async() => {
      const imagesLoaded = await Promise.all(config.beneficios.map((beneficio) => {
        return Promise.all([beneficio.getImg(), beneficio.getActiveImg()]);
      }));
      const beneficios = imagesLoaded.map((imageLoadedArr, index) => {
        const [imgUrl, activeImgUrl] = imageLoadedArr;
        return {
          name: config.beneficios[index].name,
          active: false,
          imgUrl: imgUrl.default,
          activeImgUrl: activeImgUrl.default,
        }
      });
      setBeneficios(beneficios);
    };
    loadBeneficios();
  }, []);
  const handleBenefitFocus = ({currentTarget}) => {
    const newBeneficios = beneficios.map((beneficio) => ({
      ...beneficio,
      active: beneficio.name === currentTarget.alt,
    }));
    setBeneficios(newBeneficios);
  };
  const getBeneficiosTiles = () => {
    return beneficios.map((beneficio) => {
      const imgUrl = beneficio.active ? beneficio.activeImgUrl : beneficio.imgUrl;
      return (
        <li key={beneficio.name}>
          <img alt={beneficio.name} onMouseEnter={handleBenefitFocus} onTouchStart={handleBenefitFocus} className={`beneficio${beneficio.active ? ' beneficio--active' : ''}`} src={imgUrl} />
        </li>
      );
    });
  };
  return beneficios.length > 0 ? (
    <section id="one" className="wrapper style1 special" style={{
      paddingBottom: 0,
    }}>
      <div className="inner">
        <header className="major">
          <h2>
            Estamos en <b>MOVIMIENTO</b>
          </h2>
          <p style={{
            marginBottom: 10,
          }}>
            Nuestros cuerpos fueron diseñados para moverse. 
          </p>
          <p style={{
            marginBottom: 10,
          }}>
          Nos movemos{' '}
            <b>
              <i>jugando, bailando, experimentando, creando.</i>
            </b>
            <br />
          </p>
          <p style={{
            marginBottom: 10,
          }}>
            Nos movemos{' '}
            <b>
              <i>dormidos, activos, despiertos y alegres.</i>
            </b>
            <br />
             Nos movemos para construir y construirnos.
          </p>
          <p style={{
            marginBottom: 25,
            fontSize: 25,
            lineHeight: 'normal',
            fontWeight: 800,
          }}>Nos movemos para avanzar</p>
        </header>
        <ul className="benefits">
        { getBeneficiosTiles() }
        </ul>
      </div>
    </section>
  ) : null;
}
