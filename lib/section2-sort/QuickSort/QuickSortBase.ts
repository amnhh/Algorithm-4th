import SortBase from '../SortBase'

export default class QuickSortBase extends SortBase {
    sort (list: number[]): number[] {
        return this._sort(list);
    }

    _sort(list: number[], low: number = 0, high: number = list.length - 1): number[] {
        return list
    }

    _partition(list: number[], low: number = 0, high: number = list.length - 1): number {
        // 左侧开始，第一个大于 pivot 的索引
        let i: number = low
        // 右侧开始，第一个小于 pivot 的索引
        let j: number = high + 1
        const pivot = list[low]

        while (true) {
            while (this.less(list[++i], pivot)) {
                if (i === high) break
            }

            while (!this.less(list[--j], pivot)) {
                if (j === low) break
            }

            if (i >= j) break
            this.swap(list, i, j)
        }

        this.swap(list, low, j)
        return j
    }
}
