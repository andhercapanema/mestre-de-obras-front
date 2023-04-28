import { useCallback } from "react";
import useAsync from "../useAsync";
import {
    type getMaterialsResponse,
    materialApi,
} from "../../services/materialApi";

export default function useMaterials() {
    const {
        data: materials,
        loading: materialsIsLoading,
        error: materialsError,
        act: getMaterials,
    } = useAsync<string, getMaterialsResponse>(
        useCallback(async () => await materialApi.getMaterials(), [])
    );

    return {
        materials,
        materialsIsLoading,
        materialsError,
        getMaterials,
    };
}
