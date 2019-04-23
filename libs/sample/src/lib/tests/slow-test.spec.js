import { SampleClass69 } from '../../index';
describe('slow-test', function () {
    it('with import is slow', function () {
        var foo = "foo";
        var sample = new SampleClass69();
        sample.foo = foo;
        expect(sample.foo).toEqual(foo);
    });
});
//# sourceMappingURL=slow-test.spec.js.map