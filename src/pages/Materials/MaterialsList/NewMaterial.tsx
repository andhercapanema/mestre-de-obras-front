import { type FormEvent, useContext, useState } from "react";
import NewMaterialContext from "../../../contexts/NewMaterialContext";
import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    TextField,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { StyledDialog } from "./style";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import useMaterialsPost from "../../../hooks/api/useMaterialsPost";
import { toast } from "react-toastify";
import { type AxiosError } from "axios";

export type MaterialForm = {
    name: string;
    unit: string;
};

export function NewMaterial() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const { isCreatingNewMaterial, setIsCreatingNewMaterial } =
        useContext(NewMaterialContext);
    const [form, setForm] = useState<MaterialForm[]>([
        {
            name: "",
            unit: "",
        },
    ]);
    const { postMaterials } = useMaterialsPost();

    function handleForm(
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
        idx: number
    ) {
        const { name, value } = e.target;
        setForm((prevForm) =>
            prevForm.map((material, i) =>
                i !== idx ? material : { ...material, [name]: value }
            )
        );
    }

    const postNewMaterial = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await postMaterials({ newMaterials: form });
            toast.success("Cadastro realizado com sucesso!");
            setIsCreatingNewMaterial(false);
        } catch (err) {
            const error = err as AxiosError;

            if (error.response?.data)
                toast.error(error.response.data as string);

            console.error(error);
        }
    };

    console.log({ newMaterials: form });

    return (
        <StyledDialog
            fullScreen={fullScreen}
            open={isCreatingNewMaterial}
            onClose={() => {
                setIsCreatingNewMaterial(false);
            }}
            aria-labelledby="responsive-dialog-title"
        >
            <form onSubmit={postNewMaterial}>
                <DialogTitle id="responsive-dialog-title">
                    {"Criar novo(s) insumo(s)"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Por favor insira os dados do(s) insumo(s) que deseja
                        criar:
                    </DialogContentText>
                    {new Array(form.length).fill(undefined).map((_, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                bgcolor: theme.palette.background.default,
                                mb: "8px",
                                padding: 1.5,
                                borderRadius: 2,
                            }}
                        >
                            {form.length === 1 ? (
                                <>
                                    <TextField
                                        id="filled-basic"
                                        label={
                                            form.length > 1
                                                ? `nome ${idx + 1}`
                                                : "nome"
                                        }
                                        variant="standard"
                                        required
                                        name="name"
                                        onChange={(e) => {
                                            handleForm(e, idx);
                                        }}
                                        value={form[idx].name}
                                    />
                                    <TextField
                                        id="filled-basic"
                                        label={
                                            form.length > 1
                                                ? `unidade ${idx + 1}`
                                                : "unidade"
                                        }
                                        variant="standard"
                                        required
                                        name="unit"
                                        onChange={(e) => {
                                            handleForm(e, idx);
                                        }}
                                        value={form[idx].unit}
                                    />
                                </>
                            ) : (
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box>
                                        <TextField
                                            id="filled-basic"
                                            label={
                                                form.length > 1
                                                    ? `nome ${idx + 1}`
                                                    : "nome"
                                            }
                                            variant="standard"
                                            required
                                            name="name"
                                            onChange={(e) => {
                                                handleForm(e, idx);
                                            }}
                                            value={form[idx].name}
                                        />
                                        <TextField
                                            id="filled-basic"
                                            label={
                                                form.length > 1
                                                    ? `unidade ${idx + 1}`
                                                    : "unidade"
                                            }
                                            variant="standard"
                                            required
                                            name="unit"
                                            onChange={(e) => {
                                                handleForm(e, idx);
                                            }}
                                            value={form[idx].unit}
                                        />
                                    </Box>
                                    <IconButton
                                        aria-label="cancel adding this material"
                                        onClick={() => {
                                            setForm(
                                                form.filter((_, i) => i !== idx)
                                            );
                                        }}
                                    >
                                        <CancelRoundedIcon />
                                    </IconButton>
                                </Box>
                            )}
                        </Box>
                    ))}
                    <IconButton
                        aria-label="add one more material"
                        onClick={() => {
                            setForm([
                                ...form,
                                {
                                    name: "",
                                    unit: "",
                                },
                            ]);
                        }}
                    >
                        <AddCircleRoundedIcon />
                    </IconButton>
                </DialogContent>
                <DialogActions>
                    <Button type="submit">Criar</Button>
                    <Button
                        onClick={() => {
                            setIsCreatingNewMaterial(false);
                        }}
                    >
                        Cancelar
                    </Button>
                </DialogActions>
            </form>
        </StyledDialog>
    );
}
