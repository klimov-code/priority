import { fromJS } from 'immutable';

import { reorderList } from 'Utils';

describe('reorderList()', () => {
  const list = fromJS([
    {
      id: 1,
      name: 'high',
    },
    {
      id: 2,
      name: 'medium',
    },
    {
      id: 3,
      name: 'low',
    },
    {
      id: 4,
      name: 'lowest',
    },
  ]);

  it('should reorder medium and lowest', () => {
    const startIndex = 1;
    const endIndex = 3;

    const reorderedList = reorderList(list, startIndex, endIndex);
    const index = reorderedList.findIndex((item: any) => item.get('name') === 'medium');

    expect(index).toBe(endIndex);
  });

  it('should reorder high and lowest', () => {
    const startIndex = 0;
    const endIndex = 3;

    const reorderedList = reorderList(list, startIndex, endIndex);
    const index = reorderedList.findIndex((item: any) => item.get('name') === 'high');

    expect(index).toBe(endIndex);
  });

  it('should reorder lowest and high', () => {
    const startIndex = 3;
    const endIndex = 0;

    const reorderedList = reorderList(list, startIndex, endIndex);
    const index = reorderedList.findIndex((item: any) => item.get('name') === 'lowest');

    expect(index).toBe(endIndex);
  });
});
