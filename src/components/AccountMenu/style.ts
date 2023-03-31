import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

type ButtonProps = {
    margin?: number;
    backgroundColor?: string;
};

export const StyledAccountMenuButton = styled(Button, {
    shouldForwardProp: (prop) =>
        prop !== "margin" && prop !== "backgroundColor" && prop !== "sx",
})<ButtonProps>(({ theme, backgroundColor, margin }) => ({
    display: "flex",
    justifyContent: "space-between",

    margin: margin ?? "0 15px 15px",
    padding: "10px",
    borderRadius: backgroundColor ? "5px" : "30px",

    backgroundColor: backgroundColor ?? theme.palette.background.paper,
    boxShadow: backgroundColor ? "none" : "initial",

    textTransform: "none",

    ":hover": {
        backgroundColor,
        boxShadow: backgroundColor ? "none" : "initial",

        "& .MuiSvgIcon-root": {
            color: backgroundColor && theme.palette.text.secondary,
        },
    },

    "& .MuiTypography-root": {
        fontSize: "0.8125rem",
        textAlign: "start",
        width: "100%",
        margin: "0 8px",
    },

    "& .MuiSvgIcon-root": {
        color: theme.palette.divider,
    },
}));
