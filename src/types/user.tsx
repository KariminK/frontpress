// login types
export interface UserPayload {
  id: number;
  email: string;
  username: string;
  profileImage: string | null;
}

export interface LogInResBody {
  message: string;
  token: string;
  user: UserPayload;
}

export interface LogInReqBody {
  email: string;
  password: string;
}
