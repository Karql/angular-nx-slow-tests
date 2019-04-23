import { SampleClass69 } from '../../index'

describe('slow-test', () => {
    it('with import is slow', () => {
        const foo = "foo";
        let sample = new SampleClass69();
        sample.foo = foo;

        expect(sample.foo).toEqual(foo);
    })
})