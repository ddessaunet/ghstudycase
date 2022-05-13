import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { UsersList, UsersListProps } from 'components/molecules/UsersList';

describe('<UsersList />', () => {
  const props = {
    users: [
      {
        id: '60d0fe4f5311236168a109ca',
        title: 'ms',
        firstName: 'Sara',
        lastName: 'Andersen',
        picture: 'https://randomuser.me/api/portraits/women/58.jpg',
      },
      {
        id: '60d0fe4f5311236168a109cb',
        title: 'miss',
        firstName: 'Edita',
        lastName: 'Vestering',
        picture: 'https://randomuser.me/api/portraits/med/women/89.jpg',
      },
    ],
  };
  const renderComponent = (props: UsersListProps) =>
    render(
      <MemoryRouter>
        <ChakraProvider>
          <UsersList {...props} />
        </ChakraProvider>
      </MemoryRouter>,
    );

  it('should render and match snapshot', () => {
    const component = renderComponent(props);
    expect(component).toMatchSnapshot();
  });
});
