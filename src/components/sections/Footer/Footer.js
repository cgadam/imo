import React, { useEffect, useState } from 'react';
import config from '../../../../config';

export default function Footer() {
  const [contactLinks, setContactLinks] = useState();
  useEffect(() => {
    const loadIcons = async () => {
      const delayedContactLinks = await import(
        '../../../assets/images/contact-icons/index'
      );
      setContactLinks(delayedContactLinks.default);
    };
    loadIcons();
  }, []);
  return contactLinks ? (
    <section id="footer-section">
      <div className="footer-image">
        <div className="te-invitamos-a">
          <b>TE INVITAMOS A </b>
          TENER TU LUGAR IMO Y 
          <b> SEGUIR EN MOVIMIENTO.</b>
        </div>
      </div>
      <footer id="footer">
          <div className="contact-text">Podés contactarnos en:</div>
          <ul className="icons">
            {config.socialLinks.map(social => {
              const { name, icon, url } = social;
              return (
                <li key={url}>
                  <a href={url} className={`icon`}>
                    <img alt={name} src={contactLinks[icon]}></img>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="imo-logo"></div>
      </footer>
    </section>
  ) : null;
}
