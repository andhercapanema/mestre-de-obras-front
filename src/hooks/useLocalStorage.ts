import { useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : initialValue;
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: Object | Function) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.log(error);
        }
    };

    return { data: storedValue, setData: setValue };
}
