import React from 'react';
import './App.css';
import { Pages } from 'router';
import { Container } from '@chakra-ui/react';

function App() {
  return (
    <Container marginY="3.5">
      <Pages />
    </Container>
  );
}

export default App;
