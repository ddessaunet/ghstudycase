import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { PostsList, PostsListProps } from 'components/molecules/PostsList';

describe('<PostsList />', () => {
  const props = {
    posts: [
      {
        id: '60d21b4667d0d8992e610c85',
        image: 'https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg',
        likes: 43,
        tags: ['animal', 'dog', 'golden retriever'],
        text: 'adult Labrador retriever',
        publishDate: '2020-05-24T14:53:17.598Z',
        owner: {
          id: '60d0fe4f5311236168a109ca',
          title: 'ms',
          firstName: 'Sara',
          lastName: 'Andersen',
          picture: 'https://randomuser.me/api/portraits/women/58.jpg',
        },
      },
    ],
  };
  const renderComponent = (props: PostsListProps) =>
    render(
      <MemoryRouter>
        <ChakraProvider>
          <PostsList {...props} />
        </ChakraProvider>
      </MemoryRouter>,
    );

  it('should render and match snapshot', () => {
    const component = renderComponent(props);
    expect(component).toMatchSnapshot();
  });
});
