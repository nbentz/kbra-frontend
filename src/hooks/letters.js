import { useMemo } from 'react';

export const useLetters = () => {
    return useMemo(()=> {
        const arr = new Array(26);
        arr.fill('A')
        arr.forEach( (letter, index) => arr[index] = String.fromCharCode(index + 65))
        return arr;
    }, []);
}