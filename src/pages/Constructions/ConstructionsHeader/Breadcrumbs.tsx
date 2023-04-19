import Typography from "@mui/material/Typography";
import { useContext, type MouseEvent, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledBreadcrumbs } from "./style";
import ConstructionContext from "../../../contexts/ConstructionContext";

export function ConstructionsBreadcrumbs() {
    const { construction, setConstruction } = useContext(ConstructionContext);
    const { pathname } = useLocation();

    function handleClick(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) {
        event.preventDefault();
    }

    useEffect(() => {
        if (pathname === "/obras/cadastro") setConstruction(null);
    }, [pathname, setConstruction]);

    const breadcrumbs = [
        <Link key="1" color="inherit" to="/obras" onClick={() => handleClick}>
            Obras
        </Link>,
        <Typography key="2" color="text.primary">
            {construction ? construction?.name : "Cadastro"}
        </Typography>,
    ];

    return (
        <>
            <StyledBreadcrumbs separator="›" aria-label="breadcrumb">
                {breadcrumbs}
            </StyledBreadcrumbs>
        </>
    );
}
