import { describe, it } from 'mocha'
import { assert } from 'chai'
import QuickSort from '../QuickSort/QuickSort'
import { generateUnsortedArray } from '../../utils/generator/array.lang'

describe('Quick Sort cases.', () => {
    const input1: number[] = generateUnsortedArray(10)
    const sortedInput1: number[] = [...input1].sort((v1, v2) => v1 - v2)

    const input2: number[] = generateUnsortedArray(10)
    const sortedInput2: number[] = [...input2].sort((v1, v2) => v1 - v2)
    it('quick sort realized correctly', () => {
        const insertionSortResult1 = new QuickSort(input1);
        insertionSortResult1.show();
        assert.deepEqual<number[]>(
            insertionSortResult1.getOutput(),
            sortedInput1,
            'Quick Sort failed.'
        )

        const insertionSortResult2 = new QuickSort(input2);
        insertionSortResult2.show();
        assert.deepEqual<number[]>(
            insertionSortResult2.getOutput(),
            sortedInput2,
            'Quick Sort failed.'
        )
    })
})
