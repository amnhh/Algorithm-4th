import SortBase from './SortBase'

/**
 * 归并排序主类
 *
 * 归并思想
 */

export default class MergeSort extends SortBase {

    sort (list: number[]): number[] {
        return this._sort(list)
    }

    /**
     * 合并两个有序数组
     * 将 a[lo..mid] 和 a[mid+1..hi] 两个有序数组合并为 a[lo..hi] 一整个有序数组
     *
     * @param list 原数组
     * @param low 低位
     * @param mid 中间位
     * @param high 高位
     */

    _merge(list: number[], low: number, mid: number, high: number) {
        // i 负责 [0, low] 区间， j 负责 (low, high] 区间
        let i: number = low
        let j: number = mid + 1

        // 帮助数组 => 暂存原数组
        const helperList: number[] = []
        for (let k: number = low; k <= high; k ++) {
            helperList[k] = list[k]
        }

        for (let k: number = low; k <= high; k ++) {
            // i 已经被消费完
            if (i > mid) {
                list[k] = helperList[j ++]
                continue
            }

            // j 已经被消费完
            if (j > high) {
                list[k] = helperList[i ++]
                continue
            }

            if (this.less(helperList[i], helperList[j])) {
                list[k] = helperList[i ++]
            } else {
                list[k] = helperList[j ++]
            }

        }

    }

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
