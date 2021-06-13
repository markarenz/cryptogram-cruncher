import wordList from '@data/wordList';
import { alpha } from '@data/constants';
import { defaultAlphaKey } from '@data/constants';

const removeExtraSpaces = (str) => str.replace(/\s+/g,' ').replace(/^\s+|\s+$/,'').trim();
const cleanCyphertext = (str) => str.replace(/[^a-zA-Z 0-9]+/g,'').replace(/ +(?= )/g,'');
const isCharacterALetter = (c) => (c.match(/^[a-zA-Z]+$/));
const getDecryptedText = (cyphertext, alphaKey) => {
    const decrypt = cyphertext.split('').map((c, idx) => {
        if (isCharacterALetter(c)) {
            return safeKeyLookup(c, alphaKey);
        }
        return c;
    });
    return decrypt.join('');
};
const randomizeKey = (alphaKey) => {
    const keys = [...alpha];
    const options = [...alpha];
    const newAlphaKey = {};
    keys.map(k => {
        const c = options.filter(o => o !== k).sort( () => .5 - Math.random() )[0];
        const i = options.indexOf(c);
        options.splice(i, 1)
        newAlphaKey[k.toUpperCase()] = c;
        return null;
    });
    return newAlphaKey;
}
const checkProgress = (cyphertext, alphaKey) => {
    const t = getDecryptedText(cyphertext, alphaKey);
    const words = t.split(' ');
    const numWords = words.length;
    const numCorrect = words.filter(word => wordList.includes(cleanCyphertext(word))).length;
    return {numWords, numCorrect};
};
const safeKeyLookup = (c, alphaKey) => {
    const k = c.toUpperCase();
    const t = alphaKey[k];
    if (t) {
        return t.toUpperCase();
    }
    return c;
};
const nullZeroIncrement = (val) => {
    if (val) {
        return val + 1;
    }
    return 1;
};
const sortByNumOccurancesDesc = (obj) => {
    return Object.keys(obj).sort(function(a,b){return obj[b]-obj[a]});
};
const getAnalysis = (cyphertext) => {
    const cyphertextClean = cleanCyphertext(cyphertext);
    const words = cyphertextClean?.split(' ');
    const wordStarters = {};
    const wordEnders = {};
    const oneLetterWords = {};
    const letterFrequency = {};
    const doubleLetters = {};
    let lastLetter = '';
    cyphertextClean.split('').map(letter => {
        if (letter !== ' ') {
            letterFrequency[letter] = nullZeroIncrement(letterFrequency[letter]);
            if (lastLetter === letter) {
                doubleLetters[letter] = nullZeroIncrement(doubleLetters[letter]);
            }
            lastLetter = letter;
            return null;
        }
        lastLetter = '';
        return null;
    })
    words.map(word => {
        if (word.length > 0) {
            const firstLetter = word.substr(0,1);
            const lastLetter = word.substr(-1,1);
            wordStarters[firstLetter] = nullZeroIncrement(wordStarters[firstLetter]);
            wordEnders[firstLetter] = nullZeroIncrement(wordEnders[lastLetter]);
            if (word.length === 1) {
                oneLetterWords[firstLetter] = nullZeroIncrement(oneLetterWords[firstLetter])
            }
        }
        return null;
    })
    return {
        letterFrequency: letterFrequency,
        letterFrequencySorted: sortByNumOccurancesDesc(letterFrequency),
        oneLetterWordsSorted: sortByNumOccurancesDesc(oneLetterWords),
        doubleLettersSorted: sortByNumOccurancesDesc(doubleLetters),
        wordStartersSorted: sortByNumOccurancesDesc(wordStarters),
        wordEndersSorted: sortByNumOccurancesDesc(wordEnders),
    }
};
const batchRandomGuess = (cyphertext) => {
    const alphaKeys = [];
    const scores = [];
    let topScoreIndex = -1;
    let topScore = -1;
    const numGuesses = 1000;
    console.log('start batch....');
    for(let i=0; i<=numGuesses; i++){
        alphaKeys[i] = randomizeKey(defaultAlphaKey);
        const scoreObj = checkProgress(cyphertext, alphaKeys[i]);
        scores[i] = scoreObj.numCorrect;
        if (scores[i] > topScore){
            topScore = scores[i];
            topScoreIndex = i;
        }
    }
    return alphaKeys[topScoreIndex];
};

export {
    removeExtraSpaces,
    cleanCyphertext,
    getDecryptedText,
    isCharacterALetter,
    randomizeKey,
    checkProgress,
    safeKeyLookup,
    getAnalysis,
    batchRandomGuess,
};
