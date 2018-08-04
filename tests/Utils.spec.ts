import 'jasmine';
import * as Utils from "../src/_modules/Utils";

describe('Utils', () => {
    it('should verify 0 is not NaN', () => {
        expect(() => Utils.verifyNaN(0)).not.toThrow(Utils.ValidationError);
    });
    it('should verify NaN is NaN', () => {
        expect(() => Utils.verifyNaN(NaN)).toThrowError('Value NaN is NaN');
    });
});
