import React from 'react';
import { Header } from '@/common/components/Header/Header';

export default {
  title: 'Header',
  component: Header,
  includeStories: ['Sample'],
};

export const Sample = (): React.ReactElement => {
  const width = 800;
  return <Header width={width} />;
};
