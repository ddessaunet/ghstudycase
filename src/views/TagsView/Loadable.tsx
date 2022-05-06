/**
 * Asynchronously loads view component
 */

import { lazyLoad } from 'utils/loadable';

export const TagsView = lazyLoad(
  () => import('./index'),
  module => module.TagsView,
);
