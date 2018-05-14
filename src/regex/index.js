function convertThousands(string) {
  const pattern = /\B(?=(\d{3})+(?!\d))/g;
  const thoundsands = string.toString().replace(pattern, ',');
  return thoundsands;
}

/*  
  x(?y) matches x only if x is followed by y
  x(?!y) matches x only if x is not followed by y
  we nested the last one in the first one
  \b matches position whrere *a word character* is not followed or preceded by another word-character
   hello
  |     |
  \B means ~\b
  h e l l o
   | | | |
*/
module.exports = convertThousands;