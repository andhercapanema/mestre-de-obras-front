import { useCallback } from "react";
import { type getUserResponse, userApi } from "../../services/userApi";
import useAsync from "../useAsync";
import useToken from "../useToken";

export default function useUser() {
    const token = useToken();

    const {
        data: user,
        loading: userIsLoading,
        error: getUserError,
        act: getUser,
    } = useAsync<string, getUserResponse>(
        useCallback(async () => await userApi.getUser(token), [token]),
        false
    );

    return {
        user,
        userIsLoading,
        getUserError,
        getUser,
    };
}
