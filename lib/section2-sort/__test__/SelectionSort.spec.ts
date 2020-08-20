import { describe, it } from 'mocha'
import { assert } from 'chai'
import SelectionSort from '../SelectionSort';
import { generateUnsortedArray } from '../../utils/generator/array.lang';

describe('Selection Sort Cases', () => {
    const input1: number[] = generateUnsortedArray(10)
    const sortedInput1: number[] = [...input1].sort((v1, v2) => v1 - v2)

    const input2: number[] = generateUnsortedArray(10)
    const sortedInput2: number[] = [...input2].sort((v1, v2) => v1 - v2)

    it('selection sort correctly', () => {
        const selectionSortResult1 = new SelectionSort(input1);
        selectionSortResult1.show();
        assert.deepEqual<number[]>(
            selectionSortResult1.getOutput(),
            sortedInput1,
            'Selection Sort failed.'
        )

        const selectionSortResult2 = new SelectionSort(input2);
        selectionSortResult2.show();
        assert.deepEqual<number[]>(
            selectionSortResult2.getOutput(),
            sortedInput2,
            'Selection Sort failed.'
        )
    })
});
