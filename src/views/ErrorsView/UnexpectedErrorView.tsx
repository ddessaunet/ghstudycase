import React from 'react';
import { Box } from '@chakra-ui/react';
import { ErrorPlaceholder } from 'components/ErrorPlaceholder';

const UnexpectedErrorView = () => (
  <ErrorPlaceholder>
    <Box textColor="red">Unexpected Error</Box>
  </ErrorPlaceholder>
);

export default UnexpectedErrorView;
