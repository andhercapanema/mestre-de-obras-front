import {
    type RegistrationBody,
    type RegistrationResponse,
    userApi,
} from "../../services/userApi";
import useAsync from "../useAsync";

export default function useSignUp() {
    const {
        loading: signUpLoading,
        error: signUpError,
        act: signUp,
    } = useAsync<RegistrationBody, RegistrationResponse>(userApi.signUp, false);

    return {
        signUpLoading,
        signUpError,
        signUp,
    };
}
