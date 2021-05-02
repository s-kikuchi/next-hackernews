import useSWR, { SWRResponse } from 'swr';
import { fetchUser } from '@/common/api';
import { User } from '@/common/models';

export function useUser(id?: string): SWRResponse<User | undefined, Error> {
  const key: string | undefined = id ? JSON.stringify(`/api/users/${id}`) : undefined;
  const fetcher = async () => fetchUser(id).then((user: User) => user);

  const { data, mutate, revalidate, error, isValidating } = useSWR(key, fetcher);
  return {
    data,
    mutate,
    revalidate,
    error,
    isValidating,
  };
}
