import React from 'react';
import { Box } from '@chakra-ui/react';
import { ErrorPlaceholder } from 'components/ErrorPlaceholder';

const NotFoundView = () => (
  <ErrorPlaceholder>
    <Box textColor="yellow">Page Not Found</Box>
  </ErrorPlaceholder>
);

export default NotFoundView;
