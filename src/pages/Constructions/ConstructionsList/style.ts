import { Table, styled } from "@mui/material";
import { themeOptions } from "../../../layouts/Theme";

export const StyledTable = styled(Table)`
    .MuiTableHead-root {
        background: ${({ theme }) => theme.palette.primary.main};

        * {
            color: ${themeOptions.palette.text.lightest};
            text-align: center;
            cursor: initial;
        }
    }

    .MuiTableRow-root {
        cursor: pointer;
    }

    .MuiTableRow-root:nth-of-type(2n) {
        background: ${({ theme }) => theme.palette.primary.light};
    }
`;
