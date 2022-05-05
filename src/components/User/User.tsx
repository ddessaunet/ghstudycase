import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Img,
  VStack,
} from '@chakra-ui/react';
import { UserProps } from './index';

const User = ({ title, id, firstName, lastName, picture }: UserProps) => (
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
        <VStack>
          <Button>Show full profile</Button>
          <Button>User posts</Button>
        </VStack>
      </HStack>
    </HStack>
  </Container>
);

export default User;
