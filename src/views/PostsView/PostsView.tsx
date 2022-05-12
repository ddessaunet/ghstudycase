import React, { useEffect, useState } from 'react';
import { Button, Container } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostsByUserPayload } from 'services/UserService';
import { Paginated } from 'components/molecules/Paginated';
import { User as IUser } from 'services/UserService.d';
import { Post as IPost } from 'services/PostService.d';
import { User } from 'components/atoms/User';
import { PostsList } from 'components/molecules/PostsList';

export const PostsView = () => {
  const { userid = '' } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [user, setUser] = useState<IUser>({} as IUser);

  const nav = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  useEffect(() => {
    if (posts.length) {
      setUser(posts[0].owner);
    }
  }, [posts]);

  return (
    <Container>
      <User {...user}>
        <Button onClick={() => nav('/')}>Return to users list</Button>
      </User>
      <Paginated
        page="Posts"
        elements={posts}
        setElements={setPosts}
        request={(page: number) => getPostsByUserPayload(userid, 5, page)}
      >
        <PostsList posts={posts} />
      </Paginated>
    </Container>
  );
};
