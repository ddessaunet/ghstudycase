/**
 * Asynchronously loads view component
 */

import { lazyLoad } from 'utils/loadable/loadable';

export const PostsView = lazyLoad(
  () => import('./index'),
  module => module.PostsView,
);
