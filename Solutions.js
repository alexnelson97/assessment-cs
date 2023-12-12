// 1) Sum Zero
function addToZero(arr) {
  let numSet = new Set();

  for (let num of arr) {
    if (numSet.has(-num)) {
      return true;
    }
    numSet.add(num);
  }

  return false;
}

// 2) Unique Characters
function hasUniqueChars(word) {
  let charSet = new Set();

  for (let char of word) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }

  return true;
}

// 3) Pangram Sentence
function isPangram(sentence) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowerSentence = sentence.toLowerCase();

  for (let char of alphabet) {
    if (!lowerSentence.includes(char)) {
      return false;
    }
  }

  return true;
}

// 4) Longest Word
function findLongestWord(words) {
  let maxLength = 0;

  for (let word of words) {
    maxLength = Math.max(maxLength, word.length);
  }

  return maxLength;
}
