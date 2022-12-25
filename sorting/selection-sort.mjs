import { swap } from "../util-functions.mjs";

const selectionSort = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < list.length; j++) {
      if (list[min] > list[j]) {
        min = j;
      }
    }

    swap(list, min, i);
  }
};

export default selectionSort;
