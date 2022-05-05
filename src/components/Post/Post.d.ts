import { User } from 'services/UserService.d';
import { ReactNode } from 'react';

export interface Props {
  image: string;
  likes: 77;
  tags: string[];
  text: string;
  publishDate: Date;
  children?: ReactNode;
}
