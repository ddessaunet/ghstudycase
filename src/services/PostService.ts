import { AxiosRequestConfig } from 'axios';

export const getPostsByUser = (
  userid: string,
  limit: number,
  page: number,
): AxiosRequestConfig => ({
  method: 'get',
  url: `/user/${userid}/post?limit=${limit}&page=${page}`,
});
