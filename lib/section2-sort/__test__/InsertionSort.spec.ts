import { describe, it } from 'mocha'
import { assert } from 'chai'
import InsertionSort from '../InsertionSort';
import { generateUnsortedArray } from '../../utils/generator/array.lang';

describe('Insertion Sort Cases', () => {
    console.log('Insertion Sort: ')

    const input1: number[] = generateUnsortedArray(10)
    const sortedInput1: number[] = [...input1].sort((v1, v2) => v1 - v2)

    const input2: number[] = generateUnsortedArray(10)
    const sortedInput2: number[] = [...input2].sort((v1, v2) => v1 - v2)

    it('sort correctly', () => {
        const selectionSortResult1 = new InsertionSort(input1);
        selectionSortResult1.show();
        assert.deepEqual<number[]>(
            selectionSortResult1.getOutput(),
            sortedInput1,
            'Insertion Sort failed.'
        )

        const selectionSortResult2 = new InsertionSort(input2);
        selectionSortResult2.show();
        assert.deepEqual<number[]>(
            selectionSortResult2.getOutput(),
            sortedInput2,
            'Insertion Sort failed.'
        )
    })
});
