import { Avatar, Box, Button, FormLabel, Link, TextField } from "@mui/material";
import { Container } from "@mui/system";
import styled from "styled-components";
import backgroundImg from "../assets/images/papel-de-parede-adesivo-cimento-queimado.jpg";
import logo from "../assets/images/constructor-hat-helmet-protection-svgrepo-com.svg";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSignUp from "../hooks/api/useSignUp";
import { LoadingButton } from "@mui/lab";

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
    const { /* loadingSignUp, */ signUp } = useSignUp();

    function handleForm(
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    async function registerUser(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("submitou");

        try {
            await signUp({
                name,
                email,
                password,
            });
            toast.success("Cadastro realizado com sucesso!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/login");
        } catch (err) {
            console.error((err as Error).message);
        }
    }

    function checkIfFormIsComplete() {
        let isFinished = true;
        for (const key in form) {
            if (form[key as keyof RegistrationForm].length === 0) {
                isFinished = false;
            }
        }
        setFormIsComplete(isFinished ? true : false);
    }

    function checkIfPasswordsAreTheSame() {
        if (password === confirmPassword) return setPasswordsAreTheSame(true);

        setPasswordsAreTheSame(false);
    }

    useEffect(() => {
        checkIfFormIsComplete();
        checkIfPasswordsAreTheSame();
    }, [form]);

    return (
        <StyledPage>
            <FormContainer>
                <Avatar alt="Mestre de Obras Logo" src={logo} />
                <FormLabel>Cadastro</FormLabel>
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
                    >
                        Criar conta
                    </LoadingButton>
                </form>
                <Link href="/login" underline="hover" color="inherit">
                    Jé tem uma conta? Faça login
                </Link>
            </FormContainer>
        </StyledPage>
    );
}

const StyledPage = styled(Container)`
    min-height: 500.5px;
    height: 100vh;
    background-image: url(${backgroundImg});
    max-width: none !important;
    display: flex !important;
    align-items: center;
    justify-content: center;
` as typeof Container;

const FormContainer = styled(Box)`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    box-shadow: 4px 4px 10px 5px rgba(0, 0, 0, 0.3);
    padding: 20px 30px 30px;
    min-width: 350px;

    .MuiAvatar-root {
        width: 70px;
        height: 70px;
    }

    .MuiFormLabel-root {
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 10px;
        color: #000;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 10px;

        .MuiFormLabel-root {
            font-size: 1rem;
            font-weight: 400;
            color: inherit;
        }

        .MuiTextField-root {
            margin-bottom: 10px;
        }
    }

    .MuiLink-root:hover {
        text-decoration: underline;
    }
`;
