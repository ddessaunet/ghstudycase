import React from 'react';
import './App.css';
import { SiteRouting } from 'router';
import { Container } from '@chakra-ui/react';

function App() {
  return (
    <Container marginY="3.5">
      <SiteRouting />
    </Container>
  );
}

export default App;
