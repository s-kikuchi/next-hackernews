import React from 'react';
import Header from './Header';

export default {
  title: 'Organisms / Header',
  component: Header,
  includeStories: ['HeaderSample'],
};

export const HeaderSample = (): React.ReactElement => <Header />;
