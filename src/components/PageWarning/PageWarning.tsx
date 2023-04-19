import { Typography } from "@mui/material";
import { StyledPageWarning } from "./style";

export function PageWarning({ warning }: { warning: string }) {
    return (
        <StyledPageWarning>
            <Typography>{warning}</Typography>
        </StyledPageWarning>
    );
}
