import { makeRandomArray } from "./util-functions.mjs";

import insertionSort from "./insertion-sort.mjs";

let testArray = makeRandomArray(50, -100, 100);

insertionSort(testArray);

console.log(testArray);
