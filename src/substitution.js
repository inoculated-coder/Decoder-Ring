// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const trueAlphabet = "abcdefghijklmnopqrstuvwxyz"
  function substitution(input, alphabet, encode = true) {
    // your solution code here
   let result =[];
    if( !alphabet || alphabet.length !==26 ) return false;
    
    const lowerCase = input.toLowerCase();
    let subAlpha ={};
    for (let character in alphabet){
      const letter = alphabet[character];
      if (alphabet.slice(character + 1).includes(letter)) {
        return false;
      }else { subAlpha[trueAlphabet[character]] = letter; } 
    }
    
    for (let letter in lowerCase){
      const character = lowerCase[letter];
      character in subAlpha ? result.push(subAlpha[character]) : result.push(character);
    }
    
    if(encode === false){
    let decodedAlpha = [];
    let decodedResult=[];
      for (let char in alphabet) {
      const letter = alphabet[char];
      decodedAlpha[letter] = trueAlphabet[char]; 
    }
  
    for (let letter in lowerCase) {
      const character = lowerCase[letter];
      character in decodedAlpha ? decodedResult.push(decodedAlpha[character]) : decodedResult.push(character);
    }
    return decodedResult.join('');
  }
    return result.join("")
  }


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
