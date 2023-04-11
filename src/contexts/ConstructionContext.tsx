import { createContext, useState, type PropsWithChildren } from "react";
import { type Construction } from "../services/constructionApi";

type ConstructionContextType = {
    construction: Construction | null;
    setConstruction: (value: Construction | null) => void;
};

const defaultValue = {
    construction: null,
    setConstruction: () => {},
};

const ConstructionContext =
    createContext<ConstructionContextType>(defaultValue);
export default ConstructionContext;

export function ConstructionProvider({ children }: PropsWithChildren) {
    const [construction, setConstruction] = useState<Construction | null>(null);

    return (
        <ConstructionContext.Provider value={{ construction, setConstruction }}>
            {children}
        </ConstructionContext.Provider>
    );
}
