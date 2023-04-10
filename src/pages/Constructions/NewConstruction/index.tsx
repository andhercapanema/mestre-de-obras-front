import { Divider, TextField, Typography } from "@mui/material";
import { type AxiosError } from "axios";
import { type FormEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
    NewConstructionHeader,
    StyledLoadingButton,
    StyledNewConstruction,
} from "./style";
import { DateField } from "@mui/x-date-pickers";
import usePostConstruction from "../../../hooks/api/useConstructionPost";

export type ConstructionForm = {
    name: string;
    address: string;
    client: string;
    technicalManager: string;
    initialDate: Date | null;
    endDate: Date | null;
};

export function NewConstruction() {
    const [form, setForm] = useState<ConstructionForm>({
        name: "",
        address: "",
        client: "",
        technicalManager: "",
        initialDate: null,
        endDate: null,
    });
    const { name, address, client, technicalManager, initialDate, endDate } =
        form;
    const [formIsComplete, setFormIsComplete] = useState(false);

    const navigate = useNavigate();
    const { postConstructionIsLoading, postConstruction } =
        usePostConstruction();

    function handleForm(
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }

    const checkIfFormIsComplete = useCallback(() => {
        let isFinished = true;
        for (const key in form) {
            const value = form[key as keyof ConstructionForm];

            if (!value) {
                isFinished = false;
            } else if (typeof value === "string" && value.length === 0) {
                isFinished = false;
            } else if (
                typeof value === "object" &&
                (value.toString() === "Invalid Date" ||
                    value.getFullYear() < 1900)
            ) {
                isFinished = false;
            }
        }
        setFormIsComplete(isFinished);
    }, [form]);

    const registerConstruction = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const { constructionId } = await postConstruction(form);
            toast.success("Cadastro realizado com sucesso!");
            navigate(`/obras/${constructionId}`);
        } catch (err) {
            const error = err as AxiosError;

            if (error.response?.data)
                toast.error(error.response.data as string);

            console.error(error);
        }
    };

    useEffect(() => {
        checkIfFormIsComplete();
    }, [checkIfFormIsComplete]);

    return (
        <StyledNewConstruction>
            <NewConstructionHeader>
                <Typography variant="h3">CADASTRO DE NOVA OBRA</Typography>
                <Divider />
            </NewConstructionHeader>
            <form onSubmit={registerConstruction}>
                <TextField
                    id="filled-basic"
                    label="nome"
                    variant="filled"
                    required
                    name="name"
                    onChange={handleForm}
                    value={name}
                />
                <TextField
                    id="filled-basic"
                    label="endereço"
                    variant="filled"
                    required
                    name="address"
                    onChange={handleForm}
                    value={address}
                />
                <TextField
                    id="filled-basic"
                    label="cliente"
                    variant="filled"
                    required
                    name="client"
                    onChange={handleForm}
                    value={client}
                />
                <TextField
                    id="filled-basic"
                    label="responsável técnico"
                    variant="filled"
                    required
                    name="technicalManager"
                    onChange={handleForm}
                    value={technicalManager}
                />
                <DateField
                    label="previsão de data inicial *"
                    value={initialDate}
                    onChange={(insertedDate) => {
                        setForm({ ...form, initialDate: insertedDate });
                    }}
                    slotProps={{
                        textField: () => ({
                            variant: "filled",
                        }),
                    }}
                />
                <DateField
                    label="previsão de data final *"
                    value={endDate}
                    onChange={(insertedDate) => {
                        setForm({ ...form, endDate: insertedDate });
                    }}
                    slotProps={{
                        textField: () => ({
                            variant: "filled",
                        }),
                    }}
                />
                <StyledLoadingButton
                    type="submit"
                    variant="contained"
                    disabled={!formIsComplete}
                    loading={postConstructionIsLoading}
                >
                    Criar conta
                </StyledLoadingButton>
            </form>
        </StyledNewConstruction>
    );
}
