import React, { useState } from 'react';
import { Container } from '@chakra-ui/react';
import { getUsersPayload } from 'services/UserService';
import { Paginated } from 'components/molecules/Paginated';
import { User as IUser } from 'services/UserService.d';
import { UsersList } from 'components/molecules/UsersList';

export const UsersView = () => {
  const [users, setUsers] = useState<IUser[]>([]);

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
