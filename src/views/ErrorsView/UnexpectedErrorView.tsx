import React from 'react';
import { Box } from '@chakra-ui/react';
import { ErrorPlaceholder } from 'components/atoms/ErrorPlaceholder';

export const UnexpectedErrorView = () => (
  <ErrorPlaceholder>
    <Box textColor="red">Unexpected Error</Box>
  </ErrorPlaceholder>
);
