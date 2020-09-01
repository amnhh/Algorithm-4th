import QuickSortBase from './QuickSortBase'

export default class QuickSort extends QuickSortBase {
    _sort (list: number[], low: number = 0, high: number = list.length - 1): number[] {
        return super._sort(list, low, high);
    }

    _partition(list: number[], low: number = 0, high: number = list.length - 1) {}
}
