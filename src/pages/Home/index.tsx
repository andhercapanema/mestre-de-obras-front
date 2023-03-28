import { Outlet } from "react-router-dom";
import { StyledPage } from "./style";

export function Home() {
    return (
        <StyledPage>
            <nav>menu lateral</nav>
            <div>
                <nav>menu topo</nav>
                <main>
                    <Outlet />
                </main>
            </div>
        </StyledPage>
    );
}
