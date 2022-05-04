/**
 * Asynchronously loads view component
 */

import { lazyLoad } from 'utils/loadable';

export const PostsView = lazyLoad(
  () => import('./index'),
  module => module.PostsView,
);
