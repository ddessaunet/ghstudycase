import React, { useEffect, useState } from 'react';
import { Props } from './Paginated.d';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useAxios } from 'utils/useAxios';

export const Paginated = ({
  page,
  elements,
  setElements,
  request,
  children,
}: Props) => {
  const [pageNumber, setPageNumber] = useState(0);
  const { response, loading }: any = useAxios(request(pageNumber));

  useEffect(() => {
    if (response) {
      const { data } = response;
      setElements(data);
    }
  }, [response, setElements]);

  useEffect(() => {
    setPageNumber(0);
  }, [page]);

  const handleBack = () => {
    window.scrollTo(0, 0);
    setPageNumber(pageNumber - 1);
    setElements([]);
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    setPageNumber(pageNumber + 1);
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
      <Button onClick={handleBack} disabled={pageNumber === 0}>
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
