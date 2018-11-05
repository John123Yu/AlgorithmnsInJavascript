let data = [[1, 2, 5], [5, 8, 12], [0, 0, 0]];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === j) console.log(data[i][j]);
  }
}
