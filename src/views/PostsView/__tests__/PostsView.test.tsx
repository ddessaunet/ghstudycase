import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { MemoryRouter } from 'react-router-dom';
import { PostsView } from 'views/PostsView';

describe('<PostsView />', () => {
  const props = {};
  const renderComponent = (props: any) =>
    render(
      <MemoryRouter>
        <ChakraProvider>
          <PostsView {...props}></PostsView>
        </ChakraProvider>
      </MemoryRouter>,
    );

  it('should render and match snapshot', () => {
    const component = renderComponent(props);
    expect(component).toMatchSnapshot();
  });
});
