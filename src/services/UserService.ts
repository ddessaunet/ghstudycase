import { AxiosRequestConfig } from 'axios';

export const getUsersPayload = (
  limit: number,
  page: number,
): AxiosRequestConfig => ({
  url: `/user?limit=${limit}&page=${page}`,
  method: 'get',
});

export const getUserProfilePayload = (userid: string): AxiosRequestConfig => ({
  url: `/user/${userid}`,
  method: 'get',
});

export const getPostsByUserPayload = (
  userid: string,
  limit: number,
  page: number,
): AxiosRequestConfig => ({
  method: 'get',
  url: `/user/${userid}/post?limit=${limit}&page=${page}`,
});
