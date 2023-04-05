import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { LeftNavBar } from "../../components/LeftNavBar/LeftNavBar";
import { Outlet } from "react-router-dom";
import { BackgroundOpenDrawer, DrawerHeader, Main, MainPageBox } from "./style";

export function Home() {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerIsOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerIsOpen(false);
    };

    return (
        <MainPageBox>
            <Header
                drawerIsOpen={drawerIsOpen}
                handleDrawerOpen={handleDrawerOpen}
            />
            <LeftNavBar drawerIsOpen={drawerIsOpen} />
            <Main drawerIsOpen={drawerIsOpen}>
                <DrawerHeader id="back-to-top-anchor" />
                <Outlet />
            </Main>
            {drawerIsOpen && (
                <BackgroundOpenDrawer onClick={handleDrawerClose}>
                    TESTE
                </BackgroundOpenDrawer>
            )}
        </MainPageBox>
    );
}
