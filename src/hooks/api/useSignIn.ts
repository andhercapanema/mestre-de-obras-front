import { type LoginForm } from "../../pages";
import { authApi, type LoginResponse } from "../../services/authApi";
import useAsync from "../useAsync";

export default function useLogin() {
    const {
        loading: loginLoading,
        error: loginError,
        act: login,
    } = useAsync<LoginForm, LoginResponse>(authApi.signIn, false);

    return {
        loginLoading,
        loginError,
        login,
    };
}
