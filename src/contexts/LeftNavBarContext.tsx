import {
    createContext,
    type Dispatch,
    type SetStateAction,
    useState,
    type PropsWithChildren,
} from "react";

type LeftNavBarContextType = {
    drawerIsOpen: boolean | undefined;
    setDrawerIsOpen: Dispatch<SetStateAction<boolean>>;
};

const defaultValue = {
    drawerIsOpen: true,
    setDrawerIsOpen: () => {},
};

const LeftNavBarContext = createContext<LeftNavBarContextType>(defaultValue);
export default LeftNavBarContext;

export function LeftNavBarProvider({ children }: PropsWithChildren) {
    const [drawerIsOpen, setDrawerIsOpen] = useState(true);

    return (
        <LeftNavBarContext.Provider value={{ drawerIsOpen, setDrawerIsOpen }}>
            {children}
        </LeftNavBarContext.Provider>
    );
}
