import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAccountMenuButton = styled(Button)`
    display: flex;
    justify-content: space-between;

    margin: 0 15px 15px;
    padding: 10px;
    border-radius: 30px;

    background-color: ${({ theme }) => theme.palette.background.paper};

    text-transform: none;

    .MuiTypography-root {
        font-size: 0.8125rem;
        text-align: start;
        width: 100%;
        margin: 0 8px;
    }

    .MuiSvgIcon-root {
        color: ${({ theme }) => theme.palette.divider};
    }
`;
