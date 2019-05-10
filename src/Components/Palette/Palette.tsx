import React from 'react';

import { PALETTE } from '~/Constants';

import { Container, Title, Colors, Color } from './styled';

const Palette: React.FC<{
  setColor: (color: string) => void;
  activeColor: string;
}> = ({ setColor, activeColor }) => (
  <Container>
    <Title>{'Select color'}</Title>
    <Colors>
      {PALETTE.map((color, index) => (
        <Color
          style={{ background: color }}
          key={index}
          isActive={color === activeColor}
          color={color}
          onClick={() => setColor(color)}
        />
      ))}
    </Colors>
  </Container>
);

export { Palette };
