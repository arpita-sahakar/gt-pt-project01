// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

// var longestWord = function(str) {};

const longestWord = (str) => {
  let splitWords = str.split(" ");
  let findLongestWord = "";

  for (i = 0; i < splitWords.length; i++) {
      
    if (splitWords[i].length > findLongestWord.length) {
      findLongestWord = splitWords[i];
    }
  }
  console.log(findLongestWord);
};

longestWord("My Name is Arpita Kar");
