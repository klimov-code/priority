import styled, { css } from 'styled-components';

const Container = styled.div`
  background: #fafafa;
  border-radius: 5px;
  min-width: 150px;
  border: 1px solid #bfbfbf;
`;

const Disabled = css`
  color: #bfbfbf;
`;

const Item = styled.div`
  color: #636e7b;
  padding: 0 35px 0 22px;
  height: 35px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #f1f1f1;
  }

  &:first-of-type:hover {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-of-type:hover {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  ${({ isDisabled }: { isDisabled?: boolean }) => isDisabled && Disabled};
`;

export { Container, Item };
