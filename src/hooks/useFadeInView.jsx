import React from 'react';
import {Grow} from '@mui/material';

export default () => {
  const containerRef = React.useRef(null);
  const [isInView, setIsInView] = React.useState(false);

  const checkInView = () => {
    const rect = containerRef.current.getBoundingClientRect();
    setIsInView(rect.top < window.innerHeight && rect.bottom >= 0);
  };

  React.useEffect(() => {
    checkInView();
  }, []);

  React.useEffect(() => {
    document.addEventListener('scroll', checkInView);
    return () => {
      document.removeEventListener('scroll', checkInView);
    };
  }, []);

  const GrowEl = ({children, i}) => {
    return (
      <Grow in={isInView} {...(isInView ? {timeout: Number(i + '000')} : {})}>
        {children}
      </Grow>
    );
  };

  return {containerRef, GrowEl};
};
