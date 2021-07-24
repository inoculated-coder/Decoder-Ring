// Write your tests here!
const {expect} = require('chai');
const polybius = require('../src/polybius');

describe('polybius', () =>{
    it("should pass if function found", () =>{
        if (typeof polybius.polybius === "function") {
        console.log("Test passed.");
      } else {
        console.log("polybius is not a function.");
      }
    })
    it('should return 4242 for i/j replacment', () =>{
        const expected = "4242"
        const actual = polybius.polybius("ji")
        expect(actual).to.equal(expected);
    })
    it('should turn a string to a pair of numbers',() =>{
        const expected = '4211151133';
        const actual = polybius.polybius("javan");
        expect(actual).to.equal(expected)
    })
    it('should return (i/j) when decoding 42',() => {
      const expected = '(i/j)';
      const actual = polybius.polybius('42',false);
      expect(actual).to.equal(expected);
    })
    it('should maintain spaces after encoding',()=>{
      const expected = '421115 1133';
      const actual = polybius.polybius('jav an');
      expect(actual).to.equal(expected);
    })
    it('should maintain spaces after decoding',()=>{
      const expected = '(i/j)av an';
      const actual = polybius.polybius('421115 1133', false);
      expect(actual).to.equal(expected);
    })
    it('should ignore capital letter',() =>{
      const expected = '4211151133';
      const actual = polybius.polybius("JAVAN");
      expect(actual).to.equal(expected)
  })
    it('should decode message 23513434112251',()=>{
      const expected ='message';
      const actual = polybius.polybius('23513434112251', false)
      expect(actual).to.equal(expected);
    })
    it('should encode message ',()=>{
      const expected ='23513434112251';
      const actual = polybius.polybius('message')
      expect(actual).to.equal(expected);
    })
  
})