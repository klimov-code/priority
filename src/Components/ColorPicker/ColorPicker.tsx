import React, { useState, useEffect } from 'react';
import Tippy from '@tippy.js/react';

import { Palette } from 'Components/Palette';

import { Container, Circle } from './styled';

const ColorPicker: React.FC<{
  activeColor: string;
  onChange: (color: string) => void;
}> = ({ activeColor, onChange }) => {
  const [color, setColor] = useState(activeColor);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (color === activeColor) {
      return;
    }

    onChange(color);
  }, [color]);

  return (
    <Tippy
      interactive={true}
      placement={'bottom-end'}
      trigger={'click'}
      hideOnClick={true}
      onShow={() => setIsVisible(true)}
      onHide={() => setIsVisible(false)}
      content={<Palette activeColor={color} setColor={setColor} />}
    >
      <Container isActive={isVisible}>
        <Circle style={{ background: color }} />
      </Container>
    </Tippy>
  );
};

export { ColorPicker };
