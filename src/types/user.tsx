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

export interface SignInReqBody {
  email: string;
  username: string;
  password: string;
}

export interface AuthError {
  status: number;
  message: string;
}

export interface ValidationError {
  type: "field";
  location: Location;
  path: string;
  value?: string;
  msg: string;
}

export interface LogInResBody extends AuthError, SuccessLogInResBody {}
