import { Avatar, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { type MouseEvent, useState } from "react";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import { ConstructionMenuList } from "../../components/ConstructionsMenu/ConstructionMenuList";
import {
    NewConstructionButton,
    PageDivider,
    PageHeader,
    SelectConstructionButton,
} from "./style";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export function Constructions() {
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
            <PageHeader>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ mr: 3 }}>
                        <Typography variant="h2" paragraph>
                            Obras
                        </Typography>
                        {/* TODO: adicionar Breadcrumbs */}
                    </Box>
                    <Box>
                        <SelectConstructionButton
                            variant="contained"
                            onClick={handleClick}
                            aria-controls={open ? "account-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                        >
                            <Avatar variant="rounded">A</Avatar>
                            <Box>
                                <Typography variant="subtitle1">
                                    Acapulco
                                </Typography>
                                <Typography variant="subtitle2">
                                    Selecione a obra
                                </Typography>
                            </Box>
                            <ArrowDropDownIcon />
                        </SelectConstructionButton>
                        <ConstructionMenuList
                            anchorEl={anchorEl}
                            open={open}
                            handleClose={handleClose}
                            mt={1}
                            ml={0}
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
            <PageDivider />
            <Box sx={{ my: "32px", px: "calc((100% - 1000px) / 2)" }}>
                <Outlet />
            </Box>
        </>
    );
}
