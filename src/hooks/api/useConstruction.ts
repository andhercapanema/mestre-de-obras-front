import { useCallback } from "react";
import useAsync from "../useAsync";
import {
    type Construction,
    constructionApi,
} from "../../services/constructionApi";

export default function useConstruction() {
    const {
        data: construction,
        loading: constructionIsLoading,
        error: constructionError,
        act: getConstruction,
    } = useAsync<number, Construction>(
        useCallback(
            async (id: number) => await constructionApi.getConstructionById(id),
            []
        ),
        false
    );

    return {
        construction,
        constructionIsLoading,
        constructionError,
        getConstruction,
    };
}
