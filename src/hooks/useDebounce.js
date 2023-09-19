import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(false);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
    }, [value]);
}

export default useDebounce;
