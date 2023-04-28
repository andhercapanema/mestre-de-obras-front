import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import { NewElementButton, PageHeader } from "./style";
import { ConstructionsBreadcrumbs } from "../../pages/Constructions/ConstructionsHeader/Breadcrumbs";
import { ConstructionsHeaderMenu } from "../../pages/Constructions/ConstructionsHeader/ConstructionsHeaderMenu";
import { type PropsWithChildren, useContext, useEffect, useState } from "react";
import useConstructions from "../../hooks/api/useConstructions";
import ConstructionContext from "../../contexts/ConstructionContext";

export function PagesHeader({
    children,
    pageName,
    newElText,
    newElAction,
    showConstructionsHeaderMenu = true,
}: PropsWithChildren & {
    pageName: string;
    newElText: string;
    newElAction?: () => void;
    showConstructionsHeaderMenu?: boolean;
}) {
    const { construction } = useContext(ConstructionContext);
    const [thereIsMoreThanOneConstruction, setThereIsMoreThanOneConstruction] =
        useState(false);

    const { getConstructions } = useConstructions();

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

    const { pathname } = useLocation();
    const showBreadcrumbs =
        pathname !== `/insumos` &&
        (construction !== null ||
            pathname === `/${pageName.toLowerCase()}/cadastro`);

    return (
        <>
            <PageHeader>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ mr: 3 }}>
                        <Typography variant="h2" paragraph>
                            {pageName}
                        </Typography>
                        {showBreadcrumbs && <ConstructionsBreadcrumbs />}
                    </Box>
                    {showConstructionsHeaderMenu &&
                        thereIsMoreThanOneConstruction && (
                            <ConstructionsHeaderMenu />
                        )}
                </Box>
                {newElAction ? (
                    <NewElementButton
                        variant="contained"
                        endIcon={children}
                        onClick={newElAction}
                    >
                        {newElText}
                    </NewElementButton>
                ) : (
                    <Link to={`/${pageName.toLowerCase()}/cadastro`}>
                        <NewElementButton
                            variant="contained"
                            endIcon={children}
                        >
                            {newElText}
                        </NewElementButton>
                    </Link>
                )}
            </PageHeader>
        </>
    );
}
