import React from 'react';
import { useRouter } from 'next/router';

import { Item } from '@/features/items/detail/Item';
import { useItem } from '@/common/hooks/useItem';

export function ItemContainer(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const { data: item } = useItem(id as string);

  return <Item item={item} />;
}
