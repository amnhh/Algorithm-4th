import { describe, it } from 'mocha'
import { assert } from 'chai'
import SelectionSort from '../SelectionSort';

describe('Selection Sort Cases', () => {
    const input: number[] = [8, 1, 4, 2, 5, 1, 23, 5, 6]
    const sortedInput: number[] = [...input].sort((v1, v2) => v1 - v2)
    it('sort correctly', () => {
        assert.deepEqual<number[]>(
            new SelectionSort(input).getOutput(),
            sortedInput,
            'Selection Sort failed.'
        )
    })
});
