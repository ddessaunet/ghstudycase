import { User } from './UserService.d';

export interface Post {
  id: string;
  image: string;
  likes: number;
  tags: string[];
  text: string;
  publishDate: string;
  owner: User;
}

export interface Comment {
  id: string;
  message: string;
  owner: User;
  post: string;
  publishDate: Date;
}
