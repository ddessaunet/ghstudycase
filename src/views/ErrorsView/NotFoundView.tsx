import React from 'react';
import { Box } from '@chakra-ui/react';
import { ErrorPlaceholder } from 'components/ErrorPlaceholder';

export const NotFoundView = () => (
  <ErrorPlaceholder>
    <Box textColor="yellow">Page Not Found</Box>
  </ErrorPlaceholder>
);
