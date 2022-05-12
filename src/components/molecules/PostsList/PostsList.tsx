import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Post } from 'components/atoms/Post';
import { LastComments } from 'components/molecules/LastComments';
import { getCommentsByPostPayload } from 'services/PostService';
import { Props } from './PostsList.d';

export const PostsList = ({ posts }: Props) => {
  const navigate = useNavigate();

  const nav = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <Flex flexDirection="column">
      {posts.map((post: any) => (
        <Flex key={post.id} m="10px">
          <Post
            {...post}
            action={(tagname: string) => nav(`/${tagname}/tag`)}
            request={() => getCommentsByPostPayload(post.id, 1, 0)}
          >
            <LastComments post={post} />
          </Post>
        </Flex>
      ))}
    </Flex>
  );
};
