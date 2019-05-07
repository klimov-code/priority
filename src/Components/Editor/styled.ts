import styled from 'styled-components';

const Container = styled.div`
  height: 136px;
  width: 100%;

  padding: 22px;
  box-sizing: border-box;
  background: white;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    display: block;
    height: 1px;
    background: #f4f4f3;
    top: 0;
    left: 0;
    right: 0;
  }
`;

const Top = styled.div`
  display: flex;
  & > input,
  & > div:first-of-type {
    width: 281px;
    margin-right: 22px;
  }

  & > div:nth-of-type(2) {
    width: 257px;
    margin-right: 7px;
  }
`;

const Bottom = styled.div`
  display: flex;
  padding-top: 22px;
  & > button {
    width: 105px;
    margin-right: 22px;
  }
`;

export { Container, Top, Bottom };
