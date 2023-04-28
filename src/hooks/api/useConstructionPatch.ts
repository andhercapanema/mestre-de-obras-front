import { useCallback } from "react";
import useAsync from "../useAsync";
import {
    constructionApi,
    type Construction,
} from "../../services/constructionApi";
import { type ConstructionForm } from "../../pages";

export default function useConstructionPatch() {
    const {
        data: construction,
        loading: patchConstructionIsLoading,
        error: patchConstructionError,
        act: patchConstruction,
    } = useAsync<ConstructionForm | number, Construction>(
        useCallback(
            async (body, id) =>
                await constructionApi.patchConstruction(
                    body as ConstructionForm,
                    id as number
                ),
            []
        ),
        false
    );

    return {
        construction,
        patchConstructionIsLoading,
        patchConstructionError,
        patchConstruction,
    };
}
