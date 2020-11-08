import * as React from 'react';

import User from '@/components/domain/objects/User';
import { useUser, userState } from "@/hooks";
import { useRecoilValue } from 'recoil';

const UserDetailContainer: React.FC = (): React.ReactElement => {
  useUser();
  const user = useRecoilValue(userState);

  return <User user={user} />
};

export default UserDetailContainer;
