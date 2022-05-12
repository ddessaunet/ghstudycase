import React, { useState } from 'react';
import { Button, Flex, Spinner } from '@chakra-ui/react';
import { Comment } from 'components/atoms/Comment';
import { Props } from './LastComments.d';
import { getCommentsByPost } from 'services/PostService';
import { Post as IPost, Comment as IComment } from 'services/PostService.d';

export const LastComments = ({ post }: Props) => {
  const [loadingComments, setLoadingComments] = useState(false);
  const [comments, setComments] = useState<IComment[]>([]);
  const lastComments = comments.filter(comment => comment.post === post.id);

  const getLastComments = async (post: IPost) => {
    const postComments = await getCommentsByPost({
      postid: post.id,
      limit: 2,
      page: 0,
    });
    setComments(postComments);
  };

  const getComments = async (post: IPost) => {
    setLoadingComments(true);
    await getLastComments(post);
    setLoadingComments(false);
  };

  const getLabel = () => {
    if (loadingComments) {
      return <Spinner />;
    } else {
      return 'Show comments';
    }
  };

  const renderComments = () =>
    lastComments
      .splice(0, 2)
      .map(comment => <Comment {...comment} key={comment.id} />);

  return (
    <Flex flexDirection="column">
      <Button
        marginY="10px"
        onClick={() => getComments(post)}
        disabled={loadingComments}
      >
        {getLabel()}
      </Button>
      {renderComments()}
    </Flex>
  );
};
