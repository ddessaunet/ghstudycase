import React, { useState } from 'react';
import { Button, Container, Flex, Text } from '@chakra-ui/react';
import { getUsersPayload, getPostsByUserPayload } from 'services/UserService';
import { User } from 'components/User';
import { Paginated } from 'components/Paginated';
import { useNavigate } from 'react-router-dom';
import { User as IUser } from 'services/UserService.d';

export const UsersView = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser[]>([]);

  const nav = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  const UsersList = ({ users }: any) => (
    <Flex flexDirection="column">
      {users.map((user: any) => (
        <Flex key={user.id} m="10px">
          <User {...user} request={() => getPostsByUserPayload(user.id, 1, 0)}>
            <Flex flexDirection="column">
              <Flex gap="1">
                <Button onClick={() => nav(`/${user.id}`)}>
                  Show full profile
                </Button>
                <Button onClick={() => nav(`/${user.id}/posts`)}>
                  User posts
                </Button>
              </Flex>
            </Flex>
          </User>
        </Flex>
      ))}
    </Flex>
  );

  return (
    <Container width="100%">
      <Paginated
        page="Users"
        elements={users}
        setElements={setUsers}
        request={(page: number) => getUsersPayload(5, page)}
      >
        <UsersList users={users} />
      </Paginated>
    </Container>
  );
};
