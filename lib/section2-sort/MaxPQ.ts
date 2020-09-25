/**
 * 优先队列
 */

interface IFaceMaxPQ {

    /**
     * 向优先队列插入一个元素
     * @param v
     */
    insert(v: number): void

    /**
     * 返回最大元素
     */
    max(): number

    /**
     * 删除并返回最大元素
     */
    delMax(): number

    /**
     * 返回队列是否为空
     */
    isEmpty(): boolean

    /**
     * 返回当前队列的个数
     */
    size(): number
}

export default class MaxPQ implements IFaceMaxPQ {

    /**
     * 内部保存的数组
     */
    list: number[] = []

    /**
     * @constructor
     */
    constructor (a: number[]) {
        this.list = [...a];
    }

    /**
     * 插入一个元素
     * @param v
     */
    insert(v: number): void {}

    /**
     * 返回最大值
     */
    max(): number {}

    /**
     * 删除并返回最大元素
     */
    delMax(): number {}

    /**
     * 返回队列是否为空
     */
    isEmpty(): boolean {}

    /**
     * 返回当前的队列长度
     */
    size(): number {
        return this.list.length;
    }
}
