import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { PageDivider } from "./style";
import { type PropsWithChildren } from "react";

export function PageBody({ children }: PropsWithChildren) {
    return (
        <>
            {children}
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
