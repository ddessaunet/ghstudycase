import { AxiosRequestConfig } from 'axios';

export const getUsers = (limit: number, page: number): AxiosRequestConfig => ({
  url: `/user?limit=${limit}&page=${page}`,
  method: 'get',
});

export const getUserProfile = (userid: string): AxiosRequestConfig => ({
  url: `/user/${userid}`,
  method: 'get',
});
