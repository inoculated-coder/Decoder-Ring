// Write your tests here!
const { expect } = require('chai');
const caesar = require('../src/caesar');

describe('caesar', () => {
    it('should return false if shift is 0', () => {
      const expected = false
      const actual = caesar.caesar('thinkful',0);
      expect(actual).to.equal(expected);
    })
    it('should return false if shift is less than -25', () => {
      const expected = false
      const actual = caesar.caesar('thinkful',-26);
      expect(actual).to.equal(expected);
    })
    it('should return false if shift is greater than 25', () => {
      const expected = false
      const actual = caesar.caesar('thinkful',26);
      expect(actual).to.equal(expected);
    })
    it('should return false if shift is not present', () => {
      const expected = false
      const actual = caesar.caesar('thinkful');
      expect(actual).to.equal(expected);
   })
    it('should keep special characters the same',() => {
      const expected = "!!!"
      const actual = caesar.caesar("!!!", 3)
      expect(actual).to.equal(expected);
    })
    it('should keep spaces the same',() => {
      const expected = "!! !"
      const actual = caesar.caesar("!! !", 3)
      expect(actual).to.equal(expected);
    })
    it ('should ignore capital letters',() => {
      const expected = "ymnspkzq";
      const actual = caesar.caesar("THINKFUL", 5);
      expect(actual).to.equal(expected);
    })
    it('should wrap around back to the beginning of the alphabet',() => {
      const expected = "abc"
      const actual = caesar.caesar("xyz", 3);
      expect(actual).to.equal(expected);
    })
    it('should decode the message with negative shift', () => {
      const expected = "xyz"
      const actual = caesar.caesar("abc", 3, false);
      expect(actual).to.equal(expected);
    })
})