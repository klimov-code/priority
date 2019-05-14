import { List } from 'immutable';

import { IPriority } from 'Definitions';

const reorderList = (
  list: List<IPriority>,
  startIndex: number,
  endIndex: number
): List<IPriority> => {
  const listCopy = List(list);

  const itemCopy = listCopy.get(startIndex);

  const reorderedList = listCopy.splice(startIndex, 1).splice(endIndex, 0, itemCopy);

  return reorderedList;
};

export { reorderList };
