import { styled } from "@mui/material/styles";

export const SearchForm = styled("form")`
    display: flex;
    height: 38px;
    background-color: ${({ theme }) => theme.palette.background.default};
    border-radius: 5px;

    .MuiInputBase-root {
        height: 100%;
        padding-left: 10px;
    }

    .MuiInputBase-input {
        padding: 0;
    }

    .MuiOutlinedInput-notchedOutline {
        border: none;
    }

    .MuiButtonBase-root {
        border-radius: 0 5px 5px 0;
    }
`;
