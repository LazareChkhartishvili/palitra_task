export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  token: string;
}

export interface UserFormProps {
  formData: LoginPayload;
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
}
