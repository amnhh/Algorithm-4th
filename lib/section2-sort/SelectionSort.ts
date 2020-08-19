import SortBase from './SortBase';

class SelectionSort extends SortBase {
    /**
     * @override
     */
    sort(): number[] {
        const list: number[] = [...this.input]
        for (let i: number = 0; i < list.length; i ++) {
            let minimal: number = i
            for (let j = i + 1; j < list.length; j ++) {
                if (this.less(list[j], list[minimal])) minimal = j
            }
            this.swap(list, i, minimal)
        }
        return list
    }
}

export default SelectionSort
