export const setItem = (key: string, value: string) => {
    localStorage.setItem(key, value);
}

export const getItem = (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

export const removeItem = (key: string) => {
    localStorage.removeItem(key);
}

export const clear = () => {
    localStorage.clear();
}