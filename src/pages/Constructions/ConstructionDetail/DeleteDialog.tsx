import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { type Dispatch } from "react";
import { StyledDialog } from "./style";
import useConstructionDelete from "../../../hooks/api/useConstructionDelete";
import { type AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function DeleteDialog({
    deleteDialogIsOpen,
    setDeleteDialogIsOpen,
    id,
}: {
    deleteDialogIsOpen: boolean;
    setDeleteDialogIsOpen: Dispatch<React.SetStateAction<boolean>>;
    id: number;
}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const { deleteConstruction } = useConstructionDelete();
    const navigate = useNavigate();

    const confirmDeleteConstruction = async () => {
        try {
            await deleteConstruction(id);
            toast.success("Obra deletada com sucesso!");
            navigate("/obras");
        } catch (err) {
            const error = err as AxiosError;

            if (error.response?.data)
                toast.error(error.response.data as string);

            console.error(error.response);
            setDeleteDialogIsOpen(false);
        }
    };

    return (
        <>
            <StyledDialog
                fullScreen={fullScreen}
                open={deleteDialogIsOpen}
                onClose={() => {
                    setDeleteDialogIsOpen(false);
                }}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    Excluir obra
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Tem certeza que deseja excluir essa obra? Todos
                        elementos associados a ela também serão deletados
                        permanentemente!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setDeleteDialogIsOpen(false);
                        }}
                    >
                        Cancelar
                    </Button>
                    <Button onClick={confirmDeleteConstruction}>Deletar</Button>
                </DialogActions>
            </StyledDialog>
        </>
    );
}
