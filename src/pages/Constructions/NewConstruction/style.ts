import { LoadingButton } from "@mui/lab";
import { Box, styled } from "@mui/material";
import { themeOptions } from "../../../layouts/Theme";

export const NewConstructionHeader = styled(Box)`
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 32px;

    .MuiTypography-h3 {
        font-size: 0.9375rem;
        font-weight: 600;
        letter-spacing: 2px;
        margin-right: 8px;
    }

    .MuiDivider-root {
        width: calc(100% - 229.25px - 8px);
        border-color: ${themeOptions.palette.darkDivider};
    }
`;

export const StyledNewConstruction = styled(Box)`
    form {
        display: flex;
        flex-direction: column;

        .MuiTextField-root {
            margin-bottom: 16px;
        }

        .MuiInputBase-input {
            height: 54px;
        }
    }
`;

export const StyledLoadingButton = styled(LoadingButton)`
    width: 150px;
    margin-left: auto;
    margin-right: 0;

    color: ${({ disabled }) =>
        disabled ? "initial" : themeOptions.palette.text.lightest};
`;
