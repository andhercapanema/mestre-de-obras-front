import { type ConstructionForm } from "../pages";
import api from "./api";

export type Construction = Omit<ConstructionForm, "initialDate" | "endDate"> & {
    id: number;
    initialDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
};

async function postConstruction(body: ConstructionForm): Promise<Construction> {
    const response = await api.post("/constructions", body);
    return response.data;
}

export type getConstructionsResponse = Construction[];

async function getConstructions(): Promise<getConstructionsResponse> {
    const response = await api.get("/constructions");
    return response.data;
}

async function getConstructionById(id: number): Promise<Construction> {
    const response = await api.get(`/constructions/${id}`);
    return response.data;
}

async function patchConstruction(
    body: ConstructionForm,
    id: number
): Promise<Construction> {
    const response = await api.patch(`/constructions/${id}`, body);
    return response.data;
}

async function deleteConstructionById(id: number): Promise<Construction> {
    const response = await api.delete(`/constructions/${id}`);
    return response.data;
}

export const constructionApi = {
    postConstruction,
    getConstructions,
    getConstructionById,
    patchConstruction,
    deleteConstructionById,
};
