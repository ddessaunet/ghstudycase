import React, { useEffect, useState } from 'react';
import { Container, Flex, VStack } from '@chakra-ui/react';
import { useAxios } from 'utils/useAxios';
import { getUsers } from 'services/UserService';
import { User } from 'components/User';

const UsersView = () => {
  const { response, loading, error }: any = useAxios(getUsers(10));
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (response !== null) {
      const { data: users } = response;
      setUsers(users);
    }
  }, [response]);

  const UsersList = ({ users }: any) => (
    <VStack>
      {users.map((user: any) => (
        <Flex key={user.id} onClick={() => {}}>
          <User {...user} />
        </Flex>
      ))}
    </VStack>
  );

  return (
    <Container>
      <Flex justifyContent="center">Users list</Flex>
      {loading ? 'Loading...' : <UsersList users={users} />}
    </Container>
  );
};

export default UsersView;
