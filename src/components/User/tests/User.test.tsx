import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { User } from 'components/User';
import { UserProps } from 'components/User';

describe('<User />', () => {
  const props = {
    title: 'mr',
    firstName: 'Jan',
    lastName: 'Siebert',
    picture: 'https://randomuser.me/api/portraits/med/men/60.jpg',
  };
  const renderComponent = (props: UserProps) =>
    render(
      <ChakraProvider>
        <User {...props} />
      </ChakraProvider>,
    );

  it('should render and match snapshot', () => {
    const component = renderComponent(props);
    expect(component).toMatchSnapshot();
  });
});
