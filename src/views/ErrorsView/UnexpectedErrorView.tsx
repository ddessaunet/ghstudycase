import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ErrorPlaceholder } from 'components/atoms/ErrorPlaceholder';

export const UnexpectedErrorView = () => (
  <ErrorPlaceholder>
    <Box textColor="red" marginY="100px">
      <Text>Unexpected Error</Text>
    </Box>
  </ErrorPlaceholder>
);
