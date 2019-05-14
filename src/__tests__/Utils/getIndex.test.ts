import { fromJS } from 'immutable';

import { getIndex } from 'Utils';

describe('getIndex()', () => {
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

  it('should return index of priority', () => {
    const priority = {
      id: 2,
      name: 'medium',
      color: '#009687',
      type: 1,
      parentId: null,
    };

    const index = getIndex(store, priority);

    expect(index).toEqual([1]);
  });

  it('should return index of subpriority', () => {
    const subpriority = {
      id: 4,
      name: 'mediumwell',
      color: '#ff6536',
      type: 1,
      parentId: 2,
    };

    const index = getIndex(store, subpriority);

    expect(index).toEqual([1, 'subpriorities', 1]);
  });
});
