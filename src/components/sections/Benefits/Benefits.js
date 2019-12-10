import React from 'react';

export default function Benefits() {
  return (
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
          <li>
            <div className="benefits__molestia">
            </div>
          </li>
          <li>
            <div className="benefits__productividad">
            </div>
          </li>
          <li>
            <div className="benefits__energia">
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
