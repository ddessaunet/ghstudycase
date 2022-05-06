import React, { useEffect, useState } from 'react';
import { Button, Container, Flex, Text } from '@chakra-ui/react';
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
  const [hasComments, setHasComments] = useState<{ [key: string]: any }[]>([]);

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
    setComments(commentsList);
  };

  const LastComments = ({ post }: any) => {
    const lastComments = comments.filter(comment => comment.post === post.id);
    if (!lastComments.length) return null;

    const renderComments = () =>
      lastComments.splice(0, 2).map(comment => (
        <Flex>
          <img src={comment.owner.picture} alt="" />
          <Text alignSelf="center" m="10px">
            {comment.message}
          </Text>
        </Flex>
      ));

    return <Container>{renderComments()}</Container>;
  };

  const nav = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  const PostsList = ({ posts }: any) => {
    const [loadingComments, setLoadingComments] = useState(false);

    const getComments = async (post: IPost) => {
      setLoadingComments(true);
      await getLastComments(post);
      setLoadingComments(false);
    };

    const getLabel = () => {
      if (loadingComments) {
        return 'Loading...';
      } else {
        return 'Show comments';
      }
    };

    return (
      <Flex flexDirection="column">
        {posts.map((post: any) => (
          <Flex key={post.id} m="10px">
            <Post
              {...post}
              action={(tagname: string) => nav(`/${tagname}/tag`)}
            >
              <Button
                marginY="10px"
                onClick={() => getComments(post)}
                disabled={loadingComments}
              >
                {getLabel()}
              </Button>
              <LastComments post={post} />
            </Post>
          </Flex>
        ))}
      </Flex>
    );
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
