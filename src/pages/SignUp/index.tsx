import { Link, TextField } from "@mui/material";
import { type FormEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSignUp from "../../hooks/api/useSignUp";
import { LoadingButton } from "@mui/lab";
import { type AxiosError } from "axios";
import { Auth } from "../../layouts/Auth";

export type RegistrationForm = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export function SignUp() {
    const [form, setForm] = useState<RegistrationForm>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const { name, email, password, confirmPassword } = form;
    const [formIsComplete, setFormIsComplete] = useState(false);
    const [passwordsAreTheSame, setPasswordsAreTheSame] = useState(true);

    const navigate = useNavigate();
    const { signUpLoading, signUp } = useSignUp();

    function handleForm(
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }

    const registerUser =
        /* useCallback( */
        async (e: FormEvent<HTMLFormElement>) => {
            console.log("resgisterUser()");
            e.preventDefault();

            try {
                await signUp({
                    name,
                    email,
                    password,
                });
                toast.success("Cadastro realizado com sucesso!");
                navigate("/login");
            } catch (err) {
                const error = err as AxiosError;

                if (error.response?.data)
                    toast.error(error.response.data as string);

                console.error(error.response);
            }
        }; /* ,
        [signUp, name, email, password, navigate]
    ); */

    const checkIfFormIsComplete = useCallback(() => {
        let isFinished = true;
        for (const key in form) {
            if (form[key as keyof RegistrationForm].length === 0) {
                isFinished = false;
            }
        }
        setFormIsComplete(isFinished);
    }, [form]);

    const checkIfPasswordsAreTheSame = useCallback(() => {
        if (password === confirmPassword) {
            setPasswordsAreTheSame(true);
            return;
        }

        setPasswordsAreTheSame(false);
    }, [password, confirmPassword]);

    useEffect(() => {
        checkIfFormIsComplete();
        checkIfPasswordsAreTheSame();
    }, [checkIfFormIsComplete, checkIfPasswordsAreTheSame]);

    return (
        <Auth title="Cadastro">
            <form onSubmit={registerUser}>
                <TextField
                    id="outlined-basic"
                    label="nome completo"
                    variant="outlined"
                    required
                    name="name"
                    onChange={handleForm}
                    value={name}
                />
                <TextField
                    id="outlined-basic"
                    label="e-mail"
                    variant="outlined"
                    required
                    name="email"
                    onChange={handleForm}
                    value={email}
                    type="email"
                />
                <TextField
                    id="outlined-basic"
                    label="senha"
                    variant="outlined"
                    type="password"
                    required
                    name="password"
                    onChange={handleForm}
                    value={password}
                />
                <TextField
                    id="outlined-basic"
                    label="confirmar senha"
                    variant="outlined"
                    type="password"
                    required
                    name="confirmPassword"
                    onChange={handleForm}
                    value={confirmPassword}
                />
                <LoadingButton
                    type="submit"
                    variant="contained"
                    disabled={!formIsComplete || !passwordsAreTheSame}
                    loading={signUpLoading}
                >
                    Criar conta
                </LoadingButton>
            </form>
            <Link href="/login" underline="hover" color="inherit">
                Já possui uma conta? Faça login
            </Link>
        </Auth>
    );
}
