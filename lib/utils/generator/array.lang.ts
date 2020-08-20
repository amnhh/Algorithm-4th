/**
 * 获取乱序数组
 * @param size
 */
export const generateUnsortedArray = (size: number): number[] => {
    return [...Array<number>(size)]
        .map((v, i) => i + Math.floor(Math.random() * i))
        .sort(() => Math.random() - 0.5)
}
