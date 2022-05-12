import { User } from 'services/UserService';
import { ReactNode } from 'react';
import { AxiosRequestConfig } from 'axios';

export interface Props {
  image: string;
  likes: number;
  tags: string[];
  text: string;
  publishDate: string;
  action: (tag) => void;
  request?: () => AxiosRequestConfig;
  children?: ReactNode;
}
