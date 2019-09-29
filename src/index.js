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
    let data = expr.match(/.{1,10}/g);
    let string = '';
    data.forEach(function (item, index) {
        item = item.replace(/00/g,'');
        item = item.replace(/10/g,'.');
        item = item.replace(/11/g,'-');
        data[index] = item;
    });
    data.forEach(function (item) {
        if(item == '**********'){
            string = string + ' ';
        } else{
            string = string + MORSE_TABLE[item];
        }
    });
    return string;
}

module.exports = {
    decode
}