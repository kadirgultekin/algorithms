const swap = (list, firstIndex, secondIndex) => {
  let temp = list[firstIndex];
  list[firstIndex] = list[secondIndex];
  list[secondIndex] = temp;
};

const getRandomNumberBetweenRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeRandomArray = (length, min, max) => {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(getRandomNumberBetweenRange(min, max));
  }

  return randomArray;
};

export { swap, makeRandomArray };
