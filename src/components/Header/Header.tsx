import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar } from "./style";

export function Header({
    drawerIsOpen,
    handleDrawerOpen,
}: {
    drawerIsOpen: boolean;
    handleDrawerOpen: () => void;
}) {
    return (
        <AppBar position="fixed" drawerIsOpen={drawerIsOpen}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="drawerIsOpen drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(drawerIsOpen && { display: "none" }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Persistent drawer
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
