import React, { Dispatch, SetStateAction } from 'react';
import { AxiosRequestConfig } from 'axios';

export interface Props {
  page: string;
  elements: any[];
  setElements: Dispatch<SetStateAction<any[]>>;
  request: (page: number) => AxiosRequestConfig;
  children?: React.ReactNode;
}
