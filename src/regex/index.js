function convertThousands(string) {
  const pattern = /\B(?=(\d{3})+(?!\d))/g;
  const thoundsands = string.toString().replace(pattern, ',');
  return thoundsands;
}

/*  
  x(?y) matches x only if x is followed by y
  x(?!y) matches x only if x is not followed by y
  we nested the last one in the first one
  \b means the first or the last of the string, or between the word and the non-word
   hello
  |     |
  \B means ~\b
  h e l l o
   | | | |
*/
module.exports = convertThousands;