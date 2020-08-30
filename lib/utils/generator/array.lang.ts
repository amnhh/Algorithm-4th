/**
 * 获取空白数组
 *
 * @param size
 */
export const generateEmptyArray = (size: number): number[] => {
    return [...Array<number>(size)]
}

/**
 * 获取 base <= target <= 2 * base 的随机值
 *
 * @param base
 */
export const getRandomNumber = (base: number): number => (base + Math.floor(Math.random() * base))


/**
 * 获取随机的结果
 *
 * @param list
 */
export const getRandomResult = (): number => Math.random() - 0.5

/**
 * 获取乱序数组
 * @param size
 */
export const generateUnsortedArray = (size: number): number[] => {
    return generateEmptyArray(size)
        .map((v, i) => getRandomNumber(i))
        .sort(getRandomResult)
}
