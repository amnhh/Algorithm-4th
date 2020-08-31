import MergeSortBase from './MergeSortBase'

export default class MergeSortBottomToTop extends MergeSortBase {
    _sort(list: number[]): number[] {
        for (let size: number = 1; size < list.length; size += size) {
            for (let low: number = 0; low < list.length - size; low += size + size) {
                this._merge(list, low, low + size - 1, Math.min(low + size + size - 1, list.length - 1))
            }
        }
        return list
    }
}
