import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Props } from './Comment.d';

export const Comment = ({ owner, message }: Props) => {
  return (
    <Flex>
      <img src={owner.picture} alt="" />
      <Text alignSelf="center" m="10px">
        {message}
      </Text>
    </Flex>
  );
};
