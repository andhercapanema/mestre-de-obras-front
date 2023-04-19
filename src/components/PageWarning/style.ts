import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledPageWarning = styled(Box)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .MuiTypography-root {
        text-transform: uppercase;
        color: ${({ theme }) => theme.palette.text.secondary};
        font-weight: 600;
        letter-spacing: 2px;
    }
`;
