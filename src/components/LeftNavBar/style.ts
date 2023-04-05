import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { Avatar, List, Typography } from "@mui/material";
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
    }

    .MuiSvgIcon-root {
        color: ${themeOptions.palette.text.light};
    }

    .MuiListItem-root {
        &:hover {
            color: ${themeOptions.palette.text.lighter};

            .MuiSvgIcon-root {
                color: ${themeOptions.palette.text.lighter};
            }
        }
    }
`;
