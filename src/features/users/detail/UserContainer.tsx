import React from 'react';
import { useRouter } from 'next/router';

import { User } from '@/features/users/detail/User';
import { useUser } from '@/common/hooks/useUser';

export function UserContainer(): React.ReactElement {
  const router = useRouter();
  const { id } = router.query;

  const { data: user, error } = useUser(id as string);

  return <User user={user} error={error} />;
}
