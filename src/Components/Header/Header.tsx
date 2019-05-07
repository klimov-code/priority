import React from 'react';

import { Container } from './styled';

const Header: React.FC = () => (
  <Container>
    <span>{'Name'}</span>
    <span>{'Type'}</span>
    <span>{'Color'}</span>
  </Container>
);

export { Header };
