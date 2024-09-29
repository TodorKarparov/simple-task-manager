import axios from "axios";
import { AuthResponse } from "../dto/response/auth-response.dto";
import { LoginRequest } from "../dto/request/login-request.dto";

class AuthService {
  async login(loginRequest: LoginRequest): Promise<AuthResponse> {
    try {
      const response = await axios.post<AuthResponse>(
        "http://localhost:8080/api/collections/user/auth-with-password",
        loginRequest
      );
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
