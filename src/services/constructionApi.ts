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

export type Construction = Omit<ConstructionForm, "initialDate" | "endDate"> & {
    id: number;
    initialDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
};

export type getConstructionsResponse = Construction[];

async function getConstructions(
    token: string | undefined
): Promise<getConstructionsResponse> {
    const response = await api.get("/constructions", {
        headers: {
            Authorization: `Bearer ${token ?? ""}`,
        },
    });
    return response.data;
}

export const constructionApi = {
    postConstruction,
    getConstructions,
};
