import { useLayoutEffect } from 'react';

function useBodyScrollLock() {
    useLayoutEffect(() => {

        const originalOverflow = window.getComputedStyle(document.body).overflow;

        document.body.style.overflow = 'hidden';
        // return function cleanUp() {
        //     document.body.style.overflow = '';
        // }
        return () => {
            document.body.style.overflow = originalOverflow;
        }
    }, []);
}

export { useBodyScrollLock };