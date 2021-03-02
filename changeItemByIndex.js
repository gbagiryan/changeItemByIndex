let arr = [
  [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
  ],
  [
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r'],
  ],
  [
    ['s', 't', 'u'],
    ['v', 'w', 'x'],
    ['y', 'z', '*'],
  ],
];

const changeItemByIndex = (strIndex, cb) => {
  const str = strIndex.split('.');
  let objAtIndex = arr;

  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1) {
      objAtIndex[str[i]] = cb(objAtIndex[str[i]]);
    }
    objAtIndex = objAtIndex[str[i]];
  }
};

changeItemByIndex('0.1.1', (l)=>(l.toUpperCase()));

console.log(arr);