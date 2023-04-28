import { Avatar, Menu, MenuItem } from "@mui/material";
import { SelectConstructionTypography } from "./style";
import useConstructions from "../../hooks/api/useConstructions";
import { useContext, useEffect, useState } from "react";
import ConstructionContext from "../../contexts/ConstructionContext";
import { useLocation, useNavigate } from "react-router-dom";
import {
    type getConstructionsResponse,
    type Construction,
} from "../../services/constructionApi";
import { Initials } from "../Initials";

export function ConstructionMenuList({
    anchorEl,
    setAnchorEl,
    open,
    mt,
    ml,
}: {
    anchorEl: HTMLElement | null;
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    open: boolean;
    mt?: number;
    ml?: number;
}) {
    const { getConstructions } = useConstructions();
    const [constructionsList, setConstructionsList] =
        useState<getConstructionsResponse | null>(null);
    const { construction, setConstruction } = useContext(ConstructionContext);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleClose = (construction: Construction | null) => {
        setAnchorEl(null);
        setConstruction(construction);
        if (
            construction &&
            (pathname.split("/")[1] === "obras" ||
                pathname.split("/")[1] === "insumos")
        )
            navigate(`/obras/${construction.id}`);
    };

    useEffect(() => {
        getConstructions()
            .then((res) => {
                setConstructionsList(res);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [construction, getConstructions]);

    if (!constructionsList) return <></>;

    return (
        <>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={() => {
                    setAnchorEl(null);
                }}
                onClick={() => {
                    setAnchorEl(null);
                }}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: mt ?? 3,
                        ml: ml ?? 1,
                        minWidth: "230px",
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
                {constructionsList.map((construction) => (
                    <MenuItem
                        onClick={() => {
                            handleClose(construction);
                        }}
                        key={construction.id}
                    >
                        <Avatar sx={{ fontSize: 16 }}>
                            <Initials name={construction.name} />
                        </Avatar>{" "}
                        {construction.name}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}
