export default class SortBase {
    input: number[] = []
    output: number[] = []

    constructor (initList: number[]) {
        this.input = initList
        this.output = this.sort()
    }

    getOutput() {
        return this.output
    }

    /**
     * 算法主方法，子类实现
     */
    sort(): number[] {
        return []
    }

    /**
     * 比大小
     */
    less(v: number, w: number): boolean {
        return v < w
    }

    /**
     * 互换位置
     */
    swap(input: number[], idx1: number, idx2: number): void {
        const tmp: number = input[idx1]
        input[idx1] = input[idx2]
        input[idx2] = tmp
    }

    /**
     * 打印全部数组内的成员
     */
    show(): void {
        console.log('input: ')
        console.log(this.input.join(', '))

        console.log('output: ')
        console.log(this.output.join(', '))
    }

    /**
     * 是否已经有序
     */
    isSorted(): boolean {
        const list: number[] = this.output;
        for (let i: number = 1; i < list.length; i ++) {
            if (this.less(list[i], list[i - 1])) return false
        }
        return true
    }
}
