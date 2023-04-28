import {
    Paper,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { StyledTable } from "./style";
import { PageWarning } from "../../../components/PageWarning/PageWarning";
import useMaterials from "../../../hooks/api/useMaterials";
import { useContext, useEffect, useState } from "react";
import NewMaterialContext from "../../../contexts/NewMaterialContext";
import { NewMaterial } from "./NewMaterial";
import { type Material } from "../../../services/materialApi";

export function MaterialsList() {
    const { getMaterials } = useMaterials();
    const [materials, setMaterials] = useState<Material[]>();

    const { isCreatingNewMaterial } = useContext(NewMaterialContext);

    useEffect(() => {
        getMaterials()
            .then((res) => {
                setMaterials(res);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [getMaterials, isCreatingNewMaterial]);

    if (!materials) return <></>;

    if (materials.length === 0)
        return <PageWarning warning="Cadastre já um novo insumo!" />;

    return (
        <>
            {isCreatingNewMaterial && <NewMaterial />}
            <TableContainer
                component={Paper}
                sx={{ maxWidth: 500, marginX: "auto" }}
            >
                <StyledTable aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell align="center">Unidade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {materials
                            .sort((a, b) =>
                                a.name.localeCompare(b.name, "pt", {
                                    sensitivity: "base",
                                })
                            )
                            .map((material) => (
                                <TableRow key={material.id}>
                                    <TableCell component="th" scope="row">
                                        {material.name}
                                    </TableCell>
                                    <TableCell align="center">
                                        {material.unit}
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </StyledTable>
            </TableContainer>
        </>
    );
}
