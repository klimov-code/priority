import styled, { css } from 'styled-components';

interface IInput {
  searchable?: boolean;
  width?: number;
}

const Input = styled.input`
  box-sizing: border-box;
  padding: 0 0 0 11px;
  border-radius: 5px;
  font: inherit;
  font-size: 100%;
  outline: none;

  height: 35px;
  width: 100%;

  ${({ searchable }: IInput) =>
    !searchable &&
    css`
      cursor: pointer;
    `};
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `};

  &::placeholder {
    font: inherit;
    font-size: 14px;
  }
`;

export { Input };
