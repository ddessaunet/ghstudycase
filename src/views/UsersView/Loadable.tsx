/**
 * Asynchronously loads view component
 */

import { lazyLoad } from 'utils/loadable';

export const UsersView = lazyLoad(
  () => import('./index'),
  module => module.UsersView,
);
