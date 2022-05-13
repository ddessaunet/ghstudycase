import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { MemoryRouter } from 'react-router-dom';
import { NotFoundView } from 'views/ErrorsView/NotFoundView';

describe('<NotFoundView />', () => {
  const props = {};
  const renderComponent = (props: any) =>
    render(
      <MemoryRouter>
        <ChakraProvider>
          <NotFoundView {...props}></NotFoundView>
        </ChakraProvider>
      </MemoryRouter>,
    );

  it('should render and match snapshot', () => {
    const component = renderComponent(props);
    expect(component).toMatchSnapshot();
  });
});
