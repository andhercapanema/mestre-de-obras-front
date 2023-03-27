import {
    RegistrationBody,
    RegistrationResponse,
    userApi,
} from "../../services/userApi";
import useAsync from "../useAsync";

export default function useSignUp() {
    const {
        loading: signUpLoading,
        error: signUpError,
        act: signUp,
    } = useAsync<Promise<RegistrationResponse>, RegistrationBody>(
        userApi.signUp,
        false
    );

    return {
        signUpLoading,
        signUpError,
        signUp,
    };
}
