import { Link, TextField } from "@mui/material";
import {
    type FormEvent,
    type ChangeEvent,
    useContext,
    useEffect,
    useState,
    useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import { type AxiosError } from "axios";
import { Auth } from "../../layouts/Auth";
import useLogin from "../../hooks/api/useSignIn";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";
import { type LoginResponse } from "../../services/authApi";

export type LoginForm = {
    email: string;
    password: string;
};

export function SignIn() {
    const [form, setForm] = useState<LoginForm>({
        email: "",
        password: "",
    });
    const { email, password } = form;
    const [formIsComplete, setFormIsComplete] = useState(false);

    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();
    const { loginLoading, login } = useLogin();

    function handleForm(
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    async function loginIntoPage(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const userData = await login(form);
            setUserData(userData);
            api.defaults.headers.Authorization = `Bearer ${
                (
                    JSON.parse(
                        localStorage.getItem("userData") as string
                    ) as LoginResponse
                )?.token
            }`;
            toast.success("Login realizado com sucesso!");
            navigate("/");
        } catch (err) {
            const error = err as AxiosError;

            if (error.response?.data)
                toast.error(error.response.data as string);

            console.error(error.response);
        }
    }

    const checkIfFormIsComplete = useCallback(() => {
        let isFinished = true;
        for (const key in form) {
            if (form[key as keyof LoginForm].length === 0) {
                isFinished = false;
            }
        }
        setFormIsComplete(isFinished);
    }, [form]);

    useEffect(() => {
        checkIfFormIsComplete();
    }, [checkIfFormIsComplete]);

    return (
        <Auth title="Login">
            <form onSubmit={loginIntoPage}>
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
                <LoadingButton
                    type="submit"
                    variant="contained"
                    disabled={!formIsComplete}
                    loading={loginLoading}
                >
                    Entrar
                </LoadingButton>
            </form>
            <Link href="/cadastro" underline="hover" color="inherit">
                Ainda não possui uma conta? <br /> Faça seu cadastro
            </Link>
        </Auth>
    );
}
