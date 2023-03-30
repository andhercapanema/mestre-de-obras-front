import { useState, useEffect, useCallback } from "react";

export default function useAsync<B, R>(
    handler: (...args: B[]) => Promise<R>,
    immediate = true
) {
    const [data, setData] = useState<R | null>(null);
    const [loading, setLoading] = useState(immediate);
    const [error, setError] = useState<Error | null>(null);

    const act = useCallback(
        async (...args: B[]) => {
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
        },
        [handler]
    );

    useEffect(() => {
        if (immediate) {
            act().catch((err) => {
                console.error(err);
            });
        }
    }, [immediate, act]);

    return {
        data,
        loading,
        error,
        act,
    };
}
