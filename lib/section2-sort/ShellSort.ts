import SortBase from './SortBase';

class ShellSort extends SortBase {
    sort (list: number[]): number[] {
        const len: number = list.length
        let h: number = 1

        while (h < len / 3) h = 3 * h + 1

        // 跳出条件为 h，h === 1 时即是完全的插入排序，且已排序完成
        while (h >= 1) {
            for (let i: number = h; i < len; i ++) {
                for (let j = i; j >= h && this.less(list[j], list[j - h]); j -= h) {
                    this.swap(list, j, j - h)
                }
            }

            h = Math.floor(h / 3);
        }

        return list
    }

}

export default ShellSort
