import axios, { AxiosRequestConfig } from 'axios';

export const getCommentsByPostPayload = (
  postid: string,
  limit: number,
  page: number,
): AxiosRequestConfig => ({
  method: 'get',
  url: `/post/${postid}/comment?limit=${limit}&page=${page}`,
});

export const getCommentsByPost = async ({ postid, limit, page }: any) => {
  let result;
  try {
    result = await axios.request(getCommentsByPostPayload(postid, limit, page));
  } catch (error) {
  } finally {
  }

  return result?.data.data;
};
