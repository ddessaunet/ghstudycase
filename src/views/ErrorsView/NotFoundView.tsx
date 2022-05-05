import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { ErrorPlaceholder } from 'components/ErrorPlaceholder';
import { useNavigate } from 'react-router-dom';

export const NotFoundView = () => {
  const navigate = useNavigate();
  const navigateBack = () => navigate('/');
  return (
    <ErrorPlaceholder>
      <Box textColor="yellow">Page Not Found</Box>
      <Button onClick={navigateBack} textColor="red">
        Back to users list
      </Button>
    </ErrorPlaceholder>
  );
};
