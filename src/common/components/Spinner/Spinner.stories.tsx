import React from 'react';
import Spinner from './Spinner';

export default {
  title: 'gui / parts / Spinner',
  component: Spinner,
  includeStories: ['SpinnerSample'],
};

export const SpinnerSample = (): React.ReactElement => <Spinner />;
