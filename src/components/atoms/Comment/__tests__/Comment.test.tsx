import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Comment, CommentProps } from 'components/atoms/Comment';

describe('<Comment />', () => {
  const props = {
    message: 'Excellent pic',
    owner: {
      id: '60d0fe4f5311236168a10a01',
      title: 'mr',
      firstName: 'Jesus',
      lastName: 'Riley',
      picture: 'https://randomuser.me/api/portraits/med/men/45.jpg',
    },
  };
  const renderComponent = (props: CommentProps) =>
    render(
      <ChakraProvider>
        <Comment {...props}></Comment>
      </ChakraProvider>,
    );

  it('should render and match snapshot', () => {
    const component = renderComponent(props);
    expect(component).toMatchSnapshot();
  });
});
