import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const SelectConstructionBox = styled(Box)`
    width: 52px;
    display: flex;
    justify-content: center;
    align-items: center;

    .MuiButtonBase-root {
        margin: 0;
    }
`;

export const SelectConstructionTypography = styled(Typography)`
    margin-left: 16px;
    font-weight: 500;
    font-size: 0.8125rem;
`;
