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

export interface UserProfile {
  dateOfBirth: string;
  email: string;
  firstName: string;
  gender: string;
  id: string;
  lastName: string;
  location: any;
  phone: string;
  picture: string;
  registerDate: string;
  title: string;
  updatedDate: string;
}
