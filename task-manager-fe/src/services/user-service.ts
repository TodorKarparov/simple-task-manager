import axios from "axios";
import { User } from "../dto/response/user/user.dto";
import { UserRecord } from "../dto/response/user/user-record.dto";

export async function createUser(userRecord: UserRecord): Promise<User | void> {
    try {
      const response = await axios.post<User>(
        "http://localhost:8080/api/collections/user/records",
        userRecord
      );
      console.log("User created successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }