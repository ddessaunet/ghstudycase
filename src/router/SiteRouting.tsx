import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Box } from '@chakra-ui/react';
import { POSTS, USERS } from './routes';
import { UsersView } from 'views/UsersView/Loadable';
import { PostsView } from 'views/PostsView/Loadable';
import { UnexpectedErrorView, NotFoundView } from 'views/ErrorsView/Loadable';

const SiteRouting = () => (
  <>
    <BrowserRouter>
      <Box minH="100vh">
        <ErrorBoundary FallbackComponent={UnexpectedErrorView}>
          <Routes>
            <Route path={USERS.path} element={<UsersView />} />
            <Route path={POSTS.path} element={<PostsView />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </ErrorBoundary>
      </Box>
    </BrowserRouter>
  </>
);

export default SiteRouting;
