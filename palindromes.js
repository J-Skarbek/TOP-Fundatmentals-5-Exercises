function palindromes(word) {
    //lowercase the string, use RegEx to rid myself of bullshit
    let regx = /[|\W_]/g;
    let lowRegWord = word.toLowerCase().replace(regx, '');
    let reverseWord = lowRegWord.split('').reverse().join('');
    return reverseWord === lowRegWord;

};

