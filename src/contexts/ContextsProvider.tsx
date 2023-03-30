import { type PropsWithChildren } from "react";
import { LeftNavBarProvider } from "./LeftNavBarContext";
import { UserProvider } from "./UserContext";

export function ContextsProvider({ children }: PropsWithChildren) {
    return (
        <UserProvider>
            <LeftNavBarProvider>{children}</LeftNavBarProvider>
        </UserProvider>
    );
}
