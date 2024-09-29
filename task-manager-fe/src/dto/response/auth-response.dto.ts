import { UserRecord } from "./user/user-record.dto";

export interface AuthResponse {
  token: string;
  record: UserRecord;
}
