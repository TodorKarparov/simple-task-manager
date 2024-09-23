// src/viewmodels/SignupFormViewModel.ts
import { pipe } from "framer-motion";
import { User, UserModel } from "../models/user";
import AuthService from "../services/auth-service";

export class SignupFormViewModel {
    email: string = "";
    password: string = "";
    name: string = "";

    setName(name: string) {
        this.name = name;
    }

    setEmail(email: string) {
        this.email = email;
    }

    setPassword(password: string) {
        this.password = password;
    }

    async createUser() {
        const user = {
            email: this.email,
            password: this.password,
            passwordConfirm: this.password,
            name: this.name
        } as User;

        try {
            console.log("Creating user:", user);
            await UserModel.createUser(user);
            await AuthService.authenticate({ identity: user.email, password: user.password }).then((response) => {
                console.log(response?.token);
            });
        } catch (error) {
            console.error("Failed to create user:", error);
        }
    }
}
