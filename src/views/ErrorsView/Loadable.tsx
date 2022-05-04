/**
 * Asynchronously loads view component
 */

import { lazyLoad } from 'utils/loadable';

export const NotFoundView = lazyLoad(
  () => import('./index'),
  module => module.NotFoundView,
);

export const UnexpectedErrorView = lazyLoad(
  () => import('./index'),
  module => module.UnexpectedErrorView,
);
