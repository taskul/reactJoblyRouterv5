import { useState, useEffect } from "react"

const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        let value;

        try {
            value = JSON.parse(window.localStorage.getItem(key) || JSON.stringify(defaultValue));
            return value;
        } catch (e) {
            console.log(e)
            value = defaultValue;
        };
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [key, state]);

    return [state, setState];
};

export default useLocalStorage;