import React, { useEffect } from 'react';
import { Props } from './Paginated.d';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useAxios } from 'utils/useAxios';

let page = 0;

export const Paginated = ({
  elements,
  setElements,
  request,
  children,
}: Props) => {
  const { response, loading }: any = useAxios(request(page));

  useEffect(() => {
    if (response) {
      const { data } = response;
      setElements(data);
    }
  }, [response, setElements]);

  const handleBack = () => {
    window.scrollTo(0, 0);
    page = page - 1;
    setElements([]);
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    page = page + 1;
    setElements([]);
  };

  const List = () => {
    if (loading || !elements.length) {
      return (
        <Flex justifyContent="center" m="20px">
          <Text>Loading...</Text>
        </Flex>
      );
    }

    return <>{children}</>;
  };

  const NavigationButtons = () => (
    <Flex justifyContent="center">
      <Button onClick={handleBack} disabled={page === 0}>
        Back
      </Button>
      <Button onClick={handleNext}>Next</Button>
    </Flex>
  );

  return (
    <Box marginY="10px">
      <NavigationButtons />
      <List />
      {!!elements.length && <NavigationButtons />}
    </Box>
  );
};
