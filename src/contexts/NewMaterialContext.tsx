import {
    createContext,
    useState,
    type PropsWithChildren,
    type Dispatch,
} from "react";

type NewMaterialContextType = {
    isCreatingNewMaterial: boolean;
    setIsCreatingNewMaterial: Dispatch<React.SetStateAction<boolean>>;
};

const defaultValue = {
    isCreatingNewMaterial: false,
    setIsCreatingNewMaterial: () => {},
};

const NewMaterialContext = createContext<NewMaterialContextType>(defaultValue);
export default NewMaterialContext;

export function NewMaterialProvider({ children }: PropsWithChildren) {
    const [isCreatingNewMaterial, setIsCreatingNewMaterial] = useState(false);

    return (
        <NewMaterialContext.Provider
            value={{ isCreatingNewMaterial, setIsCreatingNewMaterial }}
        >
            {children}
        </NewMaterialContext.Provider>
    );
}
