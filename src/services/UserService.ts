import { AxiosParams } from 'utils/useAxios';

export const getUsers = (limit: number): AxiosParams => ({
  url: `/user?limit=${limit}`,
  method: 'get',
});
