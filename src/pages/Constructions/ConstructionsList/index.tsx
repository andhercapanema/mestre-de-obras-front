import {
    Paper,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import useConstructions from "../../../hooks/api/useConstructions";
import { StyledTable } from "./style";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import ConstructionContext from "../../../contexts/ConstructionContext";
import { type Construction } from "../../../services/constructionApi";

export function ConstructionsList() {
    const navigate = useNavigate();

    const { constructions } = useConstructions();
    const { setConstruction } = useContext(ConstructionContext);

    function navigateTo(construction: Construction) {
        setConstruction(construction);
        navigate(`/obras/${construction.id}`);
    }

    useEffect(() => {
        setConstruction(null);
    }, [setConstruction]);

    if (!constructions) return <></>;

    return (
        <TableContainer component={Paper}>
            <StyledTable sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell align="center">Endereço</TableCell>
                        <TableCell align="center">Cliente</TableCell>
                        <TableCell align="center">
                            Responsável técnico
                        </TableCell>
                        <TableCell align="center">
                            Previsão de data inicial
                        </TableCell>
                        <TableCell align="center">
                            Previsão de data final
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {constructions.map((construction) => (
                        <TableRow
                            key={construction.id}
                            onClick={() => {
                                navigateTo(construction);
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {construction.name}
                            </TableCell>
                            <TableCell align="left">
                                {construction.address}
                            </TableCell>
                            <TableCell align="center">
                                {construction.client}
                            </TableCell>
                            <TableCell align="center">
                                {construction.technicalManager}
                            </TableCell>
                            <TableCell align="center">
                                {format(
                                    new Date(construction.initialDate),
                                    "dd/MM/yyyy"
                                )}
                            </TableCell>
                            <TableCell align="center">
                                {format(
                                    new Date(construction.endDate),
                                    "dd/MM/yyyy"
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </TableContainer>
    );
}
