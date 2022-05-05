import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { ErrorPlaceholder } from 'components/ErrorPlaceholder';
import { useNavigate } from 'react-router-dom';

export const NotFoundView = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    window.scrollTo(0, 0);
    navigate('/');
  };
  return (
    <ErrorPlaceholder>
      <Flex flexDirection="column">
        <Box marginY="100px">
          <Text>Page Not Found</Text>
        </Box>
        <Button onClick={navigateBack} textColor="red">
          Back to users list
        </Button>
      </Flex>
    </ErrorPlaceholder>
  );
};
