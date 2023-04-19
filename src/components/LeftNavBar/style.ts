import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { Avatar, List, ListItemButton, Typography } from "@mui/material";
import { themeOptions } from "../../layouts/Theme";

export const StyledDrawer = styled(Drawer)`
    .MuiPaper-root {
        background-color: ${themeOptions.palette.background.dark};
        border-right: none;
    }

    .MuiDivider-root {
        border-color: ${themeOptions.palette.text.light};
    }
`;

export const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "center",
    flexDirection: "column",
}));

export const StyledLogo = styled(Avatar)`
    width: 60px;
    height: 60px;
    margin-top: 20px;
`;

export const StyledTitle = styled(Typography)`
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 15px;
    color: ${themeOptions.palette.text.lightest};
`;

export const StyledList = styled(List)`
    color: ${themeOptions.palette.text.light};

    a {
        color: inherit;
        text-decoration: inherit;
        width: 100%;
    }
`;

type ListItemButtonProps = {
    isSelected: boolean;
};

export const StyledListItemButton = styled(ListItemButton, {
    shouldForwardProp: (prop) => prop !== "isSelected" && prop !== "sx",
})<ListItemButtonProps>(({ isSelected }) => ({
    color: isSelected
        ? themeOptions.palette.text.lightest
        : themeOptions.palette.text.light,

    ":hover": {
        color: themeOptions.palette.text.lightest,

        "& .MuiListItemIcon-root": {
            color: themeOptions.palette.text.lightest,
        },
    },

    "& .MuiListItemIcon-root": {
        color: isSelected
            ? themeOptions.palette.text.lightest
            : themeOptions.palette.text.light,
    },
}));
