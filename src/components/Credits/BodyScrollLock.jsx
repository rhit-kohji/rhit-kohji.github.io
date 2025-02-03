import { useEffect } from 'react';

export const BodyScrollLock = (isOpen) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);
};