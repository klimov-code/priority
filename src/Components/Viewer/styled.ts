import styled from 'styled-components';
import Tippy from '@tippy.js/react';

const Container = styled.div`
  display: grid;
  background: #ffffff;

  grid-template-areas: 'name type color menu';
  grid-template-columns: 2fr 2fr 1fr 40px;
  grid-template-rows: 40px;
`;

const Tooltip = styled(Tippy)`
  & {
    background-color: transparent;
    color: transparent;
  }

  &[data-animatefill] {
    background-color: transparent;
  }

  & .tippy-backdrop {
    background-color: transparent;
  }
`;

export { Container, Tooltip };
