import { useState, useEffect } from 'react';

interface UseWindowDimensionsResponse {
  width: number;
  height: number;
}

const useWindowDimensions = (): UseWindowDimensionsResponse => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    if (process.browser) {
      const onResize = () => {
        setWindowDimensions(getWindowDimensions);
      };
      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('resize', onResize);
      };
    }
  }, []);
  return windowDimensions;
};

const getWindowDimensions = () => {
  let width: number;
  let height: number;
  if (process.browser) {
    width = window.innerWidth;
    height = window.innerHeight;
  }
  return {
    width,
    height,
  };
};

export { useWindowDimensions };
