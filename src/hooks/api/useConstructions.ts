import { useCallback } from "react";
import useAsync from "../useAsync";
import {
    constructionApi,
    type getConstructionsResponse,
} from "../../services/constructionApi";

export default function useConstructions() {
    const {
        data: constructions,
        loading: constructionsIsLoading,
        error: constructionsError,
        act: getConstructions,
    } = useAsync<string, getConstructionsResponse>(
        useCallback(async () => await constructionApi.getConstructions(), [])
    );

    return {
        constructions,
        constructionsIsLoading,
        constructionsError,
        getConstructions,
    };
}
