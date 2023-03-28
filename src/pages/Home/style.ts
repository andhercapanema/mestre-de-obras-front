import { Container } from "@mui/material";
import styled from "styled-components";

export const StyledPage = styled(Container)`
    display: flex;
    min-height: 100vh;

    > nav {
        background-color: green;
        width: 255px;
    }

    > div {
        width: 100%;

        nav {
            display: flex;
            background-color: red;
            height: 65px;
        }

        main {
            background-color: blue;
            height: calc(100% - 65px);
        }
    }
`;
