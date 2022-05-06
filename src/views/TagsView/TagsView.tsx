import React, { useState } from 'react';
import { Button, Container, Flex, Link, Tag, Text } from '@chakra-ui/react';
import { Paginated } from 'components/Paginated';
import { Post } from 'components/Post';
import { useNavigate, useParams } from 'react-router-dom';
import { Post as IPost } from 'services/PostService.d';
import { getPostsByTagPayload } from 'services/TagService';

export const TagsView = () => {
  const { tagname = '' } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<IPost[]>([]);

  const PostsList = ({ posts }: any) => (
    <Flex flexDirection="column">
      {posts.map((post: any) => (
        <Flex key={post.id} m="10px">
          <Post {...post}>
            <Flex justifyContent="end">
              <Text marginX="10px">Owner:</Text>
              <Link
                onClick={() => navigate(`/${post.owner.id}`)}
                fontWeight="bold"
              >
                {post.owner.firstName} {post.owner.lastName}
              </Link>
            </Flex>
          </Post>
        </Flex>
      ))}
    </Flex>
  );

  return (
    <Container>
      <Flex borderStyle="dashed">
        <Button marginX="10px" onClick={() => navigate('/')}>
          Back to users list
        </Button>
        <Flex flexDirection="column" marginLeft="auto">
          <Text alignSelf="center">
            Current tag: <Tag fontWeight="bold">{tagname}</Tag>
          </Text>
          <Text>Total: {}</Text>
        </Flex>
      </Flex>
      <Paginated
        elements={posts}
        setElements={setPosts}
        request={page => getPostsByTagPayload(tagname, 10, page)}
      >
        <PostsList posts={posts} />
      </Paginated>
    </Container>
  );
};
