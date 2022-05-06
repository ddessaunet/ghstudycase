import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Box } from '@chakra-ui/react';
import { POSTS, PROFILE, TAG, USERS } from './routes';
import { UsersView } from 'views/UsersView/Loadable';
import { PostsView } from 'views/PostsView/Loadable';
import { UnexpectedErrorView, NotFoundView } from 'views/ErrorsView/Loadable';
import { UserDetailsView } from 'views/UserDetailsView/Loadable';
import { TagsView } from 'views/TagsView';

const SiteRouting = () => (
  <>
    <BrowserRouter>
      <Box minH="100vh">
        <ErrorBoundary FallbackComponent={UnexpectedErrorView}>
          <Routes>
            <Route path={USERS.path} element={<UsersView />} />
            <Route path={PROFILE.path} element={<UserDetailsView />} />
            <Route path={POSTS.path} element={<PostsView />} />
            <Route path={TAG.path} element={<TagsView />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </ErrorBoundary>
      </Box>
    </BrowserRouter>
  </>
);

export default SiteRouting;
