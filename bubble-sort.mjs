import { swap } from "./util-functions.mjs";

const bubbleSort = (list) => {
  let swapped;
  for (let i = 0; i < list.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        swap(list, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
};

export default bubbleSort;
