import React, { lazy } from 'React';
import LazyInView from '../../utils/LazyInView';

const Footer = lazy(() => import('./Footer'));

const LazyFooter = () => {
  return (
    <LazyInView>
      <Footer></Footer>
    </LazyInView>
  );
}

export default LazyFooter;