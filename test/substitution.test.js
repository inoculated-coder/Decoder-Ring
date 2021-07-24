const {expect} = require('chai');
const substitution = require('../src/substitution');

describe('substitution', () => {
    it('should check to see if the function exisits', () => {
        if (typeof substitution.substitution === "function"){
            console.log('test passed')
        }else{
            console.log('test failed')
        }
    })
        it('should return false if alphabet is not equal to 26', () => {
            const expected = false;
            const actual = substitution.substitution('thinkful', 'qwertyuiopasdfghjklzxcvbn');
            expect(actual).to.equal(expected);
    })
        it('should return false if a character repeats in the alphabet', () => {
        const expected = false;
        const actual = substitution.substitution('thinkful', 'qqwertyuiopasdfghjklzxcvbn');
        expect(actual).to.equal(expected);
    })
        it('should return encoded message', () => {
        const expected = 'oqxqd';
        const actual = substitution.substitution('JAVAN', 'qmwertyuiopasdfghjklzxcvbn');
        expect(actual).to.equal(expected);
    })
        it('should return decoded message', () => {
        const expected = 'javan';
        const actual = substitution.substitution('oqxqd', 'qmwertyuiopasdfghjklzxcvbn', false);
        expect(actual).to.equal(expected);
    })
         it('should maintain spaces in the message', () => {
        const expected = 'rlxlz im pedlf';
        const actual = substitution.substitution('javan is great', 'qmwertyuiopasdfghjklzxcvbn', false);
        expect(actual).to.equal(expected);
    })
        it('should return false if alphabet is missing', () => {
        const expected = 'rlxlz im pedlf';
        const actual = substitution.substitution('javan is great', 'qmwertyuiopasdfghjklzxcvbn', false);
        expect(actual).to.equal(expected);
    })
        it('should return false if there is no alphabet', () => {
        const expected = false;
        const actual = substitution.substitution('javan is great');
        expect(actual).to.equal(expected);
    })
})
