import { createContext, PropsWithChildren, useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import { LoginResponse } from "../services/authApi";

type UserContextType = {
    userData: LoginResponse | null;
    setUserData: (value: Object | Function) => void;
};

const defaultValue = {
    userData: {
        user: {
            id: 0,
            email: "",
        },
        token: "",
    },
    setUserData: (value: Object | Function) => {},
};

const UserContext = createContext<UserContextType>(defaultValue);
export default UserContext;

export function UserProvider({ children }: PropsWithChildren) {
    const { data: userData, setData: setUserData } =
        useLocalStorage<LoginResponse | null>(
            "userData",
            defaultValue.userData
        );

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
}
