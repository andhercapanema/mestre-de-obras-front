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

export function ConstructionsList() {
    const navigate = useNavigate();

    const { constructions } = useConstructions();

    function navigateTo(id: number) {
        navigate(`/obras/${id}`);
    }

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
                    {constructions.map(
                        ({
                            id,
                            name,
                            address,
                            client,
                            technicalManager,
                            initialDate,
                            endDate,
                        }) => (
                            <TableRow
                                key={id}
                                onClick={() => {
                                    navigateTo(id);
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {name}
                                </TableCell>
                                <TableCell align="left">{address}</TableCell>
                                <TableCell align="center">{client}</TableCell>
                                <TableCell align="center">
                                    {technicalManager}
                                </TableCell>
                                <TableCell align="center">
                                    {format(
                                        new Date(initialDate),
                                        "dd/MM/yyyy"
                                    )}
                                </TableCell>
                                <TableCell align="center">
                                    {format(new Date(endDate), "dd/MM/yyyy")}
                                </TableCell>
                            </TableRow>
                        )
                    )}
                </TableBody>
            </StyledTable>
        </TableContainer>
    );
}
