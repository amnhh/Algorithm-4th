import QuickSortBase from './QuickSortBase'

/**
 * 三路快排
 */
export default class QuickSortPro extends QuickSortBase {
    _sort (list: number[], low: number = 0, high: number = list.length - 1): number[] {
        if (high <= low) return
        // 执行遍历的值
        let i: number = low + 1
        // 从左开始，第一个等于 pivot 值的索引，保证 [low, lt - 1] 均小于 pivot
        let lt: number = low
        // 从右开始，第一个等于 pivot 值的索引，保证 [gt + 1, high] 均大于 pivot
        let gt: number = high

        const pivot = list[low]

        while (i <= gt) {
            // 当前值小于基准值
            if (this.less(list[i], pivot)) {
                this.swap(list, i ++, lt ++)
            } else if (!this.less(list[i], pivot)) {
                this.swap(list, i, gt--)
            } else {
                i ++
            }
        }

        this._sort(list, low, lt - 1);
        this._sort(list, gt + 1, high)

        return list
    }
}
