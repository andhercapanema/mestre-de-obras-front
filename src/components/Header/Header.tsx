import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    SelectConstructionBox,
    SelectConstructionTypography,
    StyledToolbar,
} from "./style";
import { SearchInput } from "../SearchInput/SearchInput";
import { ScrollTop } from "../ScrollTop/ScrollTop";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
    Avatar,
    Box,
    Divider,
    Menu,
    MenuItem,
    Tooltip,
    useTheme,
} from "@mui/material";
import { AccountMenu } from "../AccountMenu/AccountMenu";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { type MouseEvent, useState } from "react";

export function Header({
    drawerIsOpen,
    handleDrawerOpen,
}: {
    drawerIsOpen: boolean;
    handleDrawerOpen: () => void;
}) {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    <Box sx={{ display: "flex" }}>
                        <AccountMenu
                            margin={0}
                            backgroundColor={theme.palette.background.paper}
                        />
                        <Divider orientation="vertical" flexItem />
                        <SelectConstructionBox
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                textAlign: "center",
                            }}
                        >
                            <Tooltip title="Trocar Obra">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={
                                        open ? "account-menu" : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                >
                                    <ApartmentIcon />
                                </IconButton>
                            </Tooltip>
                        </SelectConstructionBox>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: "visible",
                                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                    mt: 3,
                                    ml: 1,
                                    "& .MuiAvatar-root": {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    "&:before": {
                                        content: '""',
                                        display: "block",
                                        position: "absolute",
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: "background.paper",
                                        transform:
                                            "translateY(-50%) rotate(45deg)",
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{
                                horizontal: "right",
                                vertical: "top",
                            }}
                            anchorOrigin={{
                                horizontal: "right",
                                vertical: "bottom",
                            }}
                        >
                            <SelectConstructionTypography variant="subtitle1">
                                Selecione a Obra
                            </SelectConstructionTypography>
                            <MenuItem onClick={handleClose}>
                                <Avatar sx={{ fontSize: 16 }}>A</Avatar>{" "}
                                Acapulco
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Avatar sx={{ fontSize: 16 }}>TS</Avatar>{" "}
                                Trilhas do Sabiá
                            </MenuItem>
                        </Menu>
                    </Box>
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
