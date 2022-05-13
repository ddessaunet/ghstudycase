import React from 'react';
import { getPostsByTagPayload } from '../TagService';

describe('TagsService test', () => {
  it('should have a method getPostsByTagPayload and return a payload', () => {
    const tag = 'water';
    const limit = 5;
    const page = 0;
    const params = getPostsByTagPayload(tag, limit, page);

    expect(params).toEqual({
      method: 'get',
      url: '/tag/water/post?limit=5&page=0',
    });
  });
});
