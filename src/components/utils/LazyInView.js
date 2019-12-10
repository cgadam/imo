import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyInView = ({ children, className, opts = { threshold: 0 } }) => {
  const [ref, inView] = useInView({
    ...opts,
    triggerOnce: true,
  });
  return (
    <div className={className} ref={ref}>
      {inView && <Suspense fallback={null}>{children}</Suspense>}
    </div>
  );
};

export default LazyInView;
