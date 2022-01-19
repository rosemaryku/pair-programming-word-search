const wordSearch = (letters, word) => {
  // Check if letters or word parameters are empty
  if (letters.length === 0 || word.length === 0) {
    return "Error wrong input";
  }

  // Obtain horizontal arrays - provided by instructions
  const horizontalJoin = letters.map((ls) => ls.join(""));

  // Create new empty array
  let newArr = [];

  // Loop through first array of matrix to push in correct number of arrays
  for (let i = 0; i < letters[0].length; i++) {
    newArr.push([]);
  }

  //  Loop through each element of the matrix and push to new arr
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      // Capture the element and push into the new array
      newArr[j].push(letters[i][j]);
    }
  }

  // Join elements in array
  const verticalJoin = [];
  for (let arr of newArr) {
    verticalJoin.push(arr.join(""));
  }

  // Loop through horizontal array to find if word is included
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  // Loop through horizontal array to find if word is included
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;
