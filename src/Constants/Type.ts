import { IValueLabel } from 'Definitions';

const TYPE = {
  0: 'No date and time',
  1: 'Date and time',
  2: 'Date range',
};

const TYPE_LIST: IValueLabel[] = [
  { label: 'No date and time', value: 0 },
  { label: 'Date and time', value: 1 },
  { label: 'Date range', value: 2 },
];

export { TYPE, TYPE_LIST };
