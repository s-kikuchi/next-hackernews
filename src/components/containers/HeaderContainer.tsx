import * as React from 'react';

import Header from '@/components/gui/groups/Header';
import { useWindowDimensions } from '@/hooks';

const HeaderContainer: React.FC = () => {
  const { width } = useWindowDimensions();
  return <Header width={width} />;
};

export default HeaderContainer;
