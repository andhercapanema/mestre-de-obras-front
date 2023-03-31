import { styled } from "@mui/material/styles";
import MuiAppBar, {
    type AppBarProps as MuiAppBarProps,
} from "@mui/material/AppBar";
import { drawerWidth } from "../../pages/Home/style";
import { Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

type AppBarProps = {
    drawerIsOpen?: boolean;
} & MuiAppBarProps;

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "drawerIsOpen",
})<AppBarProps>(({ theme, drawerIsOpen }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.background.paper,
    ...(drawerIsOpen && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-right: 0 !important;
`;

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
