import React, { useEffect, useState } from 'react';

const GIF = ({getSrc}) => {
  const [source, setSource] = useState();
  useEffect(() => {
    const getDelayedSrc = async() => {
      const delayedSrc = await getSrc();
      setSource(delayedSrc.default);
    };
    getDelayedSrc();
  }, [getSrc])
  return source ? <img className='gifImage' alt='GIF' src={source} /> : null;
}

export default GIF;
