import React from 'react';

import { Header } from '@/common/components/Header/index';
import { useWindowDimensions } from '@/common/hooks/useWindowDimensions';

export function FlexibleHeader(): React.ReactElement {
  const { width } = useWindowDimensions();
  return <Header width={width} />;
}
