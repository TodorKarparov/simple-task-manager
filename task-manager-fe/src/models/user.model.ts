import { action, computed, makeAutoObservable, makeObservable, observable } from "mobx";
import { LoginRequest } from "../dto/request/login-request.dto";
import authService from "../services/auth-service";
import { UserModel } from "./interface/user-model";

class UserModelImpl implements UserModel {
  public id?: string;

  public username?: string;

  public email?: string;

  public token?: string;

  public verified?: boolean;

  public name?: string;

  private authenticated = false;

  constructor(
    name?: string,
    email?: string,
    id?: string,
    token?: string,
    username?: string,
    verified?: boolean
  ) {
    makeObservable(this, {
      id: observable,
      username: observable,
      email: observable,
      token: observable,
      verified: observable,
      name: observable,
      login: action,
      getAccessToken: action,
      isAuthenticated: computed,
    });
    
    this.authenticated = !!this.getAccessToken();
    this.id = id;
    this.username = username;
    this.email = email;
    this.token = token;
    this.verified = verified;
    this.name = name;
  }
  
  private setAuthenticated(authenticated: boolean): void {
    this.authenticated = authenticated;
  }

  async login(loginRequest: LoginRequest): Promise<void> {
    try {
      const tokenPayloadDto = await authService.login(loginRequest);
      localStorage.setItem("access_token", tokenPayloadDto.token);
      this.setAuthenticated(true);
      this.id = tokenPayloadDto.record.id;
      this.username = tokenPayloadDto.record.username;
      this.email = tokenPayloadDto.record.email;
      this.token = tokenPayloadDto.token;
      this.verified = tokenPayloadDto.record.verified;
      this.name = tokenPayloadDto.record.name;
    } catch (err) {
      this.setAuthenticated(false);
    }
  }


  getAccessToken(): string | null {
    return localStorage.getItem("access_token");
  }

  get isAuthenticated(): boolean {
    return this.authenticated;
  }
}

const userModel: UserModel = new UserModelImpl();

export default userModel;
