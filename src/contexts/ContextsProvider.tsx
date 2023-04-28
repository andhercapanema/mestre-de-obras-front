import { type PropsWithChildren } from "react";
import { LeftNavBarProvider } from "./LeftNavBarContext";
import { UserProvider } from "./UserContext";
import { ConstructionProvider } from "./ConstructionContext";
import { NewMaterialProvider } from "./NewMaterialContext";

export function ContextsProvider({ children }: PropsWithChildren) {
    return (
        <UserProvider>
            <LeftNavBarProvider>
                <ConstructionProvider>
                    <NewMaterialProvider>{children}</NewMaterialProvider>
                </ConstructionProvider>
            </LeftNavBarProvider>
        </UserProvider>
    );
}
