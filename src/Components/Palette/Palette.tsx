import React from 'react';

import { PALETTE } from '~/Constants';

import { Container, Title, Colors, Color } from './styled';

interface IPaletteProps {
  setColor: (color: string) => void;
  activeColor: string;
}

const Palette: React.FC<IPaletteProps> = ({ setColor, activeColor }) => (
  <Container>
    <Title>{'Select color'}</Title>
    <Colors>
      {PALETTE.map((color, index) => (
        <Color
          style={{ background: color }}
          key={index}
          isActive={color === activeColor}
          onClick={() => setColor(color)}
        />
      ))}
    </Colors>
  </Container>
);

export { Palette };
