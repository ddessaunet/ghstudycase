import { User } from 'services/UserService.d';
import { ReactNode } from 'react';

export interface Props {
  image: string;
  likes: number;
  tags: string[];
  text: string;
  publishDate: string;
  action: (tag) => void;
  children?: ReactNode;
}
