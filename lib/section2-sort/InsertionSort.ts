import SortBase from './SortBase';

class InsertionSort extends SortBase {
    /**
     * @override
     */
    sort (list: number[]): number[] {
        for (let i: number = 1; i < list.length; i ++) {
            for (let j: number = i; j > 0; j --) {
                if (this.less(list[j], list[j - 1]))
                    this.swap(list, j, j - 1)
            }
        }
        return list
    }
}

export default InsertionSort
