export const getImageUrl = (path) => { // takes relative path
    return new URL(`/assets/${path}`, import.meta.url).href;
} // takes base URL of website and appends relative path and returns it