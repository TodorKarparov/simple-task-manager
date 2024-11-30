import { LoginRequest } from "../../dto/request/login-request.dto";

export interface UserModel {
    id?: string;

    username?: string;

    email?: string;

    token?: string;

    verified?: boolean;

    name?: string;

    login(loginRequest: LoginRequest): Promise<void>;
  
    getAccessToken(): string | null;
  
    get isAuthenticated(): boolean;
  }