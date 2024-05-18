export interface AuthUser {
  email: string;
  password: string;
}

export interface UserSession {
  userId: string;
  user: string;
  email: string;
}
