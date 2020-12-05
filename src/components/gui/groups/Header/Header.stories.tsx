import React from 'react';
import Header from './Header';

export default {
  title: 'gui / groups / Header',
  component: Header,
  includeStories: ['HeaderSample'],
};

export const HeaderSample = (): React.ReactElement => {
  const width = 800;
  return <Header width={width} />;
};
