import * as chai from 'chai';
import * as Utils from '../src/_modules/Utils';

const expect = chai.expect;

describe('Utils', () => {
    it('should verify 0 is not NaN', () => {
        expect(() => Utils.verifyNaN(0)).not.to.throw(Utils.ValidationError);
    });
    it('should verify NaN is NaN', () => {
        expect(() => Utils.verifyNaN(NaN)).to.throw('Value NaN is NaN');
    });
});
