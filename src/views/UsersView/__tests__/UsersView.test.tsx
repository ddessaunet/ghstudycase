import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { UsersView } from 'views/UsersView';

describe('<UsersView />', () => {
  const props = {};
  const renderComponent = (props: any) =>
    render(
      <ChakraProvider>
        <UsersView {...props}></UsersView>
      </ChakraProvider>,
    );

  it('should render and match snapshot', () => {
    const component = renderComponent(props);
    expect(component).toMatchSnapshot();
  });
});
