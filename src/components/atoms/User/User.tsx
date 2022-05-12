import React, { useEffect, useState } from 'react';
import { Box, Container, Flex, Img, Text } from '@chakra-ui/react';
import { Props } from './User.d';
import { useAxios } from 'utils/useAxios';

export const User = ({
  title,
  firstName,
  lastName,
  picture,
  request,
  children,
}: Props) => {
  const [totalPosts, setTotalPosts] = useState(0);
  const { response }: any = useAxios(request ? request() : {});

  useEffect(() => {
    if (response) {
      setTotalPosts(response.total);
    }
  }, [response]);

  return (
    <Container border="solid" borderWidth="5px" padding="10px">
      <Flex flexDirection={['column', 'row']}>
        <Flex marginX="10px" alignSelf={['center']}>
          <Img src={picture} alt="" w="150px" />
        </Flex>
        <Flex marginX="1px" flexDirection="column">
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            marginY="10px"
            marginBottom="auto"
          >
            <Box>
              <Text fontWeight="800">{title}</Text>
            </Box>
            <Box>
              <Text fontWeight="800">{firstName}</Text>
            </Box>
            <Box>
              <Text fontWeight="800">{lastName}</Text>
            </Box>
          </Flex>
          {request && (
            <Text m="10px 0">
              Total posts: {totalPosts ? totalPosts : 'Loading...'}
            </Text>
          )}
          {children}
        </Flex>
      </Flex>
    </Container>
  );
};
