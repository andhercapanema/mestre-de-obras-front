import axios from "axios";
import { type LoginResponse } from "./authApi";

const instance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BACK_END_URL,
    headers: {
        Authorization: `Bearer ${
            (
                JSON.parse(
                    localStorage.getItem("userData") as string
                ) as LoginResponse
            )?.token
        }`,
    },
});

export default instance;
