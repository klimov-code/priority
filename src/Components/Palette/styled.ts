import styled, { css } from 'styled-components';

const Container = styled.div`
  padding: 22px 11px 11px;

  border-radius: 5px;
  background: white;
  width: 292px;

  box-sizing: border-box;
  box-shadow: 0 22px 70px 0 rgba(0, 0, 0, 0.08);
`;

const Title = styled.span`
  display: block;
  font-size: 13px;
  line-height: 18px;
  color: #454c54;

  margin-bottom: 20px;
  margin-left: 11px;
`;

const Colors = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Border = css`
  box-shadow: inset 0 0 0 2px #8cc7f2;
`;

const Color = styled.div`
  width: 32px;
  height: 32px;
  background: #454c54;
  border-radius: 50%;
  cursor: pointer;

  margin: 11px;

  ${({ isActive }: { isActive: boolean }) => isActive && Border};
`;

export { Title, Container, Colors, Color };
