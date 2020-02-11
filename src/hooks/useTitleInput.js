import { useState, useEffect } from 'react';

function useTitleInput(initialValue) {
    // value and function
    // const [value, setValue] = useState(initialState);
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        document.title = value;
    });

    return [value, setValue];
}

export { useTitleInput };