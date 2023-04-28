import { Avatar, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { SelectConstructionButton } from "./style";
import { ConstructionMenuList } from "../../../components/ConstructionsMenu/ConstructionMenuList";
import ConstructionContext from "../../../contexts/ConstructionContext";
import { type MouseEvent, useContext, useState } from "react";

export function ConstructionsHeaderMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const { construction } = useContext(ConstructionContext);

    const displayedName = construction
        ? construction.name
        : "Nenhuma selecionada";

    const displayedNameArr = displayedName.split(" ");

    const firstLetters =
        displayedNameArr.length === 1
            ? displayedNameArr[0][0]
            : displayedNameArr[0][0] +
              displayedNameArr[displayedNameArr.length - 1][0];

    return (
        <Box>
            <SelectConstructionButton
                variant="contained"
                onClick={handleClick}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
            >
                <Avatar variant="rounded">{firstLetters}</Avatar>
                <Box>
                    <Typography variant="subtitle1">{displayedName}</Typography>

                    <Typography variant="subtitle2">
                        Selecione a obra
                    </Typography>
                </Box>
                <ArrowDropDownIcon />
            </SelectConstructionButton>
            <ConstructionMenuList
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                open={open}
                mt={1}
                ml={0}
            />
        </Box>
    );
}
