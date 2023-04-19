import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import { NewConstructionButton, PageHeader } from "./style";
import { Link, useLocation } from "react-router-dom";
import { ConstructionsBreadcrumbs } from "./Breadcrumbs";
import ConstructionContext from "../../../contexts/ConstructionContext";
import { ConstructionsHeaderMenu } from "./ConstructionsHeaderMenu";
import useConstructions from "../../../hooks/api/useConstructions";

export function ConstructionsHeader() {
    const { construction } = useContext(ConstructionContext);
    const { pathname } = useLocation();

    const { getConstructions } = useConstructions();
    const [thereIsMoreThanOneConstruction, setThereIsMoreThanOneConstruction] =
        useState(false);

    useEffect(() => {
        getConstructions()
            .then((res) => {
                if (res.length > 1) {
                    setThereIsMoreThanOneConstruction(true);
                } else {
                    setThereIsMoreThanOneConstruction(false);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, [construction, getConstructions]);

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
                    {thereIsMoreThanOneConstruction && (
                        <ConstructionsHeaderMenu />
                    )}
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
