import { describe, it } from 'mocha'
import { assert } from 'chai'
import MergeSortBottomToTop from '../MergeSort/MergeSortBottomToTop';
import { generateUnsortedArray } from '../../utils/generator/array.lang';

describe('Merge sort bottom to top', () => {
    const input1: number[] = generateUnsortedArray(10)
    const sortedInput1: number[] = [...input1].sort((v1, v2) => v1 - v2)

    const input2: number[] = generateUnsortedArray(10)
    const sortedInput2: number[] = [...input2].sort((v1, v2) => v1 - v2)

    it('Merge sort correctly', () => {
        const insertionSortResult1 = new MergeSortBottomToTop(input1);
        insertionSortResult1.show();
        assert.deepEqual<number[]>(
            insertionSortResult1.getOutput(),
            sortedInput1,
            'Merge Sort failed.'
        )

        const insertionSortResult2 = new MergeSortBottomToTop(input2);
        insertionSortResult2.show();
        assert.deepEqual<number[]>(
            insertionSortResult2.getOutput(),
            sortedInput2,
            'Merge Sort failed.'
        )
    })
})
