import { type LoginForm } from "../pages";
import api from "./api";

export type LoginResponse = {
    user: {
        id: number;
        email: string;
    };
    token: string;
};

export async function signIn(loginBody: LoginForm): Promise<LoginResponse> {
    const response = await api.post("/auth/login", loginBody);
    return response.data;
}

export const authApi = {
    signIn,
};
