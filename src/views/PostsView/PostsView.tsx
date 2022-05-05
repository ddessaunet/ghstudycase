import React, { useEffect, useState } from 'react';
import { Button, Container, Flex } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostsByUser } from 'services/PostService';
import { Paginated } from 'components/Paginated';
import { Post } from 'components/Post';
import { User as IUser } from 'services/UserService.d';
import { Post as IPost } from 'services/PostService.d';
import { User } from 'components/User';

export const PostsView = () => {
  const { userid = '' } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [user, setUser] = useState<IUser>({} as IUser);

  const PostsList = ({ posts }: any) => (
    <Flex flexDirection="column">
      {posts.map((post: any) => (
        <Flex key={post.id} m="10px">
          <Post {...post}>
            <Button>Show comments</Button>
          </Post>
        </Flex>
      ))}
    </Flex>
  );

  useEffect(() => {
    if (posts.length) {
      setUser(posts[0].owner);
    }
  }, [posts]);

  return (
    <Container>
      <User {...user}>
        <Button onClick={() => navigate('/')}>Return to users list</Button>
      </User>
      <Paginated
        elements={posts}
        setElements={setPosts}
        request={(page: number) => getPostsByUser(userid, 10, page)}
      >
        <PostsList posts={posts} />
      </Paginated>
    </Container>
  );
};
