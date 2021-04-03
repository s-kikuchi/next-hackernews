import React from 'react';

import { Header } from '@/common/components/Header';
import { useWindowDimensions } from '@/common/hooks';

export function HeaderContainer(): React.ReactElement {
  const { width } = useWindowDimensions();
  return <Header width={width} />;
}
