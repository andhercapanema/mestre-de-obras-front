import { Box } from "@mui/material";
import { PageDivider } from "./style";
import { Outlet } from "react-router";
import { ConstructionsHeader } from "./ConstructionsHeader";

export function Constructions() {
    return (
        <>
            <ConstructionsHeader />
            <PageDivider />
            <Box
                sx={{
                    m: "32px auto",
                    px: "80px",
                    maxWidth: "1160px",
                    height: "calc(100% - 64px - 140px - 2px - 64px)",
                }}
            >
                <Outlet />
            </Box>
        </>
    );
}
