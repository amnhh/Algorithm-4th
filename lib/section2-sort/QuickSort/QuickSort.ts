import QuickSortBase from './QuickSortBase'

export default class QuickSort extends QuickSortBase {
    _sort (list: number[], low: number = 0, high: number = list.length - 1): number[] {
        if (low >= high) return
        // 保证 list[low...idx - 1] <= list[idx] <=  list[idx + 1...high]
        const idx = this._partition(list, low, high)
        this._sort(list, low, idx - 1)
        this._sort(list, idx + 1, high)
        return list
    }

    _partition(list: number[], low: number = 0, high: number = list.length - 1): number {
        let i: number = low
        let j: number = high + 1
        const pivot: number = list[low]

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

        // 最后这次交换 j 的位置，是因为 j 代表的是右侧开始，第一个小于 pivot 的值
        // 与 pivot 位交换，则可以保证 [low, j) 位的值均小于 pivot
        // 如果与 i 交换，而 i 的定义为左侧开始，第一个大于 pivot 的值，则又会将一个大于 pivot 的值放到 low 的位置上
        // 不能满足 [low, j) 位的值均小于 pivot
        this.swap(list, low, j)
        return j
    }
}
