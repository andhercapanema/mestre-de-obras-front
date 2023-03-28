import { Avatar, Box, Container, FormLabel } from "@mui/material";
import styled from "styled-components";
import backgroundImg from "../../assets/images/papel-de-parede-adesivo-cimento-queimado.jpg";
import logo from "../../assets/images/constructor-hat-helmet-protection-svgrepo-com.svg";
import { PropsWithChildren } from "react";

export function Auth(props: PropsWithChildren & { title: string }) {
    const { title, children } = props;

    return (
        <StyledPage>
            <FormContainer>
                <Avatar alt="Mestre de Obras Logo" src={logo} />
                <FormLabel>{title}</FormLabel>
                {children}
                {/* <form onSubmit={registerUser}>
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
                    Jé tem uma conta? Faça login
                </Link> */}
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

    .MuiLink-root {
        text-align: center;
    }

    .MuiLink-root:hover {
        text-decoration: underline;
    }
`;
