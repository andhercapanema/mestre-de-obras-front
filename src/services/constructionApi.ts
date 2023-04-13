import { type ConstructionForm } from "../pages";
import api from "./api";

export type Construction = Omit<ConstructionForm, "initialDate" | "endDate"> & {
    id: number;
    initialDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
};

async function postConstruction(
    token: string | undefined,
    body: ConstructionForm
): Promise<Construction> {
    const response = await api.post("/constructions", body, {
        headers: {
            Authorization: `Bearer ${token ?? ""}`,
        },
    });
    return response.data;
}

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

async function getConstructionById(
    token: string | undefined,
    id: number
): Promise<Construction> {
    const response = await api.get(`/constructions/${id}`, {
        headers: {
            Authorization: `Bearer ${token ?? ""}`,
        },
    });
    return response.data;
}

async function patchConstruction(
    token: string | undefined,
    body: ConstructionForm,
    id: number
): Promise<Construction> {
    const response = await api.patch(`/constructions/${id}`, body, {
        headers: {
            Authorization: `Bearer ${token ?? ""}`,
        },
    });
    return response.data;
}

async function deleteConstructionById(
    token: string | undefined,
    id: number
): Promise<Construction> {
    const response = await api.delete(`/constructions/${id}`, {
        headers: {
            Authorization: `Bearer ${token ?? ""}`,
        },
    });
    return response.data;
}

export const constructionApi = {
    postConstruction,
    getConstructions,
    getConstructionById,
    patchConstruction,
    deleteConstructionById,
};
