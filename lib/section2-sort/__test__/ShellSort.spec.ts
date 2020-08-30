import { describe, it } from 'mocha'
import { assert } from 'chai'
import ShellSort from '../ShellSort';
import { generateUnsortedArray } from '../../utils/generator/array.lang';

describe('Shell Sort cases', () => {
    const input1 = generateUnsortedArray(1000)
    const result1 = [...input1].sort((v1, v2) => v1 - v2)

    const input2 = generateUnsortedArray(10)
    const result2 = [...input2].sort((v1, v2) => v1 - v2)

    it('shell sort correctly', () => {
        const shellSort1 = new ShellSort([...input1])
        shellSort1.show();
        assert.deepEqual<number[]>(result1, shellSort1.getOutput())

        const shellSort2 = new ShellSort([...input2])
        shellSort2.show();
        assert.deepEqual<number[]>(result2, shellSort2.getOutput())
    })
})
