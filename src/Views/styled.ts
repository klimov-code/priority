import styled from 'styled-components';

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 22px 0 44px 0;
`;

const Button = styled.button`
  display: flex;
  justify-content: flex-end;
`;

const ArchiveButton = styled(Button)`
  padding: 22px 0;
`;

const CreateButton = styled(Button)`
  padding: 0 0 22px;
`;

const Text = styled.span`
  font-size: 13px;
  color: #b7babd;
  cursor: pointer;
`;

export { Container, ArchiveButton, CreateButton, Text };
