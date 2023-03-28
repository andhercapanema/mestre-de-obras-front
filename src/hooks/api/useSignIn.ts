import { LoginForm } from "../../pages";
import { authApi, LoginResponse } from "../../services/authApi";
import useAsync from "../useAsync";

export default function useLogin() {
    const {
        loading: loginLoading,
        error: loginError,
        act: login,
    } = useAsync<Promise<LoginResponse>, LoginForm>(authApi.signIn, false);

    return {
        loginLoading,
        loginError,
        login,
    };
}
