import React, { useState } from 'react';
import { Button, Container, Flex } from '@chakra-ui/react';
import { getUsers } from 'services/UserService';
import { User } from 'components/User';
import { Paginated } from 'components/Paginated';
import { useNavigate } from 'react-router-dom';

export const UsersView = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const nav = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  const UsersList = ({ users }: any) => (
    <Flex flexDirection="column">
      {users.map((user: any) => (
        <Flex key={user.id} m="10px">
          <User {...user}>
            <Flex gap="1">
              <Button onClick={() => nav(`/${user.id}`)}>
                Show full profile
              </Button>
              <Button onClick={() => nav(`/${user.id}/posts`)}>
                User posts
              </Button>
            </Flex>
          </User>
        </Flex>
      ))}
    </Flex>
  );

  return (
    <Container width="100%">
      <Paginated
        elements={users}
        setElements={setUsers}
        request={(page: number) => getUsers(5, page)}
      >
        <UsersList users={users} />
      </Paginated>
    </Container>
  );
};
