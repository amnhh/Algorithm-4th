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
}
