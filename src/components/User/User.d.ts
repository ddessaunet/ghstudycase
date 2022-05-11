import { ReactNode } from 'react';
import { AxiosRequestConfig } from 'axios';

export interface Props {
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  request?: () => AxiosRequestConfig;
  children?: ReactNode;
}
