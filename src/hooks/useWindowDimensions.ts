import * as React from 'react';
import { atom, useRecoilState } from 'recoil';

const getWindowDimensions = () => {
  let width: number;
  let height: number;
  if (process.browser) {
    width = window.innerWidth;
    height = window.innerHeight;
  }
  return {
    width,
    height
  };
}

export const windowDimensionsState = atom({
  key: 'windowDimensionsState',
  default: getWindowDimensions()
})

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useRecoilState(windowDimensionsState);
  React.useEffect(() => {
    if (process.browser) {
      const onResize = () => {
        setWindowDimensions(getWindowDimensions);
      }
      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('resize', onResize)
      }
    }
  }, [])
  return windowDimensions;
}

export { useWindowDimensions }
