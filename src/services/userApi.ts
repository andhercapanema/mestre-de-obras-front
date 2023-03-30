import { type RegistrationForm } from "../pages";
import api from "./api";

export type RegistrationBody = Omit<RegistrationForm, "confirmPassword">;

export type RegistrationResponse = {
    email: string;
    password: string;
};

async function signUp(body: RegistrationBody): Promise<RegistrationResponse> {
    const response = await api.post("/users", body);
    return response.data;
}

export type getUserResponse = {
    name: string;
    email: string;
};

async function getUser(token: string | undefined): Promise<getUserResponse> {
    const response = await api.get("/users", {
        headers: {
            Authorization: `Bearer ${token ?? ""}`,
        },
    });
    return response.data;
}

export const userApi = {
    signUp,
    getUser,
};
