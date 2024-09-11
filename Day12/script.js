function cleanText(sentence) {
    const cleanedText = sentence.replace(/[%$@&#;,.!?]/g, '');
    const wordsArray = cleanedText.split(/\s+/);
    const wordCount = {};

    for (const word of wordsArray) {
        const loweredCase = word.toLowerCase();
        if (wordCount[loweredCase]) {
            wordCount[loweredCase]++;
        } else {
            wordCount[loweredCase] = 1;
        }
    }

    const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);
    const topThreeWords = sortedWords.slice(0, 3);

    console.log('Cleaned Text:', cleanedText);
    console.log('Top 3 most frequent words:', topThreeWords);

    return topThreeWords;
}

function mostFrequentWords(cleanedText) {
    const wordFrequent = {};

    for (const word of cleanedText) {
        const loweredCase = word.toLowerCase();
        if (wordFrequent[loweredCase]) {
            wordFrequent[loweredCase]++;
        } else {
            wordFrequent[loweredCase] = 1;
        }
    }

    const sortedWord = Object.entries(wordFrequent).sort((a, b) => b[1] - a[1]);
    console.log(sortedWord);
}

function tenMostFrequentWords(sentence) {
    const cleanedText = sentence.replace(/[%$@&#;,.!?]/g, '');
    const wordsArray = cleanedText.split(/\s+/);
    const wordCount = {};

    for (const word of wordsArray) {
        const loweredCase = word.toLowerCase();
        if (wordCount[loweredCase]) {
            wordCount[loweredCase]++;
        } else {
            wordCount[loweredCase] = 1;
        }
    }

    const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);
    const topTenWords = sortedWords.slice(0, 10);

    console.log('Top 10 most frequent words:', topTenWords);
    return topTenWords;
}

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

console.log(cleanText(sentence));
console.log(mostFrequentWords(cleanText(sentence)));
console.log(tenMostFrequentWords(sentence));
