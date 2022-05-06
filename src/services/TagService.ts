import { AxiosRequestConfig } from 'axios';

export const getPostsByTagPayload = (
  tag: string,
  limit: number,
  page: number,
): AxiosRequestConfig => ({
  url: `/tag/${tag}/post?limit=${limit}&page=${page}`,
  method: 'get',
});
