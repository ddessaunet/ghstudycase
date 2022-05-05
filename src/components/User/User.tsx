import React from 'react';
import { Box, Container, Flex, HStack, Img, VStack } from '@chakra-ui/react';
import { Props } from './User.d';

export const User = ({
  title,
  firstName,
  lastName,
  picture,
  children,
}: Props) => (
  <Container borderColor="blue" border="solid" borderWidth="5px">
    <HStack>
      <Flex>
        <Img src={picture} alt="" w="150px" />
      </Flex>
      <HStack>
        <VStack alignItems="flex-start">
          <Box>Title: {title}</Box>
          <Box>Name: {firstName}</Box>
          <Box>Lastname: {lastName}</Box>
        </VStack>
        {children}
      </HStack>
    </HStack>
  </Container>
);
