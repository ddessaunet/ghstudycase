import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostsByUserPayload } from 'services/UserService';
import { getCommentsByPost } from 'services/PostService';
import { Paginated } from 'components/Paginated';
import { Post } from 'components/Post';
import { User as IUser } from 'services/UserService.d';
import { Post as IPost, Comment as IComment } from 'services/PostService.d';
import { User } from 'components/User';

export const PostsView = () => {
  const { userid = '' } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [comments, setComments] = useState<IComment[]>([]);
  const [showComments, setShowComments] = useState(false);

  const getLastComments = async (post: IPost) => {
    const postComments = await getCommentsByPost({
      postid: post.id,
      limit: 2,
      page: 0,
    });
    const commentsList = [
      ...comments,
      ...postComments.filter(
        (comment: IComment) => !comments.find(c => c.id === comment.id),
      ),
    ];
    setShowComments(true);
    setComments(commentsList);
    console.log(commentsList);
  };

  const LastComments = ({ post }: any) => {
    const lastComments = comments.filter(comment => comment.post === post.id);
    if (!lastComments.length) return null;

    return (
      <Container>
        <Text>{}</Text>
        {lastComments.map(comment => (
          <Flex>
            <img src={comment.owner.picture} alt="" />
            <Text alignSelf="center">{comment.message}</Text>
          </Flex>
        ))}
      </Container>
    );
  };

  const PostsList = ({ posts }: any) => (
    <Flex flexDirection="column">
      {posts.map((post: any) => (
        <Flex key={post.id} m="10px">
          <Post {...post}>
            <Button marginY="10px" onClick={() => getLastComments(post)}>
              Show comments
            </Button>
            <LastComments post={post} />
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
        request={(page: number) => getPostsByUserPayload(userid, 10, page)}
      >
        <PostsList posts={posts} />
      </Paginated>
    </Container>
  );
};
