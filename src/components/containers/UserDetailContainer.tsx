import * as React from 'react';

import User from '@/components/domain/objects/User';
import { useUser, allState } from '@/hooks';
import { useRecoilValue, useRecoilState } from 'recoil';
import { useRouter } from '@@/node_modules/next/router';
import { fetchUser } from '@/repositories';
import * as Model from '@/models';

const UserDetailContainer: React.FC = (): React.ReactElement => {
  const router = useRouter();
  const { id } = router.query;
  const [state, setState] = useRecoilState(allState);

  React.useEffect(() => {
    if (router.asPath !== router.route) {
      // @ts-ignore
      if (state.users[id]) {
      } else {
        fetchUser(id).then((u: Model.User) => {
          setState((prevState) => {
            return {
              ...prevState,
              users: {
                [u.id]: u,
              },
            };
          });
        });
      }
    }
  }, [router]);

  // @ts-ignore
  if (!state.users[id]) {
    return <div>Loading</div>;
  } else {
    // @ts-ignore
    return <User user={state.users[id]} />;
  }
};

export default UserDetailContainer;
