import React from 'react';
import TemplateTester from '@/components/TemplateTester/TemplateTester';
import { Typography, Stack, Container } from '@mui/material';
import Counter from '@/components/Counter/Counter';
import ListAllPrograms from '@/components/ListAllPrograms/ListAllPrograms';

const Home = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h2">
          Gym-App
        </Typography>
      </Stack>
      <ListAllPrograms />
      {/* <Counter /> */}
    </Container>
  );
};

export default Home;
