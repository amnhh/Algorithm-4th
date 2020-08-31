import MergeSortBase from './MergeSortBase'

/**
 * 归并排序主类
 *
 * 自顶向下
 */

export default class MergeSortTopToBottom extends MergeSortBase {

    /**
     * 真实的 sort 方法
     * @param list
     * @param low
     * @param high
     * @private
     */
    _sort(list: number[], low: number = 0, high: number = list.length - 1): number[] {
        if (high <= low) return
        const mid = low + Math.floor((high - low) / 2)
        this._sort(list, low, mid)
        this._sort(list, mid + 1, high)
        this._merge(list, low, mid, high)
        return list
    }
}
