import { styled } from "@mui/material/styles";
import { themeOptions } from "../../layouts/Theme";

export const SearchForm = styled("form")`
    display: flex;
    height: 38px;
    background-color: ${({ theme }) => theme.palette.background.default};
    border-radius: 5px;
    position: relative;

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

    .MuiBox-root {
        position: absolute;
        background-color: ${themeOptions.palette.background.paper};
        left: 0;
        top: calc(100% + 6.5px);
        width: 100%;
        height: 10px;
        z-index: 1101;
    }

    .MuiList-root {
        position: absolute;
        background-color: ${themeOptions.palette.background.paper};
        left: 0;
        top: calc(100% + 13px);
        width: 100%;
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
            0px 4px 5px 0px rgba(0, 0, 0, 0.14),
            0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        padding: 0;
    }

    .MuiListItem-root {
        padding: 0;
    }

    .MuiButtonBase-root {
        padding: 6px 16px;
    }

    .MuiListItemIcon-root {
        min-width: 40px;
    }
`;
