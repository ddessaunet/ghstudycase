import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Paginated, PaginatedProps } from 'components/molecules/Paginated';
import { AxiosRequestConfig } from 'axios';

describe('<Paginated />', () => {
  const props = {};
  const renderComponent = (props: PaginatedProps) =>
    render(
      <ChakraProvider>
        <Paginated {...props} />
      </ChakraProvider>,
    );

  it('should render and match snapshot', () => {
    const mockSetState = jest.fn();
    const props = {
      page: 'test',
      elements: [],
      setElements: mockSetState,
      request: () => ({} as AxiosRequestConfig),
    };
    const component = renderComponent(props);
    expect(component).toMatchSnapshot();
  });
});
