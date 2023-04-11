import { Avatar, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { type MouseEvent, useState, useContext } from "react";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import {
    NewConstructionButton,
    PageHeader,
    SelectConstructionButton,
} from "./style";
import { Link, useLocation } from "react-router-dom";
import { ConstructionMenuList } from "../../../components/ConstructionsMenu/ConstructionMenuList";
import { ConstructionsBreadcrumbs } from "./Breadcrumbs";
import ConstructionContext from "../../../contexts/ConstructionContext";

export function ConstructionsHeader() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const { construction } = useContext(ConstructionContext);
    const { pathname } = useLocation();

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
        <>
            <PageHeader>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ mr: 3 }}>
                        <Typography variant="h2" paragraph>
                            Obras
                        </Typography>
                        {(construction ?? pathname === "/obras/cadastro") && (
                            <ConstructionsBreadcrumbs />
                        )}
                    </Box>
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
                                <Typography variant="subtitle1">
                                    {displayedName}
                                </Typography>

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
                            navigateOnClick={true}
                        />
                    </Box>
                </Box>
                <Link to={"/obras/cadastro"}>
                    <NewConstructionButton
                        variant="contained"
                        endIcon={<DomainAddIcon />}
                    >
                        Nova obra
                    </NewConstructionButton>
                </Link>
            </PageHeader>
        </>
    );
}
