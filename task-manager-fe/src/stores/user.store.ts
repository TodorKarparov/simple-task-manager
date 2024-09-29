import { makeAutoObservable } from "mobx";
import { LoginRequest } from "../dto/request/login-request.dto";
import authService from "../services/auth-service";

class UserStore {

  private id?: string;
  private username?: string;
  private email?: string;
  private token?: string;
  private verified?: boolean;
  private name?: string;
  private authenticated = false;

  constructor(
    name?: string,
    email?: string,
    id?: string,
    token?: string,
    username?: string,
    verified?: boolean
  ) {
    makeAutoObservable(this);
    this.authenticated = !!this.getAccessToken();
    this.id = id;
    this.username = username;
    this.email = email;
    this.token = token;
    this.verified = verified;
    this.name = name;
  }

  async login(loginRequest: LoginRequest) {
    try {
      const tokenPayloadDto = await authService.login(loginRequest);
      localStorage.setItem("access_token", tokenPayloadDto.token);
      this.setAuthenticated(true);
      this.setId(tokenPayloadDto.record.id);
      this.setUsername(tokenPayloadDto.record.username);
      this.setEmail(tokenPayloadDto.record.email);
      this.setToken(tokenPayloadDto.token);
      this.setVerified(tokenPayloadDto.record.verified);
      this.setName(tokenPayloadDto.record.name);
    } catch (err) {
      this.setAuthenticated(false);
    }
  }

  private setAuthenticated(authenticated: boolean) {
    this.authenticated = authenticated;
  }

  getAccessToken() {
    return localStorage.getItem("access_token");
  }

  isAuthenticated() {
    return this.authenticated;
  }

  getId() {
    return this.id;
  }

  setId(id: string) {
    this.id = id;
  }

  getUsername() {
    return this.username;
  }

  setUsername(username: string) {
    this.username = username;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }

  getToken() {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }

  getVerified() {
    return this.verified;
  }

  setVerified(verified: boolean) {
    this.verified = verified;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
}
const userStore = new UserStore();

export default userStore;