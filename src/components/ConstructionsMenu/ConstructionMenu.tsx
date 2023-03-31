import { Avatar, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { type MouseEvent, useState } from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { SelectConstructionBox, SelectConstructionTypography } from "./style";

export function ConstructionMenu() {
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
                        aria-controls={open ? "account-menu" : undefined}
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
