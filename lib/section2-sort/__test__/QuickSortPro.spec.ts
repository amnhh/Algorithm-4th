import { describe, it } from 'mocha'
import { assert } from 'chai'
import QuickSortPro from '../QuickSort/QuickSortPro'
import { generateUnsortedArray } from '../../utils/generator/array.lang'

describe('Quick Sort Pro cases.', () => {
    const input1: number[] = generateUnsortedArray(10)
    const sortedInput1: number[] = [...input1].sort((v1, v2) => v1 - v2)

    const input2: number[] = generateUnsortedArray(10)
    const sortedInput2: number[] = [...input2].sort((v1, v2) => v1 - v2)
    it('quick sort realized correctly', () => {
        const insertionSortResult1 = new QuickSortPro(input1);
        insertionSortResult1.show();
        assert.deepEqual<number[]>(
            insertionSortResult1.getOutput(),
            sortedInput1,
            'Quick Sort Pro failed.'
        )

        const insertionSortResult2 = new QuickSortPro(input2);
        insertionSortResult2.show();
        assert.deepEqual<number[]>(
            insertionSortResult2.getOutput(),
            sortedInput2,
            'Quick Sort Pro failed.'
        )
    })
})
