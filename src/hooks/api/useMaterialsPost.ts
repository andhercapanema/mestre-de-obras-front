import { useCallback } from "react";
import useAsync from "../useAsync";
import { type MaterialForm } from "../../pages/Materials/MaterialsList/NewMaterial";
import { materialApi, type Material } from "../../services/materialApi";

export default function useMaterialsPost() {
    const {
        data: materials,
        loading: postMaterialsIsLoading,
        error: postMaterialsError,
        act: postMaterials,
    } = useAsync<
        {
            newMaterials: MaterialForm[];
        },
        Material[]
    >(
        useCallback(async (body) => await materialApi.postMaterials(body), []),
        false
    );

    return {
        materials,
        postMaterialsIsLoading,
        postMaterialsError,
        postMaterials,
    };
}
