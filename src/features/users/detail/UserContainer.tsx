import React from 'react';

import User from '@/features/users/detail/User';
import { useUsers } from '@/common/hooks';

export function UserContainer(): React.ReactElement {
  const { users, id } = useUsers();

  // @ts-ignore
  return <User user={users[id]} />;
}
