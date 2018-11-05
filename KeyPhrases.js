var HashMap = require("hashmap");

class KeyPhrases {
  constructor() {
    let text =
      "Suppose we have a set of English text documents and wish to rank which document is most relevant to the query, the brown cow . A simple way to start out is by eliminating documents that do not contain all three words  the brow , and  cow , but this still leaves many documents";
    this.wordsToExclude = [
      "the",
      "a",
      "by",
      "to",
      "and",
      "of",
      ",",
      ".",
      "is",
      " "
    ];
    this.wordFreq = new HashMap();
    this.splitText = text.split(" ");
    this.splitText.forEach(word => {
      let key = word.trim().toLowerCase();
      if (this.wordsToExclude.indexOf(key) === -1 && key.length > 0) {
        if (this.wordFreq.get(key) === undefined) {
          this.wordFreq.set(key, 1);
        } else {
          let frequency = this.wordFreq.get(key) + 1;
          this.wordFreq.set(key, frequency);
        }
      }
    });

    this.wordFreq.forEach((value, key) => {
      console.log(`${key}-${value}`);
    });
  }
}

// console.log(Entry);
let keyPhrases = new KeyPhrases();
