import { describe, it } from 'mocha'
import { assert } from 'chai'
import InsertionSort from '../InsertionSort';
import { generateUnsortedArray } from '../../utils/generator/array.lang';

describe('Insertion Sort Cases', () => {
    const input1: number[] = generateUnsortedArray(10)
    const sortedInput1: number[] = [...input1].sort((v1, v2) => v1 - v2)

    const input2: number[] = generateUnsortedArray(10)
    const sortedInput2: number[] = [...input2].sort((v1, v2) => v1 - v2)

    it('insertion sort correctly', () => {
        const insertionSortResult1 = new InsertionSort(input1);
        insertionSortResult1.show();
        assert.deepEqual<number[]>(
            insertionSortResult1.getOutput(),
            sortedInput1,
            'Insertion Sort failed.'
        )

        const insertionSortResult2 = new InsertionSort(input2);
        insertionSortResult2.show();
        assert.deepEqual<number[]>(
            insertionSortResult2.getOutput(),
            sortedInput2,
            'Insertion Sort failed.'
        )
    })
});
