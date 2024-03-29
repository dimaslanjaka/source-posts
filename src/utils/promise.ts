/**
 * async delayed
 * @param ms milliseconds
 */
export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
