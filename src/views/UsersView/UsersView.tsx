import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Flex,
  HStack,
  VStack,
  Text,
} from '@chakra-ui/react';
import { useAxios } from 'utils/useAxios';
import { getUsers } from 'services/UserService';
import { User } from 'components/User';

let page = 0;

const UsersView = () => {
  const { response, loading, error }: any = useAxios(getUsers(5, page));
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (response) {
      const { data: users } = response;
      setUsers(users);
    }
  }, [response]);

  const UsersList = ({ users }: any) => {
    if (loading || !users.length) {
      return (
        <Flex justifyContent="center" m="20px">
          <Text>Loading...</Text>
        </Flex>
      );
    }

    return (
      <VStack>
        {users.map((user: any) => (
          <Flex key={user.id} onClick={() => {}}>
            <User {...user} />
          </Flex>
        ))}
      </VStack>
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
    <Container>
      <UsersList users={users} />
      <HStack justifyContent="center">
        <Button onClick={handleBack} disabled={page === 0}>
          Back
        </Button>
        <Button onClick={handleNext}>Next</Button>
      </HStack>
    </Container>
  );
};

export default UsersView;
