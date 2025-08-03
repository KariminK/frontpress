// login types
export interface UserPayload {
  id: number;
  email: string;
  username: string;
  profileImage: string | null;
}

export interface SuccessLogInResBody {
  message: string;
  token: string;
  user: UserPayload;
}

export interface LogInReqBody {
  email: string;
  password: string;
}

export interface AuthError {
  status: number;
  message: string;
}

export interface LogInResBody extends AuthError, SuccessLogInResBody {}
