import { IconButton, Tooltip } from "@mui/material";
import { type MouseEvent, useState } from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { SelectConstructionBox } from "./style";
import { ConstructionMenuList } from "./ConstructionMenuList";

export function ConstructionMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
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
            <ConstructionMenuList
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                open={open}
            />
        </>
    );
}
