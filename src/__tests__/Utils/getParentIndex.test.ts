import { fromJS } from 'immutable';

import { getParentIndex } from 'Utils';

describe('getParentIndex()', () => {
  const store = fromJS({
    data: {
      active: [
        {
          id: 1,
          name: 'high',
          color: '#009687',
          type: 1,
          parentId: null,
          subpriorities: [],
        },
        {
          id: 2,
          name: 'medium',
          color: '#009687',
          type: 1,
          parentId: null,
          subpriorities: [
            {
              id: 3,
              name: 'mediumrare',
              color: '#fccb86',
              type: 1,
              parentId: 2,
            },
            {
              id: 4,
              name: 'mediumwell',
              color: '#ff6536',
              type: 1,
              parentId: 2,
            },
          ],
        },
      ],
      archive: null,
    },
  });

  it('should return index of parent', () => {
    const subpriority = {
      id: 4,
      name: 'mediumwell',
      color: '#ff6536',
      type: 1,
      parentId: 2,
    };

    const index = getParentIndex(store, subpriority);

    expect(index).toBe(1);
  });

  it('should return undefined if there is no parentId', () => {
    const subpriority = {
      id: 4,
      name: 'mediumwell',
      color: '#ff6536',
      type: 1,
      parentId: null,
    };

    const index = getParentIndex(store, subpriority);

    expect(index).toBeUndefined();
  });
});
