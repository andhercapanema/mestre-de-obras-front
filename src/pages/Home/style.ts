import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const drawerWidth = 255;

export const Main = styled("main", {
    shouldForwardProp: (prop) => prop !== "drawerIsOpen",
})<{
    drawerIsOpen?: boolean;
}>(({ theme, drawerIsOpen }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(drawerIsOpen && {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

export const BackgroundOpenDrawer = styled(Box)`
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1101;
`;
