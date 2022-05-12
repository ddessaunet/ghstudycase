import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Flex, Spinner, Text } from '@chakra-ui/react';
import { User } from 'components/atoms/User';
import { useNavigate, useParams } from 'react-router-dom';
import { useAxios } from 'utils/useAxios';
import { getUserProfilePayload } from 'services/UserService';
import { UserProfile } from 'services/UserService.d';

export const UserDetailsView = () => {
  const navigate = useNavigate();
  const { userid = '' } = useParams();
  const { response, loading, error }: any = useAxios(
    getUserProfilePayload(userid),
  );
  const [user, setUser] = useState<UserProfile>();

  const handleBack = () => {
    navigate('/');
  };

  useEffect(() => {
    if (response) setUser(response);
  }, [response]);

  useEffect(() => {
    if (error) navigate('/page/not/found');
  }, [error]);

  const Details = () => {
    if (loading || !user) {
      return (
        <Flex justifyContent="center" m="20px" gap="1">
          <Spinner />
          <Text marginX="10px">Loading...</Text>
        </Flex>
      );
    }

    return (
      <>
        <User {...user}>
          <Flex flexDirection="column" alignItems="flex-start">
            <Box>Email: {user.email}</Box>
            <Box>Gender: {user.gender}</Box>
            <Box>Phone: {user.phone}</Box>
          </Flex>
        </User>
        <Button onClick={handleBack}>Back to users list</Button>
      </>
    );
  };

  return (
    <Container>
      <Details />
    </Container>
  );
};
