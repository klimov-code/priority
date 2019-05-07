import { IPriority } from 'Definitions';

const validate = (priority: IPriority) => {
  if (!priority.name) {
    throw new Error('Not filled in the field "Name"');
  }
  if (priority.name.length > 60) {
    throw new Error('Name must not exceed 60 characters');
  }
};

export { validate };
