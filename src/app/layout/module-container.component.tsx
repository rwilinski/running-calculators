import { Container, Paper } from '@mui/material';

export const ModuleWrapper: React.FC = ({ children }) => {
  return (
    <Container maxWidth="md" sx={{ mb: 4 }}>
      <Paper sx={{ p: 2 }}>{children}</Paper>
    </Container>
  );
};
