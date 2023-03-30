import { styled } from "@mui/material/styles";
import MuiAppBar, {
    type AppBarProps as MuiAppBarProps,
} from "@mui/material/AppBar";
import { drawerWidth } from "../../pages/Home/style";

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
    ...(drawerIsOpen && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
