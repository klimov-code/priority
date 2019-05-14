import { validate } from 'Utils';

describe('validate()', () => {
  it('should return true if there is a name and it is less than 60 characters', () => {
    const priority = {
      id: 4,
      name: 'mediumwell',
      color: '#ff6536',
      type: 1,
      parentId: 2,
    };

    expect(validate(priority)).toBe(true);
  });

  it('should throw Error if there is no name', () => {
    const priority = {
      id: 4,
      name: '',
      color: '#ff6536',
      type: 1,
      parentId: 2,
    };

    expect(() => validate(priority)).toThrowError('Not filled in the field "Name"');
  });

  it('should throw Еrror if name is more than 60 characters', () => {
    const priority = {
      id: 4,
      name: '123456789 123456789 123456789 123456789 123456789 123456789 123456789 ',
      color: '#ff6536',
      type: 1,
      parentId: 2,
    };

    expect(() => validate(priority)).toThrowError('Name must not exceed 60 characters');
  });
});
