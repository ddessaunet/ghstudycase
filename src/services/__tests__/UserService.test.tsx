import React from 'react';
import { getPostsByUserPayload } from '../UserService';

describe('UserService test', () => {
  const limit = 5;
  const page = 0;

  it('should have a method getUsersPayload and return a payload', () => {
    const userid = '60d0fe4f5311236168a10a13';
    const params = getPostsByUserPayload(userid, limit, page);

    expect(params).toEqual({
      method: 'get',
      url: '/user/60d0fe4f5311236168a10a13/post?limit=5&page=0',
    });
  });
});
