import { ReactNode } from 'react';

export interface Props {
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  children?: ReactNode;
}
