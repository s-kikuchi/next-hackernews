import * as React from 'react';

import User from '@/components/domain/objects/User';
import { useUsers } from '@/hooks';

const UserCollectionContainer: React.FC = (): React.ReactElement => {
  const { users, id } = useUsers();

  // @ts-ignore
  return <User user={users[id]} />;
};

export default UserCollectionContainer;
