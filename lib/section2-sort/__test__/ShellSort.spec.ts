import { describe, it } from 'mocha'
import { assert } from 'chai'
import ShellSort from '../ShellSort';
import { generateUnsortedArray } from '../../utils/generator/array.lang';

describe('Shell Sort cases', () => {
    const input1 = generateUnsortedArray(1000)
    const result1 = [...input1].sort((v1, v2) => v1 - v2)

    it('shell sort correctly', () => {
        const shellSort = new ShellSort([...input1])
        shellSort.show();
        assert.deepEqual<number[]>(result1, shellSort.getOutput())
    })
})
