import { Avatar, FormLabel } from "@mui/material";
import logo from "../../assets/images/constructor-hat-helmet-protection-svgrepo-com.svg";
import { type PropsWithChildren } from "react";
import { FormContainer, StyledPage } from "./style";

export function Auth(props: PropsWithChildren & { title: string }) {
    const { title, children } = props;

    return (
        <StyledPage>
            <FormContainer>
                <Avatar alt="Mestre de Obras Logo" src={logo} />
                <FormLabel>{title}</FormLabel>
                {children}
            </FormContainer>
        </StyledPage>
    );
}
