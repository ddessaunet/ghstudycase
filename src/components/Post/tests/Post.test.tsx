import React from 'react';
import { render } from '@testing-library/react';
import { Post } from 'components/Post';
import { PostProps } from 'components/Post';
import { ChakraProvider } from '@chakra-ui/react';

describe('<Post />', () => {
  const props = {
    image: 'https://img.dummyapi.io/photo-1589469526983-0887ebe10072.jpg',
    likes: 2,
    tags: ['dog', 'water', 'pool'],
    text: 'Cooling off in the fountain white and black short ...',
    publishDate: '2020-05-14T16:28:10.135Z',
    action: () => {},
  };
  const renderComponent = (props: PostProps) =>
    render(
      <ChakraProvider>
        <Post {...props} />
      </ChakraProvider>,
    );

  it('should render and match snapshot', () => {
    const component = renderComponent(props);
    expect(component).toMatchSnapshot();
  });
});
