import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, StyledToolbar } from "./style";
import { SearchInput } from "../SearchInput/SearchInput";
import { ScrollTop } from "../ScrollTop/ScrollTop";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/material";
import { HeaderMenus } from "./HeaderMenus";

export function Header({
    drawerIsOpen,
    handleDrawerOpen,
}: {
    drawerIsOpen: boolean;
    handleDrawerOpen: () => void;
}) {
    return (
        <>
            <AppBar position="fixed" drawerIsOpen={drawerIsOpen}>
                <StyledToolbar>
                    <Box sx={{ display: "flex" }}>
                        <IconButton
                            color="inherit"
                            aria-label="drawerIsOpen drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                mr: 2,
                                ...(drawerIsOpen && { display: "none" }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <SearchInput />
                    </Box>
                    <HeaderMenus />
                </StyledToolbar>
            </AppBar>
            <ScrollTop>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    );
}
