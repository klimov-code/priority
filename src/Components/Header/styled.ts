import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  background: white;

  grid-template-areas: 'name type color menu';
  grid-template-columns: 2fr 2fr 1fr 30px;
  grid-template-rows: 50px;
`;

export { Container };
