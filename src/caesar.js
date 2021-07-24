// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
      if (!shift || shift === 0 || shift < -25 || shift > 25){
        return false;
      }
      if(encode === false){
        shift*= (-1);  
      }
      let lowerCase = input.toLowerCase();
      let encrypted = '';
      for (let i = 0; i < lowerCase.length; i++){
        let letter = lowerCase[i].charCodeAt();
        if (letter < 97 || letter > 122){
          encrypted+= String.fromCharCode(letter)
          continue;
        }
       
         let encryptedLetter = letter + shift;
         if (encryptedLetter > 122) encryptedLetter-=26;
         if (encryptedLetter < 97) encryptedLetter+=26;
         encrypted+= String.fromCharCode(encryptedLetter)
      }
      return encrypted;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
