// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    console.log(`The input is ${input} and encode is set to ${encode}`)
    
    let polySquare= [
      ["a","b","c","d","e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z", " "],
    ];
    
   let rows;
    let result;
    if (encode){ 
    let inputArray = input.split('');
      let polyArray = inputArray.map((letter) => {
        let lowerCaseArray = letter.toLowerCase();
      if (lowerCaseArray === "i" || lowerCaseArray === "j") {
        return "(i/j)";
      }
      return lowerCaseArray;
    })
console.log("polyArray = "+polyArray);
    let xAxis = [];
    let yAxis = polyArray.map((letter)=> {
      for (let i = 0; i < polySquare.length; i++){
      rows = polySquare[i];
        let test = rows.indexOf(letter)
       if(test!== (-1) ){
         console.log(`This is a test for finding the matching letter: ${test + 1}`); 
        xAxis.push(i+1);
         return test + 1
     }
         
   }

 });
      console.log(`The yAxis is ${yAxis} and the xAxis is ${xAxis}`);
  result = xAxis.reduce((acc, current, index) => {
  let pair = `${yAxis[index]}${current}`;
  // converts numeric representation of a space back to " ".
  if (pair === "65") {
    pair = " ";
  }
  acc.push(pair);
  return acc;
}, []);

} else {
let spacesConverted = input.replace(" ", 65);
// checks that there are an even number of characters so that all coordinate pairs are kept together
if (spacesConverted.length % 2 !== 0) return false;
//create the pair of items which repreesents the cordinats the below regex split the string to array of pair
let coordinates = spacesConverted.match(/..?/g);
result = coordinates.map((cordinate) => {
let rowIndex = cordinate.split("")[1] - 1;
let columnIndex = cordinate.split("")[0] - 1;
return polySquare[rowIndex][columnIndex];
});
}
return result.join("");
}

    


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
