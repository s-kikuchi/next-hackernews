import * as React from 'react';

import Header from '@/common/components/Header';
import { useWindowDimensions } from '@/common/hooks';

const HeaderContainer: React.FC = () => {
  const { width } = useWindowDimensions();
  return <Header width={width} />;
};

export default HeaderContainer;
