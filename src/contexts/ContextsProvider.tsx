import { type PropsWithChildren } from "react";
import { LeftNavBarProvider } from "./LeftNavBarContext";
import { UserProvider } from "./UserContext";
import { ConstructionProvider } from "./ConstructionContext";

export function ContextsProvider({ children }: PropsWithChildren) {
    return (
        <UserProvider>
            <LeftNavBarProvider>
                <ConstructionProvider>{children}</ConstructionProvider>
            </LeftNavBarProvider>
        </UserProvider>
    );
}
