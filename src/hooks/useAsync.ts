import { useState, useEffect } from "react";

export default function useAsync<T, B>(
    handler: (...args: B[]) => T,
    immediate = true
) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(immediate);
    const [error, setError] = useState<Error | null>(null);

    const act = async (...args: B[]) => {
        setLoading(true);
        setError(null);

        try {
            const data = await handler(...args);
            setData(data);
            setLoading(false);
            return data;
        } catch (err) {
            setError(err as Error);
            setLoading(false);
            throw err;
        }
    };

    useEffect(() => {
        if (immediate) {
            act();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        data,
        loading,
        error,
        act,
    };
}
