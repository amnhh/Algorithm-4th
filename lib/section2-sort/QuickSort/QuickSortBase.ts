import SortBase from '../SortBase'

export default class QuickSortBase extends SortBase {
    sort (list: number[]): number[] {
        return this._sort(list);
    }

    _sort(list: number[], low: number = 0, high: number = list.length - 1): number[] {
        return list
    }
}
