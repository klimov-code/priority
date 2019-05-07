import React, { CSSProperties } from 'react';

import { Container, Item } from './styled';

interface IItem {
  name: string;
  isDisabled: boolean;
  onClick: () => void;
  style: CSSProperties;
}

const MenuBox: React.FC<{ items: Array<Partial<IItem>> }> = ({ items }) => (
  <Container>
    {items.map(({ name, ...props }) => (
      <Item key={name} {...props}>
        {name}
      </Item>
    ))}
  </Container>
);

export { MenuBox };
