const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  let result = '';
  const chunksLength = 10;
  const chunks = [];
  const numberChunks = [];

  for (let i = 0; i < expr.length / chunksLength; i += 1) {
    const chunk = expr.slice(i * chunksLength, (i + 1) * chunksLength);
    chunks.push(chunk);
  }

  for (let i = 0; i < chunks.length; i += 1) {
    if (chunks[i] === '**********') {
      numberChunks.push(' ');
    } else {
      let morseChunk = '';

      for (let j = 0; j < chunksLength; j += 2) {
        const pair = chunks[i][j] + chunks[i][j + 1];

        if (pair === '10') {
          morseChunk += '.';
        } else if (pair === '11') {
          morseChunk += '-';
        }
      }

      numberChunks.push(morseChunk);
    }
  }
  numberChunks.forEach((chunk) => {
    if (chunk === ' ') {
      result += chunk;
    } else {
      result += MORSE_TABLE[chunk];
    }
  });

  return result;
};
