import axios, { AxiosRequestConfig } from 'axios';
import { User } from './UserService.d';

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

const getUserId = (url: string | undefined) => {
  return url?.split('/')[2] || '';
};

export const getPostsByUsers = async (users: User[]) => {
  try {
    const promises = users.map(user =>
      axios.request(getPostsByUserPayload(user.id, 1, 0)),
    );
    const postsByUsers = await Promise.all(promises);
    return postsByUsers.reduce(
      (response: { [key: string]: number }, { config, data: postsByUser }) => {
        response[getUserId(config.url)] = postsByUser.total;
        return response;
      },
      {},
    );
  } catch (e) {
  } finally {
  }
};
