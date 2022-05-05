export interface UserResponse {
  data: User[];
  limit: number;
  page: number;
  total: number;
}

export interface User {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}
