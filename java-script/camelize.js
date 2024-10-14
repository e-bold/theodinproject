function camelize (str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1) // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']

        )
        .join('')
}

console.log(camelize("-background-color"))