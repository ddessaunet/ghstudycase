import { Box, Container, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { Props } from './Post.d';
import { ReactComponent as LikeIcon } from 'assets/like.svg';

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
    <Flex flexDirection="column">
      <Flex>
        <Box marginX="10px">
          <Img src={image} alt="" w="150px" />
        </Box>
        <Flex marginX="1px" w="100%">
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            marginY="10px"
            marginBottom="auto"
            minW="50%"
          >
            <Box>
              <Text fontWeight="800">{publishDate}</Text>
            </Box>
            <Box>
              <Text fontWeight="800">{text}</Text>
            </Box>
          </Flex>
          <Box marginLeft="auto">
            <LikeIcon width="20px" />
            <Text display="inline" fontWeight="800">
              {likes}
            </Text>
          </Box>
        </Flex>
      </Flex>
      {children}
    </Flex>
  </Container>
);

export default Post;
