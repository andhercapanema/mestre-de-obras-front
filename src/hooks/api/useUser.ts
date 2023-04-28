import { useCallback } from "react";
import { type getUserResponse, userApi } from "../../services/userApi";
import useAsync from "../useAsync";

export default function useUser() {
    const {
        data: user,
        loading: userIsLoading,
        error: getUserError,
        act: getUser,
    } = useAsync<string, getUserResponse>(
        useCallback(async () => await userApi.getUser(), []),
        false
    );

    return {
        user,
        userIsLoading,
        getUserError,
        getUser,
    };
}
