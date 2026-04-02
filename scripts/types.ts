export type User = {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: Date;
  updatedAt: Date;
};

export type AuthToken = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
};

export type AuthPayload = {
  userId: string;
  role: 'admin' | 'user' | 'guest';
  iat?: number;
  exp?: number;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  email: string;
  name: string;
  password: string;
  role?: 'admin' | 'user' | 'guest';
};

export type PasswordResetRequest = {
  email: string;
};

export type PasswordResetConfirm = {
  token: string;
  newPassword: string;
};

export type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string;
  };
};

export type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
};