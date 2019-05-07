import styled, { css } from 'styled-components';

const Border = css`
  box-shadow: inset 0 0 0 2px #8cc7f2;
`;

const Container = styled.div`
  padding: 8px;
  box-sizing: border-box;
  border-radius: 5px;

  ${({ isActive }: { isActive: boolean }) => isActive && Border};
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background: #4a4a4a;
  border-radius: 50%;
  cursor: pointer;
`;

export { Container, Circle };
