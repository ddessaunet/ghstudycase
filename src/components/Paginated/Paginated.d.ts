import React, { Dispatch, SetStateAction } from 'react';
import { AxiosRequestConfig } from 'axios';

export interface Props {
  elements: any[];
  setElements: Dispatch<SetStateAction<never[]>>;
  request: (page: number) => AxiosRequestConfig;
  children?: React.ReactNode;
}
