import axios from "axios";

export interface User {
  id?: string;
  username?: string;
  email: string;
  password: string;
  passwordConfirm: string;
  verified?: boolean;
  name?: string;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}

export class UserModel implements User {
  id?: string;
  username?: string;
  email: string;
  password: string;
  passwordConfirm: string;
  verified?: boolean;
  name?: string;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;

  constructor(
    email: string,
    password: string,
    passwordConfirm: string,
    id?: string,
    username?: string,
    verified?: boolean,
    name?: string,
    avatar?: string,
    createdAt?: string,
    updatedAt?: string
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.passwordConfirm = passwordConfirm;
    this.verified = verified;
    this.name = name;
    this.avatar = avatar;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static async createUser(user: User): Promise<User | void> {
    try {
        const response = await axios.post<User>('http://localhost:8080/api/collections/user/records', user);
        console.log('User created successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
    }
}
}
