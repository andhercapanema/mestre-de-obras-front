import { type MaterialForm } from "../pages/Materials/MaterialsList/NewMaterial";
import api from "./api";

export type Material = MaterialForm & {
    id: number;
    createdAt: string;
    updatedAt: string;
};

async function postMaterials(body: {
    newMaterials: MaterialForm[];
}): Promise<Material[]> {
    const response = await api.post("/materials", body);
    return response.data;
}

export type getMaterialsResponse = Material[];

async function getMaterials(): Promise<getMaterialsResponse> {
    const response = await api.get("/materials");
    return response.data;
}

export const materialApi = {
    postMaterials,
    getMaterials,
};
