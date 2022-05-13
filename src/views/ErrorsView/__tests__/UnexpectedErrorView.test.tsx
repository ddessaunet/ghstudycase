import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { UnexpectedErrorView } from 'views/ErrorsView/UnexpectedErrorView';

describe('<UnexpectedErrorView />', () => {
  const props = {};
  const renderComponent = (props: any) =>
    render(
      <ChakraProvider>
        <UnexpectedErrorView {...props}></UnexpectedErrorView>
      </ChakraProvider>,
    );

  it('should render and match snapshot', () => {
    const component = renderComponent(props);
    expect(component).toMatchSnapshot();
  });
});
