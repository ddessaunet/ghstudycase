import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { ErrorPlaceholder } from 'components/atoms/ErrorPlaceholder/index';
import { ErrorPlaceholderProps } from 'components/atoms/ErrorPlaceholder/index';

describe('<ErrorPlaceholder />', () => {
  const props = {};
  const renderComponent = (props: ErrorPlaceholderProps) =>
    render(
      <ChakraProvider>
        <ErrorPlaceholder {...props} />
      </ChakraProvider>,
    );

  it('renders image', () => {
    const component = renderComponent(props);
    expect(component).toMatchSnapshot();
  });
});
