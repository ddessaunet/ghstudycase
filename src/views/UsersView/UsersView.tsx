import React, { useEffect, useState } from 'react';
import { Button, Container, Flex, Text } from '@chakra-ui/react';
import { useAxios } from 'utils/useAxios';
import { getUsers } from 'services/UserService';
import { User } from 'components/User';
import { useNavigate } from 'react-router-dom';

let page = 0;

export const UsersView = () => {
  const navigate = useNavigate();
  const { response, loading }: any = useAxios(getUsers(5, page));
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (response) {
      const { data: users } = response;
      setUsers(users);
    }
  }, [response]);

  const navigateProfile = (userid: string) => {
    navigate(`/${userid}`);
  };

  const navigateUserPosts = () => {};

  const UsersList = ({ users }: any) => {
    if (loading || !users.length) {
      return (
        <Flex justifyContent="center" m="20px">
          <Text>Loading...</Text>
        </Flex>
      );
    }

    return (
      <Flex flexDirection="column">
        {users.map((user: any) => (
          <Flex key={user.id} m="10px">
            <User {...user}>
              <Flex gap="1">
                <Button onClick={() => navigateProfile(user.id)}>
                  Show full profile
                </Button>
                <Button onClick={navigateUserPosts}>User posts</Button>
              </Flex>
            </User>
          </Flex>
        ))}
      </Flex>
    );
  };

  const handleBack = () => {
    page = page - 1;
    setUsers([]);
  };

  const handleNext = () => {
    page = page + 1;
    setUsers([]);
  };

  return (
    <Container width="100%">
      <UsersList users={users} />
      <Flex justifyContent="center">
        <Button onClick={handleBack} disabled={page === 0}>
          Back
        </Button>
        <Button onClick={handleNext}>Next</Button>
      </Flex>
    </Container>
  );
};
