import * as React from 'react';
import { atom, useRecoilState } from 'recoil'
import { useRouter } from 'next/router';

import { fetchUser } from '@/repositories';
import * as Model from '@/models';

const initialState: {
  [id: number]: Model.User[]
} = { };

export const usersState = atom({
  key: 'usersState',
  default: initialState
});

const useUsers = () => {
  const router = useRouter();
  const { id } = router.query;
  const [users, setUsers] = useRecoilState(usersState);

  React.useEffect(() => {
    if (router.asPath !== router.route) {
      // @ts-ignore
      if (users[id]) {
        return
      }
      fetchUser(id).then((user: Model.User) => {
        const obj = Object.assign({}, { [user.id]: user });
        setUsers((prevState) => ({ ...prevState, ...obj }))
      })
    }
  }, [router]);

  return { users, id }
};

export { useUsers };
