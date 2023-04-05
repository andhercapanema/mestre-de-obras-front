import { type ConstructionForm } from "../pages";
import api from "./api";

export type PostConstructionResponse = {
    constructionId: number;
};

async function postConstruction(
    token: string | undefined,
    body: ConstructionForm
): Promise<PostConstructionResponse> {
    const response = await api.post("/constructions", body, {
        headers: {
            Authorization: `Bearer ${token ?? ""}`,
        },
    });
    return response.data;
}

export const constructionApi = {
    postConstruction,
};
