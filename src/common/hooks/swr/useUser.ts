import useSWR, { SWRResponse } from 'swr';
import { fetchUser } from '@/common/api';
import { User } from '@/common/models';

export function useUser(id?: string): Pick<SWRResponse<User | undefined, Error>, 'data' | 'error'> {
  const key: string | undefined = id ? JSON.stringify(`/api/users/${id}`) : undefined;
  const fetcher = async () => fetchUser(id).then((user: User) => user);

  const { data, error } = useSWR(key, fetcher);
  return {
    data,
    error,
  };
}
