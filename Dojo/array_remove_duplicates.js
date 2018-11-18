// page 38
let duplicates_1 = [
  "John",
  "Fred",
  "Fred",
  "Samantha",
  "Hillary",
  "Hillary",
  "Tom",
  "Ted",
  "Tank"
];
let duplicates_2 = [
  "John",
  "John",
  "Fred",
  "Fred",
  "Samantha",
  "Hillary",
  "Hillary",
  "Hillary",
  "Tom",
  "Ted",
  "Tank"
];
let duplicates_3 = [
  "John",
  "Fred",
  "Samantha",
  "Hillary",
  "Tom",
  "Ted",
  "Tank",
  "Tank"
];

function remove_duplicates(array) {
  let first_value = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] === first_value) {
      array[i] = undefined;
    } else {
      first_value = array[i];
    }
  }
  return array;
}

console.log(remove_duplicates(duplicates_1));
console.log(remove_duplicates(duplicates_2));
console.log(remove_duplicates(duplicates_3));
