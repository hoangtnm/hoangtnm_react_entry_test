var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var counts = {};
var maxKey = null;
var maxValue = 0;

for (var num of arr1) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

for (var key of Object.keys(counts)) {
  value = counts[key];
  if (value > maxValue) {
    maxKey = key;
    maxValue = value;
  }
}

console.log(`${maxKey} ( ${maxValue} times )`);
