import React from 'react';

interface IButtonProps {
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ children, ...restProps }) => (
  <button {...restProps}>{children}</button>
);

export { Button };
