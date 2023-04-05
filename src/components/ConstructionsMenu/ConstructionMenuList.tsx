import { Avatar, Menu, MenuItem } from "@mui/material";
import { SelectConstructionTypography } from "./style";

export function ConstructionMenuList({
    anchorEl,
    open,
    handleClose,
    mt,
    ml,
}: {
    anchorEl: HTMLElement | null;
    open: boolean;
    handleClose: () => void;
    mt?: number;
    ml?: number;
}) {
    return (
        <>
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
                        mt: mt ?? 3,
                        ml: ml ?? 1,
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
                            transform: "translateY(-50%) rotate(45deg)",
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
                    <Avatar sx={{ fontSize: 16 }}>A</Avatar> Acapulco
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Avatar sx={{ fontSize: 16 }}>TS</Avatar> Trilhas do Sabiá
                </MenuItem>
            </Menu>
        </>
    );
}
