import SortBase from '../SortBase'

export default class MergeSortBase extends SortBase {
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

    _sort(list: number[]): number[] {
        return list
    }
}
