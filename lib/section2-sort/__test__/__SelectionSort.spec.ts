import { describe, it } from 'mocha'
import { assert } from 'chai'
import SelectionSort from '../SelectionSort';
import { generateUnsortedArray } from '../../utils/generator/array.lang';

describe('Selection Sort Cases', () => {
    const input: number[] = generateUnsortedArray(10)
    const sortedInput: number[] = [...input].sort((v1, v2) => v1 - v2)
    it('sort correctly', () => {
        const selectionSortResult = new SelectionSort(input);
        selectionSortResult.show();
        assert.deepEqual<number[]>(
            selectionSortResult.getOutput(),
            sortedInput,
            'Selection Sort failed.'
        )
    })
});
