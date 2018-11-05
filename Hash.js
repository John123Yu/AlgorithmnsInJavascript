class Entry {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
  _entry() {
    this.next = null;
  }
  getKey() {
    return this.key;
  }
  getValue() {
    return this.value;
  }
}

class HashTableArray {
  constructor(size) {
    this.arrayHash = [];
    this.size = size;
    for (let i = 0; i < size; i++) {
      this.arrayHash[i] = new Entry(null, null);
    }
  }
  _getHash(key) {
    return key % this.size;
  }
  put(key, value) {
    let hashIndex = this._getHash(key);
    let hashEntry = this.arrayHash[hashIndex];
    let nextEntry = new Entry(key, value);
    hashEntry.next = nextEntry;
  }
  get(key) {
    let value = null;
    let hashIndex = this._getHash(key);
    let hashEntry = this.arrayHash[hashIndex];
    while (hashEntry != null) {
      if (hashEntry.getKey() === key) {
        value = hashEntry.getValue();
        break;
      }
      hashEntry = hashEntry.next;
    }
    return value;
  }
}

// let hashTableArray = new HashTableArray(10);
// hashTableArray.put(11, "hussein");
// hashTableArray.put(12, "jena");
// hashTableArray.put(13, "laya");
// console.log(hashTableArray);

// console.log(hashTableArray.get(13));

module.exports = { Entry, HashTableArray };
