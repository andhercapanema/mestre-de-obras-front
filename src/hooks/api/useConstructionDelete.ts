import { useCallback } from "react";
import useAsync from "../useAsync";
import {
    type Construction,
    constructionApi,
} from "../../services/constructionApi";

export default function useConstructionDelete() {
    const {
        loading: deleteConstructionIsLoading,
        error: deleteConstructionError,
        act: deleteConstruction,
    } = useAsync<number, Construction>(
        useCallback(
            async (id: number) =>
                await constructionApi.deleteConstructionById(id),
            []
        ),
        false
    );

    return {
        deleteConstructionIsLoading,
        deleteConstructionError,
        deleteConstruction,
    };
}
