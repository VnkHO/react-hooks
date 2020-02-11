import { useState, useEffect, useDebugValue } from 'react';

function useTitleInput(initialValue) {
    // value and function
    // const [value, setValue] = useState(initialState);
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        document.title = value;
    });

    useDebugValue(value.length > 0 ? 'Full' : 'Empty')

    return [value, setValue];
}

export { useTitleInput };