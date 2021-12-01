const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let words = expr.split('**********');
    let result = [];
    for (let i = 0; i< words.length; i++) {
    	result.push(decodeOneWord(words[i]));
    }
    
    function decodeOneWord(word) {
    	let fullWord = '';
    	let letters = word.match(/.{1,10}/g);
      for (let i = 0; i < letters.length; i++) {
      	fullWord += decodeOneLetter(letters[i]);
      }
      return fullWord;
    }
    
    function decodeOneLetter(letter) {
    	let arr = letter.match(/.{1,2}/g);
      let res = '';
      for (let i = 0; i < arr.length; i++) {
      	if (arr[i] != '00') {
        	if (arr[i] == '10') {
          	res += '.';
          } else res += '-';
        }
      }
      let finalLetter = MORSE_TABLE[res];
      return finalLetter;
    }
    
    return result.join(' ');
}

module.exports = {
    decode,
}