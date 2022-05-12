import { Box, Container, Flex, Img, Link, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Props } from './Post.d';
import { ReactComponent as LikeIcon } from 'assets/like.svg';
import { useAxios } from 'utils/useAxios';

export const Post = ({
  image,
  likes,
  tags,
  text,
  publishDate,
  action,
  request,
  children,
}: Props) => {
  const [totalComments, setTotalComments] = useState('Loading...');
  const { response }: any = useAxios(request ? request() : {});

  useEffect(() => {
    if (response) {
      setTotalComments(response.total);
    }
  }, [response]);

  return (
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
              <Flex>
                {tags.map((tag: string) => (
                  <Link
                    key={tag}
                    fontWeight="bold"
                    m="10px"
                    p="5px"
                    backgroundColor="blue.300"
                    textColor="white"
                    borderRadius="8px"
                    onClick={() => action(tag)}
                  >
                    {tag}
                  </Link>
                ))}
              </Flex>
              {request && <Text m="10px 0">Comments: {totalComments}</Text>}
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
};
