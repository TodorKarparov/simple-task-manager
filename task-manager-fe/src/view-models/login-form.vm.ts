import { action, computed, makeObservable, observable } from "mobx";
import { NavigateFunction } from "react-router-dom";
import { UserModel } from "../models/interface/user-model";


class LoginFormViewModel {
    
    public email: string = "";
    public password: string = "";
    
    private readonly emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    private navigate: NavigateFunction;
    private userModel: UserModel;
    
  
    constructor(navigate: NavigateFunction, userModel: UserModel) {
      makeObservable(this, {
        email: observable,
        password: observable,
        setEmail: action,
        setPassword: action,
        isEmailValid: computed,
        loginUser: action,
      });
      this.navigate = navigate;
      this.userModel = userModel;
    }
  
    setEmail(email: string) {
      this.email = email;
    }
  
    setPassword(password: string) {
      this.password = password;
    }
  
    get isEmailValid(): boolean {
      return this.emailRegex.test(this.email);
    }
  
    async loginUser() {
      try {
        await this.userModel.login({
            identity: this.email,
            password: this.password,
          });
      } catch (error) {
        console.error("Failed to create user:", error);
      }
      console.log("User logged in successfully:", this.userModel.name);
      if (this.userModel.isAuthenticated) {
        this.navigate("/");
      }
    }
  }

  export default LoginFormViewModel;