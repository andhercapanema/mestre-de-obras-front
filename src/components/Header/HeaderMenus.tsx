import { Box, Divider, useTheme } from "@mui/material";
import { AccountMenu } from "../AccountMenu/AccountMenu";
import { ConstructionMenu } from "../ConstructionsMenu/ConstructionMenu";
import { useContext, useEffect, useState } from "react";
import ConstructionContext from "../../contexts/ConstructionContext";
import useConstructions from "../../hooks/api/useConstructions";

export function HeaderMenus() {
    const theme = useTheme();
    const { getConstructions } = useConstructions();
    const [thereIsMoreThanOneConstruction, setThereIsMoreThanOneConstruction] =
        useState(false);
    const { construction } = useContext(ConstructionContext);

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
        <Box sx={{ display: "flex" }}>
            <AccountMenu
                margin={0}
                backgroundColor={theme.palette.background.paper}
            />
            {thereIsMoreThanOneConstruction && (
                <>
                    <Divider orientation="vertical" flexItem />
                    <ConstructionMenu />
                </>
            )}
        </Box>
    );
}
