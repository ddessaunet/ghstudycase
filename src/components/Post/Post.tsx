import { Box, Container, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { Props } from './Post.d';

export const Post = ({
  image,
  likes,
  tags,
  text,
  publishDate,
  children,
}: Props) => (
  <Container
    border="solid"
    borderWidth="5px"
    padding="10px"
    borderStyle="groove"
  >
    <Flex>
      <Flex marginX="10px">
        <Img src={image} alt="" w="150px" />
      </Flex>
      <Flex marginX="1px" flexDirection="column">
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          marginY="10px"
          marginBottom="auto"
        >
          <Box>
            <Text fontWeight="800">{publishDate}</Text>
          </Box>
          <Box>
            <Text fontWeight="800">{text}</Text>
          </Box>
          <Box>
            <Text fontWeight="800">{likes}</Text>
          </Box>
        </Flex>
        {children}
      </Flex>
    </Flex>
  </Container>
);

export default Post;
