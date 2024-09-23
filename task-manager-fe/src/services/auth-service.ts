import axios from 'axios';
import { User } from '../models/user';

interface JwtResponse {
    token: string;
    user: User;
}

class AuthService {
    static async authenticate(authDetails: {identity: string, password: string}): Promise<JwtResponse | void> {
        try {
            const response = await axios.post<JwtResponse>('http://localhost:8080/api/collections/user/auth-with-password', authDetails);
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error);
        }
    }
}

export default AuthService;