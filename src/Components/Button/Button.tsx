import styled, { css } from 'styled-components';

interface IButton {
  maxWidth?: number;
  disabled?: boolean;
}

const Button = styled.button`
  font: inherit;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  color: white;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  outline: none;
  border: none;
  padding: 11px 22px 10px;
  min-width: 105px;

  ${({ maxWidth }: IButton) =>
    maxWidth &&
    css`
      max-width: ${maxWidth}px;
      width: 100%;
    `};

  ${({ disabled }: IButton) =>
    disabled &&
    css`
      background: #f4f4f2;
      color: #bfbfbf;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    `};
`;

export { Button };
