import React from 'react';
import { Box, Container, Flex, Img, Text } from '@chakra-ui/react';
import { Props } from './User.d';

export const User = ({
  title,
  firstName,
  lastName,
  picture,
  children,
}: Props) => (
  <Container borderColor="blue" border="solid" borderWidth="5px" padding="10px">
    <Flex>
      <Flex marginX="10px">
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
        {children}
      </Flex>
    </Flex>
  </Container>
);
