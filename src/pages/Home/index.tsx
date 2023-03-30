import Box from "@mui/material/Box";
import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { LeftNavBar } from "../../components/LeftNavBar/LeftNavBar";
import { Outlet } from "react-router-dom";
import { BackgroundOpenDrawer, DrawerHeader, Main } from "./style";

export function Home() {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerIsOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerIsOpen(false);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <Header
                drawerIsOpen={drawerIsOpen}
                handleDrawerOpen={handleDrawerOpen}
            />
            <LeftNavBar drawerIsOpen={drawerIsOpen} />
            <Main drawerIsOpen={drawerIsOpen}>
                <DrawerHeader />
                <Outlet />
            </Main>
            {drawerIsOpen && (
                <BackgroundOpenDrawer onClick={handleDrawerClose}>
                    TESTE
                </BackgroundOpenDrawer>
            )}
        </Box>
    );
}
