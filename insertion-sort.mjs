const insertionSort = (list) => {
	for (let i = 1; i < list.length; i++) {
		let j = i;
		let value = list[j];
		while (value < list[j - 1] && j > 0) {
			list[j] = list[j - 1];
			j--;
		}

		list[j] = value;
	}
};

export default insertionSort;
