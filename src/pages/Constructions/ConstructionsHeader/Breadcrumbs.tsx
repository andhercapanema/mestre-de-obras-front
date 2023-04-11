import Typography from "@mui/material/Typography";
import { useContext, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { StyledBreadcrumbs } from "./style";
import ConstructionContext from "../../../contexts/ConstructionContext";

export function ConstructionsBreadcrumbs() {
    const { construction } = useContext(ConstructionContext);

    function handleClick(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) {
        event.preventDefault();
    }

    const breadcrumbs = [
        <Link key="1" color="inherit" to="/obras" onClick={() => handleClick}>
            Obras
        </Link>,
        <Typography key="2" color="text.primary">
            {construction?.name}
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
