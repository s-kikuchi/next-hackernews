import React from 'react';
import { Spinner } from '@/common/components/Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
  includeStories: ['Sample'],
};

export const Sample = (): React.ReactElement => <Spinner />;
